# Defense Guide: Assignment 7 - Energy Efficiency Dataset

## 📖 Table of Contents
1. [Dataset Overview](#dataset-overview)
2. [Line-by-Line Code Explanations](#line-by-line-explanations)
3. [Model Deep Dive](#model-deep-dive)
4. [Common Questions & Answers](#qa-section)

---

## Dataset Overview

### 🇬🇧 English
The **Energy Efficiency Dataset** contains 768 simulated buildings with 8 input features and 2 output targets (Heating Load and Cooling Load). The buildings were simulated using Ecotect software with varying parameters like glazing area, orientation, and height.

**Why this dataset?**  
It demonstrates real-world building energy optimization, where architects need to predict energy requirements before construction.

### 🇷🇺 Русский
**Датасет Energy Efficiency** содержит 768 симуляций зданий с 8 входными параметрами и 2 целевыми переменными (Heating Load и Cooling Load). Здания были смоделированы в программе Ecotect с разными параметрами: площадь остекления, ориентация, высота.

**Зачем этот датасет?**  
Он демонстрирует реальную задачу оптимизации энергопотребления зданий, где архитекторам нужно предсказать расход энергии до строительства.

---

## Line-by-Line Explanations

### Q1: Data Loading / Загрузка данных

#### 🇬🇧 English
```python
import pandas as pd  # Data manipulation library
import numpy as np   # Numerical operations
import matplotlib.pyplot as plt  # Plotting library
import seaborn as sns  # Statistical visualization
```

**Line-by-line:**
1. **`pandas`**: The core library for working with tabular data (think Excel-like tables in Python).
2. **`numpy`**: Handles numerical arrays and mathematical operations efficiently.
3. **`matplotlib`**: Low-level plotting library. Think of it as the canvas.
4. **`seaborn`**: High-level plotting built on matplotlib. Provides beautiful statistical plots.

```python
df = pd.read_excel('ENB2012_data.xlsx')
```
- **`read_excel`**: Reads an Excel file (.xlsx) into a DataFrame.
- **DataFrame**: A table with rows (samples) and columns (features).

```python
columns = ['Relative_Compactness', 'Surface_Area', ...]
df.columns = columns
```
- **Purpose**: The Excel file has no headers, so we manually assign meaningful column names.
- **Why?**: Working with `df['Surface_Area']` is clearer than `df[1]`.

#### 🇷🇺 Русский
```python
import pandas as pd  # Библиотека для работы с таблицами
import numpy as np   # Числовые операции
import matplotlib.pyplot as plt  # Библиотека для графиков
import seaborn as sns  # Статистические графики
```

**Построчно:**
1. **`pandas`**: Основная библиотека для работы с таблицами (как Excel в Python).
2. **`numpy`**: Работает с числовыми массивами и математическими операциями.
3. **`matplotlib`**: Базовая библиотека для графиков. Это как холст.
4. **`seaborn`**: Высокоуровневая библиотека для красивых статистических графиков.

```python
df = pd.read_excel('ENB2012_data.xlsx')
```
- **`read_excel`**: Читает Excel файл в DataFrame.
- **DataFrame**: Таблица со строками (образцы) и столбцами (признаки).

```python
columns = ['Relative_Compactness', 'Surface_Area', ...]
df.columns = columns
```
- **Цель**: Excel файл без заголовков, поэтому мы вручную присваиваем имена столбцам.
- **Почему?**: Работать с `df['Surface_Area']` понятнее, чем с `df[1]`.

---

### Q2: Dataset Summary / Сводка по данным

#### 🇬🇧 English
```python
print(f\"Number of rows: {len(df)}\")
```
- **`len(df)`**: Returns the number of rows in the DataFrame.
- **f-string**: Python's formatted string literal (f\"text {variable}\").

```python
df.isnull().sum()
```
- **`df.isnull()`**: Returns a boolean DataFrame (True where value is missing).
- **`.sum()`**: Counts True values per column (number of missing values).

```python
df.describe()
```
- **Purpose**: Generates summary statistics (count, mean, std, min, 25%, 50%, 75%, max).
- **Use case**: Quickly spot outliers or unusual distributions.

#### 🇷🇺 Русский
```python
print(f\"Number of rows: {len(df)}\")
```
- **`len(df)`**: Возвращает количество строк в таблице.
- **f-string**: Форматированная строка Python (f\"текст {переменная}\").

```python
df.isnull().sum()
```
- **`df.isnull()`**: Возвращает таблицу с True/False (True = пропущенное значение).
- **`.sum()`**: Считает True по каждому столбцу (количество пропусков).

```python
df.describe()
```
- **Цель**: Генерирует статистику (количество, среднее, стандартное отклонение, мин, макс, квартили).
- **Применение**: Быстро найти выбросы или необычные распределения.

---

### Q3: Feature Distributions / Распределения признаков

#### 🇬🇧 English
```python
fig, axes = plt.subplots(4, 3, figsize=(15, 12))
axes = axes.ravel()
```
- **`plt.subplots(4, 3)`**: Creates a 4x3 grid of subplots (12 total).
- **`figsize=(15, 12)`**: Sets figure size in inches (width, height).
- **`axes.ravel()`**: Flattens 2D array of axes into 1D for easy iteration.

```python
for idx, col in enumerate(df.columns):
    axes[idx].hist(df[col].dropna(), bins=30, edgecolor='black', alpha=0.7)
```
- **`enumerate(df.columns)`**: Loops with index and column name.
- **`df[col].dropna()`**: Removes missing values before plotting.
- **`bins=30`**: Divides data into 30 equal-width ranges.
- **`edgecolor='black'`**: Adds black borders to bars.
- **`alpha=0.7`**: Sets transparency (0=invisible, 1=opaque).

#### 🇷🇺 Русский
```python
fig, axes = plt.subplots(4, 3, figsize=(15, 12))
axes = axes.ravel()
```
- **`plt.subplots(4, 3)`**: Создает сетку 4x3 графиков (всего 12).
- **`figsize=(15, 12)`**: Размер фигуры в дюймах (ширина, высота).
- **`axes.ravel()`**: Превращает 2D массив графиков в 1D для удобства.

```python
for idx, col in enumerate(df.columns):
    axes[idx].hist(df[col].dropna(), bins=30, edgecolor='black', alpha=0.7)
```
- **`enumerate(df.columns)`**: Цикл с индексом и названием столбца.
- **`df[col].dropna()`**: Удаляет пропуски перед построением графика.
- **`bins=30`**: Делит данные на 30 диапазонов одинаковой ширины.
- **`edgecolor='black'`**: Добавляет черные границы столбцам.
- **`alpha=0.7`**: Прозрачность (0=невидимый, 1=непрозрачный).

---

### Q5: Correlation Analysis / Анализ корреляций

#### 🇬🇧 English
```python
correlations = df.corr()['Heating_Load'].drop('Heating_Load').sort_values(ascending=False)
```
**Breaking it down:**
1. **`df.corr()`**: Computes pairwise correlations between ALL columns (Pearson correlation).
2. **`['Heating_Load']`**: Selects only correlations with Heating_Load.
3. **`.drop('Heating_Load')`**: Removes self-correlation (always 1.0).
4. **`.sort_values(ascending=False)`**: Sorts from highest to lowest correlation.

**What is correlation?**  
A measure of linear relationship between two variables (-1 to +1):
- **+1**: Perfect positive (when X increases, Y increases).
- **0**: No linear relationship.
- **-1**: Perfect negative (when X increases, Y decreases).

```python
correlations.plot(kind='barh', color='steelblue')
```
- **`kind='barh'`**: Horizontal bar chart.
- **Why horizontal?**: Easier to read long feature names.

#### 🇷🇺 Русский
```python
correlations = df.corr()['Heating_Load'].drop('Heating_Load').sort_values(ascending=False)
```
**Разбор:**
1. **`df.corr()`**: Вычисляет корреляции между ВСЕМИ столбцами (корреляция Пирсона).
2. **`['Heating_Load']`**: Выбирает только корреляции с Heating_Load.
3. **`.drop('Heating_Load')`**: Удаляет корреляцию с самим собой (всегда 1.0).
4. **`.sort_values(ascending=False)`**: Сортирует от большего к меньшему.

**Что такое корреляция?**  
Мера линейной связи между двумя переменными (от -1 до +1):
- **+1**: Идеальная положительная (когда X растет, Y растет).
- **0**: Нет линейной связи.
- **-1**: Идеальная отрицательная (когда X растет, Y падает).

```python
correlations.plot(kind='barh', color='steelblue')
```
- **`kind='barh'`**: Горизонтальная столбчатая диаграмма.
- **Почему горизонтально?**: Легче читать длинные названия признаков.

---

### Q7: Custom Transformer / Пользовательский трансформер

#### 🇬🇧 English
```python
from sklearn.base import BaseEstimator, TransformerMixin
```
- **`BaseEstimator`**: Provides `get_params()` and `set_params()` methods.
- **`TransformerMixin`**: Adds `fit_transform()` method automatically.

**Why custom transformers?**  
To create reusable, pipeline-compatible feature engineering steps.

```python
class RatioTransformer(BaseEstimator, TransformerMixin):
    def __init__(self, ratio_pairs):
        self.ratio_pairs = ratio_pairs
```
- **`__init__`**: Constructor method. Stores configuration (which ratios to create).
- **`self.ratio_pairs`**: List of tuples like `('Wall_Area', 'Surface_Area', 'New_Ratio')`.

```python
def fit(self, X, y=None):
    return self
```
- **Purpose**: Required by sklearn, even if no fitting is needed.
- **`return self`**: Allows method chaining (`transformer.fit(X).transform(X)`).

```python
def transform(self, X):
    X_copy = X.copy()
    for num_col, denom_col, new_col in self.ratio_pairs:
        X_copy[new_col] = X_copy[num_col] / (X_copy[denom_col] + 1e-10)
    return X_copy
```
- **`X_copy = X.copy()`**: Avoids modifying the original DataFrame.
- **`+ 1e-10`**: Prevents division by zero (adds tiny epsilon).
- **Purpose**: Creates ratio features (e.g., Wall/Surface ratio captures building shape).

#### 🇷🇺 Русский
```python
from sklearn.base import BaseEstimator, TransformerMixin
```
- **`BaseEstimator`**: Предоставляет методы `get_params()` и `set_params()`.
- **`TransformerMixin`**: Автоматически добавляет метод `fit_transform()`.

**Зачем кастомные трансформеры?**  
Чтобы создать переиспользуемые шаги feature engineering, совместимые с пайплайнами.

```python
class RatioTransformer(BaseEstimator, TransformerMixin):
    def __init__(self, ratio_pairs):
        self.ratio_pairs = ratio_pairs
```
- **`__init__`**: Конструктор. Сохраняет настройки (какие соотношения создавать).
- **`self.ratio_pairs`**: Список кортежей вида `('Wall_Area', 'Surface_Area', 'NewRatio')`.

```python
def fit(self, X, y=None):
    return self
```
- **Цель**: Требуется sklearn, даже если обучение не нужно.
- **`return self`**: Позволяет цепочку методов (`transformer.fit(X).transform(X)`).

```python
def transform(self, X):
    X_copy = X.copy()
    for num_col, denom_col, new_col in self.ratio_pairs:
        X_copy[new_col] = X_copy[num_col] / (X_copy[denom_col] + 1e-10)
    return X_copy
```
- **`X_copy = X.copy()`**: Избегает изменения оригинальной таблицы.
- **`+ 1e-10`**: Предотвращает деление на ноль (добавляет маленькое число).
- **Цель**: Создает признаки-соотношения (например, Wall/Surface описывает форму здания).

---

### Q8: Preprocessing Pipeline / Пайплайн предобработки

#### 🇬🇧 English
```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
```
- **`ColumnTransformer`**: Applies different transformations to different column groups.
- **`StandardScaler`**: Standardizes features (mean=0, std=1).
- **`OneHotEncoder`**: Converts categorical variables to binary vectors.

```python
preprocessor = ColumnTransformer(
    transformers=[
        ('cat', OneHotEncoder(drop='first', sparse_output=False), categorical_features),
        ('num', StandardScaler(), numerical_features)
    ],
    remainder='drop'
)
```
**Parameters explained:**
- **`transformers`**: List of (name, transformer, columns) tuples.
- **`drop='first'`**: Drops first category to avoid multicollinearity (dummy variable trap).
- **`sparse_output=False`**: Returns dense array instead of sparse matrix.
- **`remainder='drop'`**: Drops columns not specified in transformers.

#### 🇷🇺 Русский
```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
```
- **`ColumnTransformer`**: Применяет разные трансформации к разным группам столбцов.
- **`StandardScaler`**: Стандартизирует признаки (среднее=0, стд.откл.=1).
- **`OneHotEncoder`**: Превращает категории в бинарные векторы.

```python
preprocessor = ColumnTransformer(
    transformers=[
        ('cat', OneHotEncoder(drop='first', sparse_output=False), categorical_features),
        ('num', StandardScaler(), numerical_features)
    ],
    remainder='drop'
)
```
**Параметры:**
- **`transformers`**: Список кортежей (имя, трансформер, столбцы).
- **`drop='first'`**: Удаляет первую категорию, чтобы избежать мультиколлинеарности.
- **`sparse_output=False`**: Возвращает обычный массив вместо разреженной матрицы.
- **`remainder='drop'`**: Удаляет столбцы, не указанные в трансформерах.

---

### Q9-Q13: Model Training / Обучение моделей

#### 🇬🇧 English
```python
from sklearn.model_selection import train_test_split

X = df.drop(['Heating_Load', 'Cooling_Load'], axis=1)
y = df['Heating_Load']
```
- **`axis=1`**: Drop columns (axis=0 would drop rows).
- **Why drop Cooling_Load?**: It's data leakage (both are outputs of the same simulation).

```python
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```
- **`test_size=0.2`**: 20% for testing, 80% for training.
- **`random_state=42`**: Seed for reproducibility (same split every time).

```python
X_train_processed = preprocessor.fit_transform(X_train)
X_test_processed = preprocessor.transform(X_test)
```
**Critical concept:**
- **Fit on train only**: Learn scaling parameters from training data.
- **Transform both**: Apply learned parameters to both sets.
- **Why?**: Prevents test data leakage during preprocessing.

#### 🇷🇺 Русский
```python
from sklearn.model_selection import train_test_split

X = df.drop(['Heating_Load', 'Cooling_Load'], axis=1)
y = df['Heating_Load']
```
- **`axis=1`**: Удалить столбцы (axis=0 удалил бы строки).
- **Зачем удалять Cooling_Load?**: Это утечка данных (оба - выходы одной симуляции).

```python
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```
- **`test_size=0.2`**: 20% на тест, 80% на обучение.
- **`random_state=42`**: Зерно для воспроизводимости (одинаковое деление каждый раз).

```python
X_train_processed = preprocessor.fit_transform(X_train)
X_test_processed = preprocessor.transform(X_test)
```
**Критическая концепция:**
- **Fit на train**: Учим параметры масштабирования только на тренировочных данных.
- **Transform на обоих**: Применяем выученные параметры к обоим наборам.
- **Почему?**: Предотвращает утечку тестовых данных при предобработке.

---

## Model Deep Dive

### Linear Regression / Линейная регрессия

#### 🇬🇧 English
**How it works:**
1. Assumes a linear relationship: $y = w_1x_1 + w_2x_2 + ... + b$
2. Finds weights ($w$) and bias ($b$) that minimize Mean Squared Error.
3. Uses **Ordinary Least Squares** (OLS) - analytical solution (no iterations).

**Pros:**
- Fast to train
- Interpretable coefficients
- Works well with linear relationships

**Cons:**
- Cannot capture non-linear patterns
- Assumes features are independent (no complex interactions)

**When to use:**
- Baseline model (always try first)
- When interpretability is critical (banking, medical)

#### 🇷🇺 Русский
**Как работает:**
1. Предполагает линейную связь: $y = w_1x_1 + w_2x_2 + ... + b$
2. Находит веса ($w$) и смещение ($b$), которые минимизируют среднеквадратичную ошибку.
3. Использует **Метод наименьших квадратов** (OLS) - аналитическое решение (без итераций).

**Плюсы:**
- Быстрое обучение
- Интерпретируемые коэффициенты
- Хорошо работает с линейными связями

**Минусы:**
- Не ловит нелинейные паттерны
- Предполагает независимость признаков (нет сложных взаимодействий)

**Когда использовать:**
- Базовая модель (всегда пробуем первой)
- Когда важна интерпретируемость (банки, медицина)

---

### Random Forest Regressor / Случайный лес

#### 🇬🇧 English
**How it works:**
1. **Bootstrap Aggregating** (Bagging): Creates 200 random subsets of training data.
2. **Tree Building**: Grows a decision tree on each subset.
   - At each split, considers random subset of features (default: √n_features for regression).
3. **Prediction**: Averages predictions from all 200 trees.

**Why it's powerful:**
- **Reduces overfitting**: Individual trees overfit, but averaging smooths this out.
- **Captures non-linearity**: Trees naturally handle complex interactions.
- **Robust**: Not sensitive to outliers or feature scaling.

**Hyperparameters:**
- **`n_estimators=200`**: Number of trees (more trees = better, but slower).
- **`max_depth`**: Maximum tree depth (default: unlimited, grows until pure splits).

**When to use:**
- Default choice for tabular data
- When non-linear relationships exist
- When you don't want to spend time tuning

#### 🇷🇺 Русский
**Как работает:**
1. **Bootstrap Aggregating**: Создает 200 случайных подвыборок из обучающих данных.
2. **Построение деревьев**: Строит дерево решений на каждой подвыборке.
   - В каждом узле смотрит на случайное подмножество признаков (по умолчанию: √n_features для регрессии).
3. **Предсказание**: Усредняет предсказания от всех 200 деревьев.

**Почему это мощно:**
- **Снижает переобучение**: Отдельные деревья переобучаются, но усреднение это сглаживает.
- **Ловит нелинейность**: Деревья естественно работают со сложными взаимодействиями.
- **Устойчивость**: Не чувствительна к выбросам или масштабированию признаков.

**Гиперпараметры:**
- **`n_estimators=200`**: Количество деревьев (больше = лучше, но медленнее).
- **`max_depth`**: Максимальная глубина дерева (по умолчанию: без ограничений).

**Когда использовать:**
- Стандартный выбор для табличных данных
- Когда есть нелинейные связи
- Когда нет времени на настройку

---

### Gradient Boosting Regressor / Градиентный бустинг

#### 🇬🇧 English
**How it works (simplified):**
1. **Start**: Make initial prediction (e.g., mean of all targets).
2. **Sequential Learning**:
   - Train tree to predict residuals (errors) of previous model.
   - Add this tree to ensemble with small weight (learning_rate).
   - Update predictions.
3. **Repeat** 200 times (n_estimators).

**Key difference from Random Forest:**
- **RF**: Trees trained in parallel (independent).
- **GB**: Trees trained sequentially (each corrects previous).

**Why it's powerful:**
- **Precision**: Iteratively reduces errors.
- **Often best performance** on tabular data.

**Hyperparameters:**
- **`n_estimators=200`**: Number of boosting stages.
- **`learning_rate`**: Shrinkage factor (default: 0.1). Lower = slower but more precise.
- **`max_depth`**: Tree depth (default: 3, shallow trees prevent overfitting).

**Trade-offs:**
- **Pros**: Best accuracy on tabular data.
- **Cons**: Slower to train, easier to overfit (needs tuning).

#### 🇷🇺 Русский
**Как работает (упрощенно):**
1. **Старт**: Делаем начальное предсказание (например, среднее всех целевых значений).
2. **Последовательное обучение**:
   - Обучаем дерево предсказывать остатки (ошибки) предыдущей модели.
   - Добавляем это дерево в ансамбль с малым весом (learning_rate).
   - Обновляем предсказания.
3. **Повторяем** 200 раз (n_estimators).

**Ключевое отличие от Random Forest:**
- **RF**: Деревья обучаются параллельно (независимо).
- **GB**: Деревья обучаются последовательно (каждое исправляет предыдущее).

**Почему это мощно:**
- **Точность**: Итеративно уменьшает ошибки.
- **Часто лучшая производительность** на табличных данных.

**Гиперпараметры:**
- **`n_estimators=200`**: Количество этапов бустинга.
- **`learning_rate`**: Коэффициент сжатия (по умолчанию: 0.1). Меньше = медленнее, но точнее.
- **`max_depth`**: Глубина дерева (по умолчанию: 3, мелкие деревья предотвращают переобучение).

**Компромиссы:**
- **Плюсы**: Лучшая точность на табличных данных.
- **Минусы**: Медленнее обучается, легче переобучается (требует настройки).

---

## Q&A Section

### Q1: Why do we drop Cooling_Load?
**🇬🇧 English:**  
Because Heating_Load and Cooling_Load are both **outputs** of the same building simulation. They are highly correlated (r≈0.976) not because one causes the other, but because they share the same input parameters. Using Cooling_Load to predict Heating_Load is **data leakage** - in real applications, you wouldn't know Cooling_Load before predicting Heating_Load.

**🇷🇺 Русский:**  
Потому что Heating_Load и Cooling_Load - это оба **выхода** одной и той же симуляции здания. Они сильно коррелируют (r≈0.976) не потому, что одно вызывает другое, а потому что зависят от одних и тех же входных параметров. Использовать Cooling_Load для предсказания Heating_Load - это **утечка данных** - в реальности вы не знали бы Cooling_Load до предсказания Heating_Load.

---

### Q2: What is R² and why is it better than RMSE?
**🇬🇧 English:**  
**R² (Coefficient of Determination)** measures the proportion of variance in the target explained by your model.

Formula: $R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$

- **RMSE**: Absolute error in target units (e.g., kWh). Hard to interpret without context.
- **R²**: Normalized (0-1 scale). R²=0.9 means "90% of variance explained" - universally understandable.

**Use both:**  
- R² for model comparison.
- RMSE to understand real-world error magnitude.

**🇷🇺 Русский:**  
**R²** измеряет долю дисперсии целевой переменной, объясненной моделью.

Формула: $R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$

- **RMSE**: Абсолютная ошибка в единицах цели (например, кВт·ч). Трудно интерпретировать без контекста.
- **R²**: Нормализован (шкала 0-1). R²=0.9 означает "90% дисперсии объяснено" - понятно всем.

**Используйте оба:**  
- R² для сравнения моделей.
- RMSE для понимания реальной величины ошибки.

---

### Q3: Why does Gradient Boosting perform best?
**🇬🇧 English:**  
1. **Sequential error correction**: Each tree fixes mistakes of the previous ensemble.
2. **Adaptive learning**: Focuses more on hard-to-predict samples (high residuals).
3. **Fine-tuning**: With low learning_rate, it makes small, precise adjustments.

Think of it as a sculptor: Random Forest is like making 200 rough sketches and averaging them. Gradient Boosting is like starting with a rough sketch and iteratively refining details.

**🇷🇺 Русский:**  
1. **Последовательное исправление ошибок**: Каждое дерево исправляет ошибки предыдущего ансамбля.
2. **Адаптивное обучение**: Фокусируется больше на сложных образцах (с большими остатками).
3. **Точная настройка**: С малым learning_rate делает маленькие, точные корректировки.

Представьте скульптора: Random Forest - это 200 грубых набросков, которые потом усредняются. Gradient Boosting - это начать с грубого наброска и итеративно уточнять детали.

---

### Q4: When would Linear Regression outperform tree models?
**🇬🇧 English:**  
1. **Very small datasets** (< 100 samples): Trees overfit easily.
2. **Truly linear relationships**: If data follows a straight line, trees waste capacity.
3. **High-dimensional sparse data**: Text classification with 10,000+ features.
4. **Extrapolation needed**: Trees cannot predict beyond training range, linear models can.

**🇷🇺 Русский:**  
1. **Очень маленькие датасеты** (< 100 образцов): Деревья легко переобучаются.
2. **Действительно линейные связи**: Если данные следуют прямой линии, деревья тратят ресурсы зря.
3. **Высокомерные разреженные данные**: Классификация текстов с 10,000+ признаками.
4. **Нужна экстраполяция**: Деревья не могут предсказывать за пределами обучающего диапазона, линейные модели могут.

---

### Q5: How to choose n_estimators?
**🇬🇧 English:**  
**Rule of thumb:**
- Start with 100.
- Increase to 200-500 if compute time allows.
- Use **learning curves**: Plot validation score vs. n_estimators. Stop when curve plateaus.

**For Gradient Boosting specifically:**  
Use **early stopping** with validation set to automatically determine optimal n_estimators.

**🇷🇺 Русский:**  
**Правило:**
- Начните с 100.
- Увеличьте до 200-500, если позволяет время вычислений.
- Используйте **кривые обучения**: Постройте график валидации vs. n_estimators. Остановитесь, когда кривая выходит на плато.

**Для Gradient Boosting конкретно:**  
Используйте **early stopping** с валидационным набором, чтобы автоматически определить оптимальный n_estimators.

---

## Summary / Итог

### 🇬🇧 English
This assignment covers the complete ML workflow:
1. **EDA**: Understand data distributions, correlations, and potential issues.
2. **Feature Engineering**: Create custom transformers for domain-specific features.
3. **Preprocessing**: Build modular pipelines for scalability.
4. **Modeling**: Compare linear vs. ensemble methods.
5. **Evaluation**: Use R² and RMSE to assess performance.

**Key takeaway**: Tree-based ensembles (RF, GB) excel at tabular regression tasks with non-linear relationships.

### 🇷🇺 Русский
Это задание охватывает полный ML workflow:
1. **EDA**: Понять распределения, корреляции и потенциальные проблемы.
2. **Feature Engineering**: Создать кастомные трансформеры для специфичных признаков.
3. **Предобработка**: Построить модульные пайплайны для масштабируемости.
4. **Моделирование**: Сравнить линейные и ансамблевые методы.
5. **Оценка**: Использовать R² и RMSE для оценки производительности.

**Главный вывод**: Древовидные ансамбли (RF, GB) превосходны в задачах регрессии на табличных данных с нелинейными связями.
