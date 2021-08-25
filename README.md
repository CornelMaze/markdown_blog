# Markdown Blog

This is a blogging system that converts markdown portion of the input field into html.
It contains the logic for CRUD operations for the post. We can create, read, update and delete posts.
root url is http://localhost:3002

| #   | Routers              | Verbs  | Progress | Is Private | Description   |
| --- | -------------------- | ------ | -------- | ---------- | ------------- |
| 1   | '/articles/new'      | POST   | DONE     | No         | Create post   |
| 2   | '/articles/edit/:id' | PATCH  | DONE     | No         | Edit post     |
| 3   | '/articles/:id'      | DELETE | DONE     | No         | Delete a post |
| 4   | '/articles/:slug'    | GET    | DONE     | No         | Read a post   |
