# 🛡️ Defense Guide: Assignment 6 (Titanic)
# Гайд по защите: Задание 6 (Титаник)

---

## 🎯 Goal / Цель
**🇬🇧 English:** Predict who survives the Titanic disaster. This involves complex Feature Engineering and Model Tuning.
**🇷🇺 Русский:** Предсказать, кто выживет в катастрофе Титаника. Это включает в себя сложную инженерию признаков и настройку модели.

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Custom Transformer / Пользовательский трансформер
```python
class FamilySizeAdder(BaseEstimator, TransformerMixin):
    def transform(self, X):
        return np.c_[X, family_size]
```
*   **🇬🇧 Logic:** We create a class to add `FamilySize = SibSp + Parch + 1`.
*   **🇷🇺 Логика:** Мы создаем класс, чтобы добавить признак `FamilySize = Братья/Сестры + Родители + 1`.
*   **Why?** Scikit-Learn Pipelines only accept classes with `fit` and `transform` methods. Writing a custom class allows us to put our logic inside the pipeline cleanly.
*   **Зачем?** Пайплайны Scikit-Learn принимают только классы с методами `fit` и `transform`. Написание своего класса позволяет чисто встроить нашу логику в пайплайн.

### 2. ColumnTransformer / Трансформер колонок
```python
ColumnTransformer([
    ("num", num_pipeline, num_attribs),
    ("cat", OneHotEncoder(), cat_attribs),
])
```
*   **🇬🇧 Logic:** Splits data into two streams (Numbers vs Categories), processes them differently, and glues them back together.
*   **🇷🇺 Логика:** Разделяет данные на два потока (Числа и Категории), обрабатывает их по-разному и склеивает обратно.

### 3. Random Forest / Случайный лес
```python
RandomForestClassifier(n_estimators=100)
```
*   **🇬🇧 Logic:** An ensemble of 100 Decision Trees. Each tree votes, and the majority wins.
*   **🇷🇺 Логика:** Ансамбль из 100 деревьев решений. Каждое дерево голосует, и большинство побеждает.

---

## 📉 Weak Points & Improvements / Слабые места и улучшения

1.  **🇬🇧 Weakness:** We dropped the **Cabin** column because of missing values.
    *   **🇷🇺 Слабость:** Мы удалили колонку **Каюта (Cabin)** из-за пропусков.
    *   **🚀 Improvement:** The "Deck" (A, B, C...) could be extracted from the Cabin number. Richer people were on higher decks. This is valuable info we lost. / Можно было извлечь "Палубу" (A, B, C...) из номера каюты. Богатые люди были на верхних палубах. Мы потеряли эту ценную информацию.

---

## ❓ Professor Questions / Вопросы профессора

### Q1: Why is Random Forest better than a Decision Tree?
### В1: Почему Случайный лес лучше, чем Дерево решений?
*   **🇬🇧 Answer:** A single tree **overfits** (memorizes noise). A Random Forest averages many trees, which cancels out errors (Variance reduction).
*   **🇷🇺 Ответ:** Одно дерево **переобучается** (запоминает шум). Случайный лес усредняет много деревьев, что гасит ошибки (снижение дисперсии).

### Q2: What is GridSearchCV?
### В2: Что такое GridSearchCV?
*   **🇬🇧 Answer:** It's a brute-force search. I give it a list of settings (e.g., 10 trees, 50 trees, 100 trees), and it tries ALL of them to find the best one.
*   **🇷🇺 Ответ:** Это перебор грубой силой. Я даю список настроек (например, 10 деревьев, 50 деревьев, 100 деревьев), и он пробует ИХ ВСЕ, чтобы найти лучшую.

---

## 📐 Math Intuition / Математическая интуиция

**Ensemble Voting:**
**Голосование ансамбля:**

*   If you have 1 expert who is right 70% of the time, they are okay.
*   If you have 100 experts who are right 70% of the time, and they vote, the majority vote will be right **99.9%** of the time (Law of Large Numbers).
*   **🇷🇺 RU:** Если у вас есть 1 эксперт, который прав в 70% случаев — это нормально. Если у вас 100 экспертов, и они голосуют, большинство будет право в **99.9%** случаев (Закон больших чисел).
