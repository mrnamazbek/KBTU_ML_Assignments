# 🛡️ Defense Guide: Assignment 1 (Markdown)
# 🇷🇺 Гайд по защите: Задание 1 (Markdown)

---

## 🎯 Goal / Цель
**🇬🇧 English:**  
Demonstrate proficiency in formatting text and images in Jupyter Notebooks using **Markdown** and **HTML**. The goal is to learn how to present data and analysis beautifully.

**🇷🇺 Русский:**  
Продемонстрировать навыки форматирования текста и изображений в Jupyter Notebook с использованием **Markdown** и **HTML**. Цель — научиться красиво представлять данные и анализ.

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Headings / Заголовки
```markdown
# Title (Level 1)
## Subtitle (Level 2)
### Section (Level 3)
```
*   **🇬🇧 Logic:** The number of hashtags `#` determines the heading size. One `#` is the largest (H1), six `#` is the smallest (H6).
*   **🇷🇺 Логика:** Количество решеток `#` определяет размер заголовка. Одна `#` — самый большой (H1), шесть `#` — самый маленький (H6).

### 2. Centering Text / Центрирование текста
```html
<h1 align="center">Welcome</h1>
```
*   **🇬🇧 Logic:** Standard Markdown does **not** support text alignment. We use **HTML tags** (`<h1>`) with the `align="center"` attribute to achieve this.
*   **🇷🇺 Логика:** Стандартный Markdown **не** поддерживает выравнивание текста. Мы используем **HTML теги** (`<h1>`) с атрибутом `align="center"`, чтобы сделать это.

### 3. Resizing Images / Изменение размера изображений
```html
<img src="cat.png" width="200px" />
```
*   **🇬🇧 Logic:** Markdown syntax `![Alt](url)` displays images at full size. To resize, we **must** use the HTML `<img>` tag and set the `width` or `height` attribute.
*   **🇷🇺 Логика:** Синтаксис Markdown `![Alt](url)` показывает изображения в полном размере. Чтобы изменить размер, мы **обязаны** использовать HTML тег `<img>` и задать атрибут `width` (ширина) или `height` (высота).

### 4. Side by Side Layout / Расположение рядом
```html
<table>
  <tr>
    <td><img src="cat.png" /></td>
    <td>Text description...</td>
  </tr>
</table>
```
*   **🇬🇧 Logic:** We use an HTML **Table** to create a layout.
    *   `<table>`: Container.
    *   `<tr>`: Table Row.
    *   `<td>`: Table Data (cell).
    *   This forces elements to sit next to each other horizontally.
*   **🇷🇺 Логика:** Мы используем HTML **Таблицу** для создания макета.
    *   `<table>`: Контейнер.
    *   `<tr>`: Строка таблицы.
    *   `<td>`: Ячейка таблицы.
    *   Это заставляет элементы располагаться рядом друг с другом по горизонтали.

---

## ❓ Professor Questions / Вопросы профессора

### Q1: Why do we use HTML in a Markdown cell?
### В1: Зачем мы используем HTML в ячейке Markdown?
*   **🇬🇧 Answer:** Markdown is a lightweight language designed for simplicity. It lacks advanced styling features like centering, resizing, or complex layouts. Jupyter Notebooks render HTML, so we use it to overcome these limitations.
*   **🇷🇺 Ответ:** Markdown — это легкий язык, созданный для простоты. В нем нет продвинутых функций стиля, таких как центрирование, изменение размера или сложная верстка. Jupyter Notebook отображает HTML, поэтому мы используем его, чтобы обойти эти ограничения.

### Q2: What is the difference between `<div>` and `<span>`?
### В2: В чем разница между `<div>` и `<span>`?
*   **🇬🇧 Answer:**
    *   `<div>` is a **block-level** element. It starts on a new line and takes up the full width (like a paragraph).
    *   `<span>` is an **inline** element. It stays on the same line and only takes up as much width as necessary (like bold text).
*   **🇷🇺 Ответ:**
    *   `<div>` — это **блочный** элемент. Он начинается с новой строки и занимает всю ширину (как параграф).
    *   `<span>` — это **строчный** элемент. Он остается на той же строке и занимает столько места, сколько нужно (как жирный текст).

### Q3: How do you make text bold or italic in Markdown?
### В3: Как сделать текст жирным или курсивом в Markdown?
*   **🇬🇧 Answer:**
    *   **Bold:** Use double asterisks `**text**` or double underscores `__text__`.
    *   *Italic:* Use single asterisk `*text*` or single underscore `_text_`.
*   **🇷🇺 Ответ:**
    *   **Жирный:** Используйте двойные звездочки `**текст**` или двойные подчеркивания `__текст__`.
    *   *Курсив:* Используйте одну звездочку `*текст*` или одно подчеркивание `_текст_`.

---

## 💡 Pro Tips / Советы
*   **🇬🇧:** You can use `<br>` to insert a line break inside a table cell or complex layout.
*   **🇷🇺:** Вы можете использовать `<br>`, чтобы вставить разрыв строки внутри ячейки таблицы или сложного макета.
*   **🇬🇧:** Use `&nbsp;` (Non-Breaking Space) to add extra spaces between elements if needed.
*   **🇷🇺:** Используйте `&nbsp;` (неразрывный пробел), чтобы добавить лишние пробелы между элементами, если нужно.
