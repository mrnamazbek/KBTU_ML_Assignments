# 🛡️ Defense Guide: Assignment 4 (House Prices EDA)
# 🇷🇺 Гайд по защите: Задание 4 (Анализ цен на жилье)

---

## 🎯 Goal / Цель
**🇬🇧 English:**  
Explore the **Ames Housing dataset** to understand what factors influence house prices. We use **EDA (Exploratory Data Analysis)** to visualize distributions and correlations.

**🇷🇺 Русский:**  
Исследовать **набор данных Ames Housing**, чтобы понять, какие факторы влияют на цены домов. Мы используем **EDA (Разведочный анализ данных)** для визуализации распределений и корреляций.

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Correlation Matrix / Матрица корреляции
```python
corr_matrix = df.select_dtypes(include=[np.number]).corr()
sns.heatmap(corr_matrix, cmap='coolwarm')
```
*   **🇬🇧 Logic:** We calculate the correlation between all numerical features.
    *   **High Correlation (> 0.7):** `OverallQual` (Quality), `GrLivArea` (Size). These strongly predict the price.
    *   **Multicollinearity:** Some features like `GarageCars` and `GarageArea` are highly correlated with *each other*. This can be redundant.
*   **🇷🇺 Логика:** Мы вычисляем корреляцию между всеми числовыми признаками.
    *   **Высокая корреляция (> 0.7):** `OverallQual` (Качество), `GrLivArea` (Размер). Они сильно предсказывают цену.
    *   **Мультиколлинеарность:** Некоторые признаки, такие как `GarageCars` (Вместимость гаража) и `GarageArea` (Площадь гаража), сильно коррелируют *друг с другом*. Это может быть избыточным.

### 2. Histograms / Гистограммы
```python
df[num_cols].hist(bins=20)
```
*   **🇬🇧 Logic:** Shows the distribution of data.
*   **🇷🇺 Логика:** Показывает распределение данных.
*   **Observation:** The target variable `SalePrice` is **right-skewed** (long tail to the right). Most houses are cheap, a few are very expensive.
*   **Наблюдение:** Целевая переменная `SalePrice` имеет **правостороннюю асимметрию** (длинный хвост справа). Большинство домов дешевые, немногие — очень дорогие.

### 3. Scatter Plot / Точечная диаграмма
```python
sns.scatterplot(x='GrLivArea', y='SalePrice')
```
*   **🇬🇧 Logic:** Visualizes the relationship between Living Area and Price. We see a clear **linear trend** (bigger house = higher price).
*   **🇷🇺 Логика:** Визуализирует связь между Жилой площадью и Ценой. Мы видим четкий **линейный тренд** (больше дом = выше цена).

---

## 📉 Weak Points & Improvements / Слабые места и улучшения

### 1. Skewed Target / Асимметрия целевой переменной
*   **🇬🇧 Weakness:** `SalePrice` is not normally distributed. Linear Regression prefers normal distributions.
*   **🇷🇺 Слабость:** `SalePrice` распределена не нормально. Линейная регрессия предпочитает нормальное распределение.
*   **🚀 Improvement:** Apply **Log Transformation** (`np.log1p`) to `SalePrice` to make it bell-shaped. / Применить **Логарифмирование** (`np.log1p`) к `SalePrice`, чтобы сделать его похожим на колокол.

### 2. Missing Values / Пропущенные значения
*   **🇬🇧 Weakness:** Many columns (like `PoolQC`, `Alley`) have missing values.
*   **🇷🇺 Слабость:** Многие колонки (например, `PoolQC`, `Alley`) имеют пропущенные значения.
*   **🚀 Improvement:** Fill them intelligently. For `PoolQC`, "NaN" usually means "No Pool", not missing data. / Заполнить их с умом. Для `PoolQC`, "NaN" обычно означает "Нет бассейна", а не отсутствие данных.

---

## ❓ Professor Questions / Вопросы профессора

### Q1: What is the difference between MAE and RMSE?
### В1: В чем разница между MAE и RMSE?
*   **🇬🇧 Answer:**
    *   **MAE (Mean Absolute Error):** Average error. Robust to outliers.
    *   **RMSE (Root Mean Squared Error):** Penalizes large errors more heavily (because of squaring). If you care about avoiding huge mistakes, use RMSE.
*   **🇷🇺 Ответ:**
    *   **MAE (Средняя абсолютная ошибка):** Средняя ошибка. Устойчива к выбросам.
    *   **RMSE (Корень из среднеквадратичной ошибки):** Сильнее штрафует за большие ошибки (из-за возведения в квадрат). Если важно избегать огромных ошибок, используйте RMSE.

### Q2: Why do we select only numerical columns for correlation?
### В2: Почему мы выбираем только числовые колонки для корреляции?
*   **🇬🇧 Answer:** Pearson correlation only works on numbers. Categorical data (like "Neighborhood") needs to be encoded (turned into numbers) before calculating correlation.
*   **🇷🇺 Ответ:** Корреляция Пирсона работает только с числами. Категориальные данные (например, "Район") нужно закодировать (превратить в числа) перед расчетом корреляции.

---

## 📐 Math Intuition / Математическая интуиция

### Correlation ($r$)
$$ r = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} $$
*   **🇬🇧 EN:** It measures how much X and Y change together, normalized by their spread.
*   **🇷🇺 RU:** Измеряет, насколько сильно X и Y меняются вместе, нормированное на их разброс.
