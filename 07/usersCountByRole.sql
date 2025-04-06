SELECT
    role,
    COUNT(*) AS user_count
FROM
    users
GROUP BY
    role;