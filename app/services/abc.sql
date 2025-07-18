DELIMITER //

CREATE PROCEDURE calculate_weekly_ranks(IN p_test_id INT)
BEGIN
    -- Temporarily disable safe update mode if needed
    SET SQL_SAFE_UPDATES = 0;

    -- Update ranks using a common table expression (CTE) or subquery
    UPDATE user_tests ut
    JOIN (
        SELECT
            user_id,
            test_id,
            score,
            ROW_NUMBER() OVER (PARTITION BY test_id ORDER BY score DESC, submitted_at ASC) as calculated_rank
        FROM user_tests
        WHERE test_id = p_test_id AND submitted_at IS NOT NULL
    ) AS ranks ON ut.user_id = ranks.user_id AND ut.test_id = ranks.test_id
    SET ut.rank = ranks.calculated_rank
    WHERE ut.test_id = p_test_id;

    -- Re-enable safe update mode
    SET SQL_SAFE_UPDATES = 1;
END //

DELIMITER ;