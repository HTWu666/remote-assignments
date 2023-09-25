-- Write an SQL statement to select all articles with their author’s email.
SELECT user.email, article.title, article.content FROM article LEFT JOIN user ON user.id=article.user_id;
SELECT user.email, article.title, article.content FROM article INNER JOIN user ON user.id=article.user_id;

-- Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT * FROM article ORDER BY id LIMIT 6 OFFSET 6;