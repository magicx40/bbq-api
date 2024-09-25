import * as bcrypt from 'bcrypt';
export async function password_hash(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
