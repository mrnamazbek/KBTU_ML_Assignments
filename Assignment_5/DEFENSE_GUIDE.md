# 🛡️ Defense Guide: Assignment 5 (Adult Income)
# 🇷🇺 Гайд по защите: Задание 5 (Доходы взрослых)

---

## 🎯 Goal / Цель
**🇬🇧 English:**  
Predict if a person earns more than **$50k/year** based on census data (age, education, occupation, etc.). This is a **Binary Classification** task.

**🇷🇺 Русский:**  
Предсказать, зарабатывает ли человек больше **$50k в год**, основываясь на данных переписи (возраст, образование, профессия и т.д.). Это задача **Бинарной классификации**.

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Handling Missing Values / Обработка пропусков
```python
df.fillna(df.median(), inplace=True) # Numerical
df.fillna(df.mode()[0], inplace=True) # Categorical
```
*   **🇬🇧 Logic:** We cannot train models with empty data (NaN).
    *   **Numerical:** We use the **Median** because it is robust to outliers (unlike Mean).
    *   **Categorical:** We use the **Mode** (most frequent value).
*   **🇷🇺 Логика:** Мы не можем обучать модели на пустых данных (NaN).
    *   **Числовые:** Мы используем **Медиану**, так как она устойчива к выбросам (в отличие от Среднего).
    *   **Категориальные:** Мы используем **Моду** (самое частое значение).

### 2. One-Hot Encoding / One-Hot Кодирование
```python
pd.get_dummies(X, drop_first=True)
```
*   **🇬🇧 Logic:** Converts categorical text into numbers.
    *   "Male" -> `1`, "Female" -> `0`.
    *   `drop_first=True` removes the first column to avoid multicollinearity (Dummy Variable Trap). If we know it's not Male, it must be Female.
*   **🇷🇺 Логика:** Превращает категориальный текст в числа.
    *   "Male" -> `1`, "Female" -> `0`.
    *   `drop_first=True` удаляет первую колонку, чтобы избежать мультиколлинеарности (Ловушка фиктивных переменных). Если мы знаем, что это не Мужчина, значит это Женщина.

### 3. Logistic Regression / Логистическая регрессия
```python
LogisticRegression(max_iter=1000)
```
*   **🇬🇧 Logic:** Predicts the **probability** (0 to 1) that a person belongs to the ">50k" class using a sigmoid function.
*   **🇷🇺 Логика:** Предсказывает **вероятность** (от 0 до 1), что человек принадлежит к классу ">50k", используя сигмоидную функцию.

---

## 📉 Weak Points & Improvements / Слабые места и улучшения

### 1. Missing Feature Scaling / Отсутствие масштабирования
*   **🇬🇧 Weakness:** We did **not** scale the data. KNN is distance-based. "Capital Gain" (0-99999) dominates "Age" (0-100).
*   **🇷🇺 Слабость:** Мы **не** масштабировали данные. KNN основан на расстоянии. "Прирост капитала" (0-99999) доминирует над "Возрастом" (0-100).
*   **🚀 Improvement:** Apply **StandardScaler** or **MinMaxScaler** before training KNN. / Применить **StandardScaler** или **MinMaxScaler** перед обучением KNN.

### 2. Imbalanced Data / Несбалансированные данные
*   **🇬🇧 Weakness:** There are many more poor people (<=50k) than rich people (>50k). The model might be biased towards the majority class.
*   **🇷🇺 Слабость:** Бедных людей (<=50k) намного больше, чем богатых (>50k). Модель может быть смещена в сторону большинства.
*   **🚀 Improvement:** Use `class_weight='balanced'` in Logistic Regression. / Использовать `class_weight='balanced'` в Логистической регрессии.

---

## ❓ Professor Questions / Вопросы профессора

### Q1: Why use `drop_first=True` in One-Hot Encoding?
### В1: Зачем использовать `drop_first=True` в One-Hot кодировании?
*   **🇬🇧 Answer:** To avoid **perfect multicollinearity**. If we have "Is_Male" and "Is_Female", they are perfectly correlated (if one is 1, the other is 0). This confuses linear models.
*   **🇷🇺 Ответ:** Чтобы избежать **идеальной мультиколлинеарности**. Если у нас есть "Is_Male" и "Is_Female", они идеально коррелируют (если один 1, другой 0). Это путает линейные модели.

### Q2: Why is Logistic Regression better than KNN here?
### В2: Почему Логистическая регрессия лучше, чем KNN здесь?
*   **🇬🇧 Answer:**
    1.  **Interpretability:** We can see which features increase income (positive coefficients).
    2.  **Scaling:** KNN fails without scaling; Logistic Regression is more robust (though scaling still helps).
    3.  **Speed:** KNN is slow on large datasets like 'Adult'.
*   **🇷🇺 Ответ:**
    1.  **Интерпретируемость:** Мы видим, какие признаки повышают доход (положительные коэффициенты).
    2.  **Масштабирование:** KNN ломается без масштабирования; Логистическая регрессия более устойчива (хотя масштабирование все равно полезно).
    3.  **Скорость:** KNN медленный на больших данных, таких как 'Adult'.

---

## 📐 Math Intuition / Математическая интуиция

### Sigmoid Function (Logistic Regression)
$$ P(y=1) = \frac{1}{1 + e^{-z}} $$
*   **🇬🇧 EN:** It squashes any number (z) into a probability between 0 and 1.
*   **🇷🇺 RU:** Она сжимает любое число (z) в вероятность от 0 до 1.
