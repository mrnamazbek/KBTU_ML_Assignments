# 🛡️ Defense Guide: Assignment 1 (Markdown)
# Гайд по защите: Задание 1 (Markdown)

---

## 🎯 Goal / Цель
**🇬🇧 English:** Demonstrate proficiency in formatting text and images in Jupyter Notebooks using Markdown and HTML.
**🇷🇺 Русский:** Продемонстрировать навыки форматирования текста и изображений в Jupyter Notebook с использованием Markdown и HTML.

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Headings / Заголовки
```markdown
# Title (Level 1)
## Subtitle (Level 2)
### Section (Level 3)
```
*   **🇬🇧 Logic:** The number of hashtags `#` determines the size.
*   **🇷🇺 Логика:** Количество решеток `#` определяет размер.

### 2. Centering Text / Центрирование текста
```html
<h1 align="center">Welcome</h1>
```
*   **🇬🇧 Logic:** Markdown doesn't support centering natively, so we use **HTML**. The `align="center"` attribute does the magic.
*   **🇷🇺 Логика:** Markdown не поддерживает центрирование "из коробки", поэтому мы используем **HTML**. Атрибут `align="center"` делает магию.

### 3. Resizing Images / Изменение размера изображений
```html
<img src="cat.png" width="200px" />
```
*   **🇬🇧 Logic:** Standard Markdown `![Alt](url)` cannot resize images. We must use the HTML `<img>` tag to set `width` or `height`.
*   **🇷🇺 Логика:** Стандартный Markdown `![Alt](url)` не умеет менять размер. Мы обязаны использовать HTML тег `<img>`, чтобы задать `width` (ширину) или `height` (высоту).

### 4. Side by Side Layout / Расположение рядом
```html
<table>
  <tr>
    <td><img src="..." /></td>
    <td>Text</td>
  </tr>
</table>
```
*   **🇬🇧 Logic:** We use an HTML **Table**. `<tr>` is a table row, `<td>` is a table data cell (column). This forces elements to sit next to each other.
*   **🇷🇺 Логика:** Мы используем HTML **Таблицу**. `<tr>` — это строка, `<td>` — это ячейка (столбец). Это заставляет элементы стоять рядом.

---

## ❓ Professor Questions / Вопросы профессора

### Q1: Why do we use HTML in a Markdown cell?
### В1: Зачем мы используем HTML в ячейке Markdown?
*   **🇬🇧 Answer:** Markdown is simple but limited. For advanced styling like centering, resizing images, or complex layouts, HTML provides more control. Jupyter renders both.
*   **🇷🇺 Ответ:** Markdown прост, но ограничен. Для сложного стиля, такого как центрирование, изменение размера картинок или сложная верстка, HTML дает больше контроля. Jupyter отображает и то, и другое.

### Q2: What is the difference between `<div>` and `<span>`?
### В2: В чем разница между `<div>` и `<span>`?
*   **🇬🇧 Answer:** `<div>` is a **block** element (starts a new line). `<span>` is an **inline** element (stays on the same line).
*   **🇷🇺 Ответ:** `<div>` — это **блочный** элемент (начинает новую строку). `<span>` — это **строчный** элемент (остается на той же строке).

---

## 💡 Pro Tip / Совет
*   **🇬🇧:** If an image link breaks, use a reliable placeholder service like `placekitten.com` or `via.placeholder.com` for demonstration.
*   **🇷🇺:** Если ссылка на картинку ломается, используйте надежные сервисы-заглушки, такие как `placekitten.com` или `via.placeholder.com` для демонстрации.
