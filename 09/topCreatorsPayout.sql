WITH
    top_creators AS (
        SELECT
            id
        FROM
            users
        WHERE
            role = 'creator'
        ORDER BY
            rating DESC
        LIMIT
            3
    )
UPDATE users
SET
    balance = balance + 10
WHERE
    id IN (
        SELECT
            id
        FROM
            top_creators
    );