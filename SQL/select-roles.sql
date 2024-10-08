SELECT u.id as u_id,
    u.username,
    r.id as r_id,
    r.role_name
FROM users u
    JOIN user_roles ur ON ur.user_id = u.id
    JOIN roles r ON r.id = ur.role_id;