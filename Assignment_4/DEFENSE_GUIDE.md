# 🛡️ Defense Guide: Assignment 4 (House Prices EDA)
# Гайд по защите: Задание 4 (Анализ цен на жилье)

---

## 🎯 Goal / Цель
**🇬🇧 English:** Explore a dataset of house prices to understand what makes a house expensive using **EDA** (Exploratory Data Analysis).
**🇷🇺 Русский:** Исследовать набор данных о ценах на жилье, чтобы понять, что делает дом дорогим, используя **EDA** (Разведочный анализ данных).

---

## 🧠 Deep Code Analysis / Глубокий анализ кода

### 1. Correlation Matrix / Матрица корреляции
```python
corr_matrix = housing.corr()
corr_matrix["median_house_value"].sort_values(ascending=False)
```
*   **🇬🇧 Logic:** Measures linear relationships between -1 and 1.
    *   **1.0:** Perfect positive match (Income ⬆️ -> Price ⬆️).
    *   **-0.5:** Negative match (Latitude ⬆️ -> Price ⬇️).
*   **🇷🇺 Логика:** Измеряет линейные связи от -1 до 1.
    *   **1.0:** Идеальное прямое совпадение (Доход ⬆️ -> Цена ⬆️).
    *   **-0.5:** Обратное совпадение (Широта ⬆️ -> Цена ⬇️).

### 2. Scatter Matrix / Матрица рассеяния
```python
scatter_matrix(housing[attributes], figsize=(12, 8))
```
*   **🇬🇧 Logic:** Plots every feature against every other feature.
*   **🇷🇺 Логика:** Строит график каждого признака против каждого другого признака.
*   **Observation:** We saw a strong upward line for `median_income`. This is the most important feature.
*   **Наблюдение:** Мы увидели сильную линию вверх для `median_income` (средний доход). Это самый важный признак.

### 3. Feature Engineering / Создание признаков
```python
housing["rooms_per_household"] = housing["total_rooms"] / housing["households"]
```
*   **🇬🇧 Logic:** "Total Rooms" is useless because a big district naturally has more rooms. "Rooms per House" is much more useful.
*   **🇷🇺 Логика:** "Всего комнат" — бесполезный признак, потому что в большом районе естественно больше комнат. "Комнат на дом" — гораздо полезнее.

---

## 📉 Weak Points & Improvements / Слабые места и улучшения

1.  **🇬🇧 Weakness:** **Tail-heavy distributions**. Many histograms show a long tail to the right. ML algorithms struggle with this.
    *   **🇷🇺 Слабость:** **Тяжелые хвосты** в распределении. Многие гистограммы имеют длинный хвост справа. Алгоритмы ML плохо с этим работают.
    *   **🚀 Improvement:** Apply `np.log()` to squash the tail and make it look like a bell curve (Normal distribution). / Применить `np.log()`, чтобы сжать хвост и сделать распределение похожим на колокол (Нормальное распределение).

2.  **🇬🇧 Weakness:** Missing values in `total_bedrooms`.
    *   **🇷🇺 Слабость:** Пропущенные значения в `total_bedrooms`.
    *   **🚀 Improvement:** We need to fill them (Imputation) in the next steps. / Нам нужно заполнить их (Импутация) на следующих этапах.

---

## ❓ Professor Questions / Вопросы профессора

### Q1: What is the difference between `head()` and `info()`?
### В1: В чем разница между `head()` и `info()`?
*   **🇬🇧 Answer:** `head()` shows the **content** (actual numbers). `info()` shows the **structure** (data types, memory usage, missing values).
*   **🇷🇺 Ответ:** `head()` показывает **содержимое** (сами числа). `info()` показывает **структуру** (типы данных, память, пропуски).

### Q2: Why do we see horizontal lines in the price scatter plot?
### В2: Почему мы видим горизонтальные линии на графике цен?
*   **🇬🇧 Answer:** These are quirks in the data. The prices were capped at $500,000, $350,000, etc. We should remove these data points so the model doesn't learn wrong patterns.
*   **🇷🇺 Ответ:** Это странности в данных. Цены были ограничены (обрезаны) на уровне $500,000, $350,000 и т.д. Нам следует удалить эти точки, чтобы модель не выучила неправильные закономерности.

---

## 📐 Math Intuition / Математическая интуиция

**Pearson Correlation Coefficient ($r$):**
**Коэффициент корреляции Пирсона ($r$):**

$$ r = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \sum(y_i - \bar{y})^2}} $$

*   **🇬🇧 EN:** It basically checks: "When $x$ is above its average, is $y$ also above its average?"
*   **🇷🇺 RU:** По сути, он проверяет: "Когда $x$ выше своего среднего, $y$ тоже выше своего среднего?"
