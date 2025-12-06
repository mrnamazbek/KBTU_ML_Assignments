# Model Explanations - Assignment 7

## Overview
This document provides detailed explanations of the machine learning models used in Assignment 7: Linear Regression, Random Forest, and Gradient Boosting.

---

## 1. Linear Regression

### What is it?
Linear Regression is a simple model that finds a straight-line relationship between input features and output predictions.

### How it works
- Creates a formula: `Heating Load = (weight₁ × Feature₁) + (weight₂ × Feature₂) + ... + constant`
- Finds the best weights to minimize errors

### Formula
```
y = w₁x₁ + w₂x₂ + w₃x₃ + ... + b
```
Where:
- `y` = Prediction (Heating Load)
- `x₁, x₂, x₃` = Input features (Surface Area, Wall Area, etc.)
- `w₁, w₂, w₃` = Weights (importance of each feature)
- `b` = Bias (starting point)

### Pros ✅
- Fast to train
- Easy to understand
- Works well when relationships are straight lines
- Good for baseline comparisons

### Cons ❌
- Cannot learn curved patterns
- Assumes all features work independently
- May be too simple for complex data

### When to use
- When you need a quick baseline model
- When you need to explain predictions
- When relationships are mostly linear

### Real-world examples
- Predicting house prices from size
- Estimating sales from advertising budget
- Calculating energy costs from usage

---

## 2. Random Forest Regressor

### What is it?
Random Forest creates many decision trees and averages their predictions. It's like asking many experts and taking the average answer.

### How it works
1. **Create many datasets**: Randomly sample from training data
2. **Build decision trees**: Each tree learns from one sample
3. **Make predictions**: Each tree votes, final answer = average

### Visual concept
```
Training Data
    ↓
[Sample 1] → Tree 1 → Prediction: 25.3
[Sample 2] → Tree 2 → Prediction: 24.8
[Sample 3] → Tree 3 → Prediction: 25.1
    ↓
Average = 25.07 (Final Prediction)
```

### Key parameters
- **n_estimators=200**: Number of trees (more = better but slower)
- **random_state=42**: For reproducible results
- **n_jobs=-1**: Use all CPU cores (faster training)

### Pros ✅
- Very accurate
- Handles non-linear patterns well
- Reduces overfitting (better than single tree)
- Doesn't need feature scaling
- Works with missing data

### Cons ❌
- Slower to train than Linear Regression
- Harder to interpret
- Uses more memory

### When to use
- Default choice for tabular data
- When accuracy is more important than speed
- When data has complex patterns

### Real-world examples
- Credit score prediction
- Medical diagnosis
- Stock price forecasting
- Product recommendation systems

---

## 3. Gradient Boosting Regressor

### What is it?
Gradient Boosting builds trees one by one, where each new tree fixes mistakes from previous trees.

### How it works
1. **Start simple**: Make a basic prediction (e.g., average)
2. **Find errors**: Calculate what you got wrong
3. **Build tree**: Train new tree to predict errors
4. **Update**: Add new tree's predictions (with small weight)
5. **Repeat**: Do steps 2-4 many times

### Visual concept
```
Round 1: Prediction = Average → Error = 5.2
Round 2: Tree fixes error → New Error = 2.1
Round 3: Tree fixes error → New Error = 0.8
...
Round 200: Very small error

Final Prediction = All trees combined
```

### Key parameters
- **n_estimators=200**: Number of boosting rounds
- **learning_rate** (default=0.1): How much each tree contributes
  - Lower = slower but more accurate
  - Higher = faster but may overfit
- **max_depth** (default=3): Tree complexity
  - Lower = simpler, avoids overfitting
  - Higher = more complex patterns

### Pros ✅
- Often the most accurate
- Excellent for competitions
- Good at finding complex patterns
- Can rank feature importance

### Cons ❌
- Easiest to overfit
- Slower to train (sequential, not parallel)
- Requires careful parameter tuning
- More sensitive to outliers

### When to use
- When you need maximum accuracy
- For Kaggle competitions
- When you have time to tune parameters

### Real-world examples
- Ranking search results (Google, Bing)
- Ad click prediction
- Insurance risk assessment
- Fraud detection

---

## Model Comparison Summary

| Aspect | Linear Regression | Random Forest | Gradient Boosting |
|--------|------------------|---------------|-------------------|
| **Speed** | ⭐⭐⭐ Fast | ⭐⭐ Medium | ⭐ Slow |
| **Accuracy** | ⭐ Basic | ⭐⭐ Good | ⭐⭐⭐ Best |
| **Interpretability** | ⭐⭐⭐ Easy | ⭐ Hard | ⭐ Hard |
| **Overfitting Risk** | ⭐ Low | ⭐⭐ Medium | ⭐⭐⭐ High |
| **Works with** | Linear patterns | Any pattern | Any pattern |

---

## Evaluation Metrics

### RMSE (Root Mean Squared Error)
**What it measures**: Average prediction error in original units (kWh for heating load)

**Formula**:
```
RMSE = √(average of (actual - predicted)²)
```

**Interpretation**:
- Lower = Better
- RMSE = 2.5 means predictions are off by ±2.5 kWh on average
- Penalizes large errors more than small errors

**Example**:
```
Actual: [10, 20, 30]
Predicted: [12, 19, 32]
Errors: [2, -1, 2]
Squared: [4, 1, 4]
Average: 3
RMSE = √3 = 1.73
```

### R² Score (Coefficient of Determination)
**What it measures**: Percentage of variance explained by the model

**Formula**:
```
R² = 1 - (Sum of Squared Errors / Total Variance)
```

**Interpretation**:
- Range: 0 to 1 (can be negative for terrible models)
- R² = 0.90 means model explains 90% of variance
- R² = 1.00 means perfect predictions
- R² = 0.00 means model is no better than guessing average

**Scale**:
```
0.9 - 1.0: Excellent ⭐⭐⭐
0.7 - 0.9: Good ⭐⭐
0.5 - 0.7: Moderate ⭐
< 0.5: Poor ❌
```

**Why it's better than RMSE**:
- Normalized (always 0-1)
- Easy to compare across datasets
- Independent of units

---

## Assignment 7 Results

### Expected Performance
Based on typical results for Energy Efficiency dataset:

| Model | RMSE | R² Score |
|-------|------|----------|
| Linear Regression | ~2.5 | ~0.90 |
| Random Forest | ~0.8 | ~0.98 |
| Gradient Boosting | ~0.6 | ~0.99 |

### Why tree models win here
The relationship between building features and heating load is **non-linear**:
- Surface area and wall area interact in complex ways
- Different building shapes have different energy profiles
- Small changes in glazing can have big effects

Linear Regression assumes straight-line relationships, so it misses these patterns.

---

## Data Leakage Warning ⚠️

### What is data leakage?
Using information in training that won't be available during real predictions.

### In this assignment
**Cooling_Load** has very high correlation with **Heating_Load** (r ≈ 0.976)

**Why?**
- Both are outputs from the same simulation
- They share identical input parameters
- Knowing one helps predict the other

**The problem**:
In real life, when predicting heating load for a NEW building, you don't know cooling load yet!

**Solution**: Always remove Cooling_Load when predicting Heating_Load

---

## Custom Transformers

### What are they?
Custom transformers create new features from existing ones.

### RatioTransformer Example
```python
class RatioTransformer:
    """Creates ratio features"""
    
    def fit(self, X, y=None):
        return self  # No training needed
    
    def transform(self, X):
        X_new = X.copy()
        # Create Wall-to-Surface ratio
        X_new['Wall_to_Surface'] = X['Wall_Area'] / (X['Surface_Area'] + 1e-10)
        return X_new
```

### Why ratios matter
- Capture relationships between features
-Building shape matters: tall thin vs. short wide
- Ratios are often more informative than raw values

---

## Preprocessing Pipeline

### Why use pipelines?
1. **Consistency**: Same transformations on train/test
2. **No data leakage**: Fit only on training data
3. **Clean code**: One reusable object
4. **Easy deployment**: Save entire pipeline

### ColumnTransformer
Applies different transformations to different columns:

```python
ColumnTransformer([
    ('cat', OneHotEncoder(), categorical_features),
    ('num', StandardScaler(), numerical_features)
])
```

**Categorical encoding**:
- Orientation: [2,3,4,5] → Binary vectors
- Drop first category to avoid multicollinearity

**Numerical scaling**:
- Mean = 0, Standard Deviation = 1
- Helps Linear Regression and Gradient Boosting
- Random Forest doesn't need it but doesn't hurt

---

## Key Takeaways

1. **Linear Regression**: Fast baseline, easy to interpret
2. **Random Forest**: Best default choice for tabular data
3. **Gradient Boosting**: Maximum accuracy, needs tuning
4. **R²**: Best metric for comparing models
5. **RMSE**: Shows real-world error magnitude
6. **Pipelines**: Essential for clean, reproducible code
7. **Data Leakage**: Always check correlations between features and targets

---

## Further Reading

- [Scikit-learn Documentation](https://scikit-learn.org/)
- [Random Forests - Original Paper](https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf)
- [Gradient Boosting Explained](https://explained.ai/gradient-boosting/)
- [Feature Engineering Guide](https://www.kaggle.com/learn/feature-engineering)
