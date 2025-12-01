# 🛡️ Defense Guide: Assignment 2 (Life Satisfaction)
# 🇷🇺 Гайд по защите: Задание 2 (Удовлетворенность жизнью)

---

## 🎯 Goal / Цель
**🇬🇧 English:**  
Predict if people in a country are happy (**Life Satisfaction**) based on how much money they make (**GDP per capita**). We compare two models: **Linear Regression** and **K-Nearest Neighbors (KNN)**.

**🇷🇺 Русский:**  
Предсказать, счастливы ли люди в стране (**Удовлетворенность жизнью**), основываясь на том, сколько денег они зарабатывают (**ВВП на душу населения**). Мы сравниваем две модели: **Линейная регрессия** и **Метод ближайших соседей (KNN)**.

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Data Preparation / Подготовка данных
```python
X = df[['GDP per capita']].values
y = df['Life satisfaction'].values
```
*   **🇬🇧 Logic:**
    *   `X` (Features): Must be a **2D array** (matrix). That's why we use double brackets `[['...']]` or `.values` with reshaping. Scikit-Learn expects a list of rows, where each row is a list of features.
    *   `y` (Target): Is a **1D array** (vector).
*   **🇷🇺 Логика:**
    *   `X` (Признаки): Должен быть **двумерным массивом** (матрицей). Поэтому мы используем двойные скобки `[['...']]`. Scikit-Learn ожидает список строк, где каждая строка — это список признаков.
    *   `y` (Цель): Это **одномерный массив** (вектор).

### 2. Linear Regression / Линейная регрессия
```python
model = LinearRegression()
model.fit(X, y)
```
*   **🇬🇧 Logic:** The model tries to draw a **straight line** ($y = mx + b$) that minimizes the error (distance) between the line and the data points.
*   **🇷🇺 Логика:** Модель пытается провести **прямую линию** ($y = mx + b$), которая минимизирует ошибку (расстояние) между линией и точками данных.

### 3. K-Nearest Neighbors (KNN) / Метод ближайших соседей
```python
model = KNeighborsRegressor(n_neighbors=3)
```
*   **🇬🇧 Logic:** To predict happiness for a new country, the model finds the **3 countries** with the most similar GDP and calculates their average happiness.
*   **🇷🇺 Логика:** Чтобы предсказать счастье для новой страны, модель находит **3 страны** с самым похожим ВВП и вычисляет их среднее счастье.

---

## 📉 Weak Points & Improvements / Слабые места и улучшения

### 1. Single Feature / Один признак
*   **🇬🇧 Weakness:** We only use **GDP**. Happiness depends on many things (health, freedom, corruption, weather).
*   **🇷🇺 Слабость:** Мы используем только **ВВП**. Счастье зависит от многих вещей (здоровье, свобода, коррупция, погода).
*   **🚀 Improvement:** Use **Multivariate Regression** (add more columns like 'Health', 'Freedom'). / Использовать **Многофакторную регрессию** (добавить колонки 'Здоровье', 'Свобода').

### 2. Linearity Assumption / Предположение линейности
*   **🇬🇧 Weakness:** Linear Regression assumes the relationship is a straight line. But maybe after a certain point, more money doesn't make you happier (diminishing returns).
*   **🇷🇺 Слабость:** Линейная регрессия предполагает, что связь — это прямая линия. Но, возможно, после определенной точки деньги перестают приносить счастье (убывающая полезность).
*   **🚀 Improvement:** Use **Polynomial Regression** (curved line). / Использовать **Полиномиальную регрессию** (изогнутая линия).

---

## ❓ Professor Questions / Вопросы профессора

### Q1: Why did you choose Linear Regression?
### В1: Почему вы выбрали линейную регрессию?
*   **🇬🇧 Answer:** It is the simplest model. The scatter plot showed a general upward trend, so a straight line is a good starting point (baseline).
*   **🇷🇺 Ответ:** Это самая простая модель. Точечный график показал общий тренд вверх, поэтому прямая линия — хорошая отправная точка (базовая модель).

### Q2: What is the difference between `fit` and `predict`?
### В2: В чем разница между `fit` и `predict`?
*   **🇬🇧 Answer:**
    *   `fit(X, y)`: **Training**. The model looks at the data and calculates the best parameters (slope and intercept).
    *   `predict(X)`: **Inference**. The model uses the calculated parameters to guess the target for new data.
*   **🇷🇺 Ответ:**
    *   `fit(X, y)`: **Обучение**. Модель смотрит на данные и вычисляет лучшие параметры (наклон и сдвиг).
    *   `predict(X)`: **Предсказание**. Модель использует вычисленные параметры, чтобы угадать ответ для новых данных.

### Q3: What happens if `n_neighbors=1` in KNN?
### В3: Что будет, если `n_neighbors=1` в KNN?
*   **🇬🇧 Answer:** The model becomes **unstable (overfitting)**. It will blindly copy the value of the single nearest neighbor, even if that point is an outlier or noise.
*   **🇷🇺 Ответ:** Модель становится **нестабильной (переобучение)**. Она будет слепо копировать значение единственного ближайшего соседа, даже если эта точка — выброс или шум.

---

## 📐 Math Intuition / Математическая интуиция

### Linear Regression Equation
$$ y = \theta_0 + \theta_1 x $$
*   $\theta_0$ (Intercept): Where the line starts on the Y-axis. (Базовый уровень счастья).
*   $\theta_1$ (Slope): How much happiness increases for every $1 increase in GDP. (Скорость роста счастья).

### KNN Formula
$$ y = \frac{1}{k} \sum_{i=1}^{k} y_i $$
*   **English:** Average of the $k$ nearest neighbors.
*   **Русский:** Среднее арифметическое $k$ ближайших соседей.
