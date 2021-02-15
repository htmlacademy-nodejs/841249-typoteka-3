--Получить список всех категорий (идентификатор, наименование категории);
SELECT id, title FROM categories
--Получить список категорий для которых создана минимум одна публикация (идентификатор, наименование категории);
SELECT id, title FROM categories c
JOIN articles_categories ac ON ac.article_id = c.id
GROUP BY c.id
ORDER BY c.id ASC
--Получить список категорий с количеством публикаций (идентификатор, наименование категории, количество публикаций в категории);
SELECT id, title, count(ac.category_id) FROM categories c
JOIN articles_categories ac ON ac.category_id = c.id
GROUP BY c.id
ORDER BY c.id ASC
--Получить список публикаций (идентификатор публикации, заголовок публикации, анонс публикации, дата публикации, имя и фамилия автора, контактный email, количество комментариев, наименование категорий). Сначала свежие публикации;
SELECT
a.id,
a.title,
a.announce,
a.created_date,
u.firstname,
u.lastname,
u.email,
count(c.id) AS comments,
cat.title
from articles a
JOIN users u ON a.user_id = u.id
JOIN comments c ON c.article_id = a.id
JOIN categories cat ON a.id = cat.id
GROUP BY a.id, u.firstname, u.lastname, u.email, cat.title
--Получить полную информацию определённой публикации (идентификатор публикации, заголовок публикации, анонс, полный текст публикации, дата публикации, путь к изображению, имя и фамилия автора, контактный email, количество комментариев, наименование категорий);
SELECT
a.id,
a.title,
a.announce,
a.full_text,
a.created_date,
a.image_path,
u.firstname,
u.lastname,
u.email,
count(c.id) AS comments,
cat.title
from articles a
JOIN users u ON a.user_id = u.id
JOIN comments c ON c.article_id = a.id
JOIN categories cat ON a.id = cat.id
WHERE a.id = 1
GROUP BY a.id, u.firstname, u.lastname, u.email, cat.title
--Получить список из 5 свежих комментариев (идентификатор комментария, идентификатор публикации, имя и фамилия автора, текст комментария);
SELECT c.id, c.article_id, u.firstname, u.lastname, c.text from comments c
JOIN users u ON c.user_id = u.id
ORDER BY c.created_date DESC LIMIT 5
--Получить список комментариев для определённой публикации (идентификатор комментария, идентификатор публикации, имя и фамилия автора, текст комментария). Сначала новые комментарии;
SELECT c.id, c.article_id, u.firstname, u.lastname, c.text from comments c
JOIN users u ON c.user_id = u.id
WHERE c.article_id = 1
ORDER BY c.created_date DESC
--Обновить заголовок определённой публикации на «Как я встретил Новый год»;
UPDATE articles a
SET announce = 'Как я встретил Новый год'
WHERE a.id = 1
