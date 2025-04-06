WITH
    cashback AS (
        SELECT
            contests.user_id,
            SUM(contests.prize) * 0.10 AS cashback_amount
        FROM
            contests
        WHERE
            contests.created_at BETWEEN '2024-12-25' AND '2025-01-14'
        GROUP BY
            contests.user_id
    )
UPDATE users
SET
    balance = balance + cashback.cashback_amount
FROM
    cashback
WHERE
    users.id = cashback.user_id
  AND users.role = 'customer';