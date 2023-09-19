-- Write an SQL statement to select all articles with their author’s email.
SELECT email, title, content FROM user INNER JOIN article ON user.id=article.user_id WHERE user.email='test';

-- Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT * FROM article ORDER BY id LIMIT 6 OFFSET 6;