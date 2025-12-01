# 🛡️ Defense Guide: Assignment 6 (Titanic)
# 🇷🇺 Гайд по защите: Задание 6 (Титаник)

---

## 🎯 Goal / Цель
**🇬🇧 English:**  
Predict who survives the Titanic disaster. This involves **Feature Engineering** (creating new features like Family Size) and comparing multiple models (**Logistic Regression, Random Forest, SVM**).

**🇷🇺 Русский:**  
Предсказать, кто выживет в катастрофе Титаника. Это включает в себя **Инженерию признаков** (создание новых признаков, таких как Размер семьи) и сравнение нескольких моделей (**Логистическая регрессия, Случайный лес, SVM**).

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Custom Transformer / Пользовательский трансформер
```python
class FamilySizeAdder(BaseEstimator, TransformerMixin):
    def transform(self, X):
        family_size = sibsp + parch + 1
        return np.c_[X, family_size]
```
*   **🇬🇧 Logic:** We create a new feature `FamilySize` by adding `SibSp` (Siblings/Spouses) + `Parch` (Parents/Children) + 1 (Self).
*   **🇷🇺 Логика:** Мы создаем новый признак `FamilySize` (Размер семьи), складывая `SibSp` (Братья/Сестры) + `Parch` (Родители/Дети) + 1 (Сам пассажир).
*   **Why?** Large families might have a harder time escaping together. Alone people might be forgotten. This combines two weak features into one strong one.
*   **Зачем?** Большим семьям может быть труднее спастись вместе. Одиноких людей могут забыть. Это объединяет два слабых признака в один сильный.

### 2. Log Transformation / Логарифмирование
```python
FunctionTransformer(np.log1p)
```
*   **🇬🇧 Logic:** We apply `log(1 + x)` to the `Fare` column.
*   **🇷🇺 Логика:** Мы применяем `log(1 + x)` к колонке `Fare` (Стоимость билета).
*   **Why?** Fare is highly skewed (some tickets are \$500, most are \$10). Log makes the distribution normal, which helps Linear Regression and SVM.
*   **Зачем?** Стоимость билета сильно скошена (некоторые билеты стоят \$500, большинство — \$10). Логарифм делает распределение нормальным, что помогает Логистической регрессии и SVM.

### 3. Random Forest / Случайный лес
```python
RandomForestClassifier(n_estimators=150)
```
*   **🇬🇧 Logic:** An ensemble of 150 Decision Trees. Each tree votes, and the majority wins.
*   **🇷🇺 Логика:** Ансамбль из 150 деревьев решений. Каждое дерево голосует, и большинство побеждает.

---

## 📉 Weak Points & Improvements / Слабые места и улучшения

### 1. Dropping Cabin / Удаление каюты
*   **🇬🇧 Weakness:** We dropped the `Cabin` column because it had many missing values.
*   **🇷🇺 Слабость:** Мы удалили колонку `Cabin` (Каюта), потому что в ней было много пропусков.
*   **🚀 Improvement:** Extract the **Deck** (A, B, C...) from the cabin number. Richer people were on higher decks (closer to lifeboats).
*   **🚀 Улучшение:** Извлечь **Палубу** (A, B, C...) из номера каюты. Богатые люди были на верхних палубах (ближе к шлюпкам).

### 2. Title Extraction / Извлечение титула
*   **🇬🇧 Weakness:** We used raw names.
*   **🇷🇺 Слабость:** Мы использовали сырые имена.
*   **🚀 Improvement:** Extract titles like "Mr.", "Mrs.", "Miss", "Master". "Master" (boy) had a much higher survival rate than "Mr." (man).
*   **🚀 Улучшение:** Извлечь титулы, такие как "Mr.", "Mrs.", "Miss", "Master". "Master" (мальчик) имел гораздо более высокий шанс выживания, чем "Mr." (мужчина).

---

## ❓ Professor Questions / Вопросы профессора

### Q1: Why is Random Forest better than a single Decision Tree?
### В1: Почему Случайный лес лучше, чем одно Дерево решений?
*   **🇬🇧 Answer:** A single tree **overfits** (memorizes noise). A Random Forest averages many trees, which cancels out errors (reduces Variance).
*   **🇷🇺 Ответ:** Одно дерево **переобучается** (запоминает шум). Случайный лес усредняет много деревьев, что гасит ошибки (снижает дисперсию).

### Q2: Why did SVM perform poorly without scaling?
### В2: Почему SVM показал плохой результат без масштабирования?
*   **🇬🇧 Answer:** SVM tries to maximize the "margin" (distance) between classes. If one feature (Fare) is 500 and another (Age) is 30, the distance is dominated by Fare. SVM becomes biased towards high-value features.
*   **🇷🇺 Ответ:** SVM пытается максимизировать "зазор" (расстояние) между классами. Если один признак (Fare) равен 500, а другой (Age) — 30, расстояние определяется Fare. SVM становится смещенным в сторону признаков с большими значениями.

---

## 📐 Math Intuition / Математическая интуиция

### Ensemble Voting (Wisdom of the Crowd)
### Голосование ансамбля (Мудрость толпы)

*   **🇬🇧 EN:** If you have 1 expert who is right 70% of the time, they are okay. If you have 100 experts who are right 70% of the time, and they vote, the majority vote will be correct **>99%** of the time (Law of Large Numbers).
*   **🇷🇺 RU:** Если у вас есть 1 эксперт, который прав в 70% случаев — это нормально. Если у вас 100 экспертов, и они голосуют, большинство будет право в **>99%** случаев (Закон больших чисел).
