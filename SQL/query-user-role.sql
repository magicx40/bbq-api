SELECT u.id as user_id,
    u.username as username,
    r.id as roleId,
    r.role_name as role_name
FROM users u
    LEFT JOIN user_roles ur ON ur.user_id = u.id
    LEFT JOIN roles r ON ur.role_id = r.id;