import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Role } from 'src/modules/roles/entities/role.entity';
import { QueryRoleDto } from 'src/modules/roles/dto/query-role.dto';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { JWT_EXPIRATION, REDIS_JWT_PREFIX } from './const';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user?.roles) {
      const roleDto = plainToInstance(QueryRoleDto, user.roles);
      user.roles = instanceToPlain(roleDto) as Role[];
    }
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles,
    };
    const accessToken = this.jwtService.sign(payload);
    this.redis.set(
      `${REDIS_JWT_PREFIX}${payload.username}`,
      accessToken,
      'EX',
      JWT_EXPIRATION,
    );
    return {
      accessToken,
    };
  }

  async logout(username: string) {
    return this.redis.del(`${REDIS_JWT_PREFIX}${username}`);
  }

  getUserByToken(token: string) {
    return this.jwtService.verify(token);
  }
}
