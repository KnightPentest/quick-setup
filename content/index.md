---
title: "Главная страница"
---

# Добро пожаловать!

Вот список всех ваших заметок:

{% for page in allFiles %}
- [{{ page.title | default: "Без названия" }}]({{ page.url }})
  - **Дата:** {{ page.created | date: "YYYY-MM-DD" }}
  - **Описание:** {{ page.description | default: "Описание отсутствует" }}
  - **Теги:** {{ page.tags | join: ", " }}
{% endfor %}
