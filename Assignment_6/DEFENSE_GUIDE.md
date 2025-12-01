# 🛡️ **DETAILED DEFENSE GUIDE: Assignment 6 - Titanic (Advanced Feature Engineering)**
# 🇷🇺 **ПОДРОБНЫЙ ГАЙД ПО ЗАЩИТЕ: Задание 6 - Титаник (Продвинутая инженерия признаков)**

---

## **Overview / Обзор**

**🇬🇧 English:**  
This assignment demonstrates **advanced ML techniques**: Custom Transformers, FunctionTransformers, Feature Engineering, and Ensemble Methods (Random Forest). You'll predict Titanic survival using **creative feature creation** and **model comparison**.

**🇷🇺 Русский:**  
Это задание демонстрирует **продвинутые ML-техники**: Пользовательские трансформеры, инженерию признаков и ансамблевые методы (Случайный лес). Вы будете предсказывать выживание на Титанике, используя **творческое создание признаков** и **сравнение моделей**.

**Key Concepts:**
- Custom Transformers (`BaseEstimator`, `TransformerMixin`)
- FunctionTransformer (log transformation)
- Feature Engineering (creating `FamilySize`)
- Random Forest vs SVM vs Logistic Regression
- Feature scaling impact on different algorithms

### **✅ Defense Tip**
Be ready to explain: *"How does your custom transformer work?"* and *"Why does SVM need scaling but Random Forest doesn't?"*

---

## **1. Critical Code Analysis**

### **Step 1: Custom Transformer - FamilySizeAdder**

**Code:**
```python
from sklearn.base import BaseEstimator, TransformerMixin

class FamilySizeAdder(BaseEstimator, TransformerMixin):
    def __init__(self):
        pass
    
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        sibsp = X[:, 1]  # Column 1: SibSp
        parch = X[:, 2]  # Column 2: Parch
        family_size = sibsp + parch + 1
        return np.c_[X, family_size]
```

**🇬🇧 Deep Dive:**

**Why create a custom transformer?**
- **Problem:** You want to add a feature (`FamilySize = SibSp + Parch + 1`) to your data.
- **Why not just do it manually?** You could, but custom transformers make your code:
  1. **Reusable:** Can use in pipelines.
  2. **Compatible with Scikit-Learn:** Works with `fit_transform()`, cross-validation, etc.

**Line-by-Line:**

**`class FamilySizeAdder(BaseEstimator, TransformerMixin):`:**
- **Inherits from:**
  - `BaseEstimator`: Provides `get_params()` and `set_params()` (needed for grid search).
  - `TransformerMixin`: Provides `fit_transform()` method automatically.

**`def __init__(self):`:**
- **Purpose:** Constructor. Initialize any parameters here.
- **Here:** No parameters needed, so just `pass`.

**`def fit(self, X, y=None):`:**
- **Purpose:** "Fit" the transformer to data.
- **Here:** `FamilySize` doesn't need training (it's a simple formula), so we just `return self`.
- **Why `y=None`?** Some transformers don't need the target variable (like this one).

**`def transform(self, X):`:**
- **Purpose:** Apply the transformation.
- **Input:** `X` is a NumPy array (shape: `[n_samples, n_features]`).
- **Logic:**
  - `sibsp = X[:, 1]`: Extract column 1 (all rows, column index 1).
  - `parch = X[:, 2]`: Extract column 2.
  - `family_size = sibsp + parch + 1`: Calculate family size (+1 for the person themselves).
  - `np.c_[X, family_size]`: Concatenate the new column to the original array.
- **Returns:** New array with one extra column.

**🇷🇺 Глубокий анализ:**

**Зачем создавать пользовательский трансформер?**
- **Проблема:** Хотите добавить признак (`FamilySize`).
- **Почему не вручную?** Можно, но пользовательские трансформеры делают код:
  1. **Повторно используемым**.
  2. **Совместимым с Scikit-Learn**.

---

### **Step 2: FunctionTransformer (Log Transformation)**

**Code:**
```python
from sklearn.preprocessing import FunctionTransformer

log_transformer = FunctionTransformer(np.log1p, validate=True)
fare_log = log_transformer.transform(fare_col)
```

**🇬🇧 Explanation:**

**What is `FunctionTransformer`?**
- A **wrapper** that turns any function into a Scikit-Learn transformer.
- **Purpose:** Apply simple transformations (like `log`, `sqrt`) without writing a full custom class.

**Parameters:**

**`np.log1p`:**
- **Function:** `log(1 + x)`.
- **Why `+1`?** Prevents `log(0) = -∞` if any fare is $0.
- **Effect:** Transforms right-skewed data (long tail) into a more normal distribution.

**`validate=True`:**
- **Purpose:** Check that the input is a valid NumPy array.
- **Why?** Catches errors early if you accidentally pass wrong data.

**When to use log transformation:**
- **Right-skewed data:** Most values small, few very large (e.g., fare: most $10, few $500).
- **Helps:** Linear Regression, SVM (assumes normal distribution).
- **Doesn't help:** Tree-based models (Random Forest, Decision Tree) — they handle skewed data naturally.

**🇷🇺 Объяснение:**

**Что такое `FunctionTransformer`?**
- **Обертка**, которая превращает любую функцию в трансформер Scikit-Learn.

**`np.log1p`:**
- **Функция:** `log(1 + x)`.
- **Зачем `+1`?** Предотвращает `log(0) = -∞`.

**Когда использовать логарифм:**
- **Данные с правосторонней асимметрией:** Большинство значений маленькие, немногие очень большие.

---

### **Step 3: Model Comparison with Scaling**

**Code:**
```python
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

models = {
    "Logistic Regression": LogisticRegression(),
    "Random Forest": RandomForestClassifier(n_estimators=150),
    "SVM": SVC()
}

for name, model in models.items():
    model.fit(X_train_scaled, y_train)
    acc = model.score(X_test_scaled, y_test)
    print(f"{name}: {acc:.4f}")
```

**🇬🇧 Results (Typical with Scaling):**
- **Logistic Regression:** ~80%
- **Random Forest:** ~82% (often best)
- **SVM:** ~79%

**Results WITHOUT Scaling:**
- **Logistic Regression:** ~78% (↓2%)
- **Random Forest:** ~82% (unchanged)
- **SVM:** ~65% (↓↓14% major drop!)

**Why does SVM fail without scaling?**

**How SVM works:**
- Tries to maximize the **margin** (distance) between classes.
- Uses distance calculations.

**Problem:**
- If `Fare` ranges from $0-500 and `Age` ranges from 0-80:
  - Distance is dominated by `Fare` (much larger numbers).
  - `Age` becomes almost irrelevant.
- SVM finds a boundary based mostly on `Fare`, ignoring `Age`.

**Solution: StandardScaler**
$$ x_{\text{scaled}} = \frac{x - \mu}{\sigma} $$
- Transforms each feature to have mean = 0, std = 1.
- Now both `Fare` and `Age` are on the same scale (-2 to +2).
- SVM considers both features equally.

**Why Random Forest doesn't need scaling:**
- **Tree-based models** make decisions by **splitting**: "Is Age > 30?"
- They don't calculate distances.
- Whether Age is 0-80 or -2 to +2, the split point is the same (just scaled).

**🇷🇺 Почему SVM ломается без масштабирования?**

**Как работает SVM:**
- Пытается максимизировать **зазор** (расстояние) между классами.
- Использует вычисления расстояния.

**Проблема:**
- Если `Fare` от $0-500, а `Age` от 0-80, расстояние доминирует за счет `Fare`.

**Решение: StandardScaler**
- Преобразует каждый признак к среднему = 0, стд = 1.
- Теперь оба признака на одной шкале.

**Почему Случайный лес не нуждается в масштабировании:**
- **Древовидные модели** принимают решения по **разделению**: "Возраст > 30?"
- Они не вычисляют расстояния.

---

## **2. Professor Questions**

### **Q1: Why is Random Forest better than a single Decision Tree?**

**🇬🇧 Answer:**  
"A single tree **overfits** (memorizes noise). It might say: 'If passengerID is even, survive.' This works on training data but fails on new data.

**Random Forest** trains **150 trees** (each on a random subset of data and features). Each tree makes different mistakes. When they vote, the errors cancel out. This is called **Variance Reduction** through **Ensemble Learning**."

**🇷🇺 Ответ:**  
"Одно дерево **переобучается** (запоминает шум). Случайный лес обучает **150 деревьев** (каждое на случайном подмножестве данных). Ошибки компенсируются при голосовании. Это называется **снижением дисперсии** через **ансамблевое обучение**."

---

### **Q2: Why did you use `np.c_[X, family_size]` instead of `np.append`?**

**🇬🇧 Answer:**  
"`np.c_[]` is a convenient way to **column-wise concatenate** arrays. It's shorthand for `np.concatenate((X, family_size.reshape(-1, 1)), axis=1)`. It automatically handles reshaping and is more readable."

**`np.append` is inefficient** for arrays (creates a copy every time). `np.c_[]` is optimized for this use case."

---

### **Q3: What happens if you don't scale data before using SVM?**

**🇬🇧 Answer:**  
"SVM becomes biased towards features with large numeric ranges. For example, if `Fare` ($0-500) and `Age` (0-80), the distance metric is dominated by `Fare`. The model essentially ignores `Age`, leading to poor performance."

---

### **Q4: Why did you add a `FamilySize` feature?**

**🇬🇧 Answer:**  
"**Hypothesis:** Survival might depend on family size.
- **Alone:** Might be forgotten in chaos.
- **Large family:** Hard to escape together.
- **Small family (2-4):** Optimal (can stick together).

By combining `SibSp` (siblings/spouses) and `Parch` (parents/children) into one feature, we give the model a single, meaningful variable instead of two weaker ones."

---

## **3. Weaknesses & Improvements**

### **Weakness 1: Dropped Cabin Column**

**✅ Improvement:**
```python
df['Deck'] = df['Cabin'].str[0]  # Extract first letter (deck: A, B, C...)
# Rich people on higher decks (closer to lifeboats)
```

---

### **Weakness 2: Ignored Name/Title**

**✅ Improvement:**
```python
df['Title'] = df['Name'].str.extract(r' ([A-Za-z]+)\.')
# "Mr.", "Mrs.", "Miss", "Master" → Survival rates vary significantly
```

---

## **Final Confidence Check**

✅ You understand **custom transformers**.  
✅ You know **why scaling matters for SVM but not Random Forest**.  
✅ You can explain **ensemble learning** (Wisdom of the Crowd).  
✅ You're ready!

**Defense Mantra:**  
*"I engineered a FamilySize feature using a custom transformer, applied log transformation to handle skewness, and compared multiple models with proper scaling to find the best performer (Random Forest at 82% accuracy)."*

**Good luck, Namazbek! You've mastered all 6 assignments! 💪🚢**
