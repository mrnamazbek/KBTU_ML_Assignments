# CatBoost Learning Guide

A comprehensive guide to learning and mastering CatBoost, a state-of-the-art gradient boosting library optimized for categorical features.

## Table of Contents

1. [Installation](#installation)
2. [Core Concepts](#core-concepts)
3. [Getting Started](#getting-started)
4. [Handling Categorical Features](#handling-categorical-features)
5. [Model Training](#model-training)
6. [Hyperparameter Tuning](#hyperparameter-tuning)
7. [Model Evaluation](#model-evaluation)
8. [Advanced Topics](#advanced-topics)
9. [Best Practices](#best-practices)
10. [Resources](#resources)

---

## Installation

### Prerequisites
- Python 3.6 or higher
- pip or conda package manager

### Install via pip
```bash
pip install catboost
```

### Install via conda
```bash
conda install -c conda-forge catboost
```

### Verify Installation
```python
import catboost
print(catboost.__version__)
```

### GPU Support (Optional)
For GPU acceleration, install GPU version:
```bash
pip install catboost-gpu
```

---

## Core Concepts

### What is CatBoost?

CatBoost (Categorical Boosting) is a gradient boosting library developed by Yandex that excels at handling categorical features. Unlike traditional gradient boosting methods, CatBoost requires minimal preprocessing and handles categorical variables natively.

### Key Features

- **Native Categorical Feature Support**: No need for one-hot encoding or label encoding
- **Automatic Feature Interaction Detection**: Identifies important feature interactions
- **Reduced Overfitting**: Uses ordered boosting and special splitting strategies
- **Fast Training**: Optimized for both CPU and GPU computation
- **Easy to Use**: Simple API with sensible defaults
- **Interpretability**: Provides feature importance and SHAP values

### How CatBoost Works

1. **Ordered Boosting**: Uses a specific order of samples to reduce overfitting
2. **Categorical Feature Handling**: Treats categorical features specially during tree construction
3. **Symmetric Trees**: Creates balanced tree structures for better generalization
4. **Target Encoding**: Automatically applies target encoding for categorical features

---

## Getting Started

### Basic Classification Example

```python
from catboost import CatBoostClassifier
import pandas as pd
from sklearn.model_selection import train_test_split

# Load data
X = pd.read_csv('features.csv')
y = pd.read_csv('target.csv')

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train model
model = CatBoostClassifier(
    verbose=0,
    random_state=42
)

model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
probabilities = model.predict_proba(X_test)
```

### Basic Regression Example

```python
from catboost import CatBoostRegressor

# Create and train regression model
model = CatBoostRegressor(
    verbose=0,
    random_state=42
)

model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
```

---

## Handling Categorical Features

### Identifying Categorical Features

```python
from catboost import CatBoostClassifier

# Method 1: Specify categorical feature indices
categorical_features_indices = [0, 2, 4]

model = CatBoostClassifier(
    cat_features=categorical_features_indices,
    verbose=0
)

model.fit(X_train, y_train)

# Method 2: Specify categorical feature names (for DataFrames)
categorical_features_names = ['color', 'size', 'brand']

model = CatBoostClassifier(
    cat_features=categorical_features_names,
    verbose=0
)

model.fit(X_train, y_train)
```

### Working with Categorical Data

```python
import pandas as pd
import numpy as np

# Example DataFrame with categorical features
data = pd.DataFrame({
    'age': [25, 45, 35, 50, 28],
    'city': ['NYC', 'LA', 'NYC', 'Chicago', 'LA'],
    'income': [50000, 120000, 80000, 150000, 60000],
    'target': [0, 1, 1, 1, 0]
})

# Identify categorical columns
categorical_cols = data.select_dtypes(include=['object']).columns.tolist()

X = data.drop('target', axis=1)
y = data['target']

model = CatBoostClassifier(
    cat_features=categorical_cols,
    verbose=0,
    random_state=42
)

model.fit(X, y)
```

### Important Notes on Categorical Features

- CatBoost **does not require** one-hot encoding for categorical features
- Pass categorical feature information to avoid unnecessary encoding
- Missing values are handled automatically
- String and integer categorical features are both supported

---

## Model Training

### Training with Validation Set

```python
from catboost import CatBoostClassifier

model = CatBoostClassifier(
    iterations=100,
    verbose=20,
    random_state=42
)

model.fit(
    X_train, y_train,
    eval_set=(X_val, y_val),
    early_stopping_rounds=10
)
```

### Training with Custom Loss Function

```python
model = CatBoostClassifier(
    loss_function='Logloss',  # for classification
    verbose=0,
    random_state=42
)

# For regression
model_reg = CatBoostRegressor(
    loss_function='RMSE',  # or MAE, Huber, etc.
    verbose=0,
    random_state=42
)
```

### Common Loss Functions

**Classification:**
- `Logloss`: Binary and multiclass classification
- `MultiClass`: Multiclass classification
- `MultiClassOneVsAll`: Multiclass one-vs-all
- `AUC`: Area under ROC curve

**Regression:**
- `RMSE`: Root Mean Squared Error (default)
- `MAE`: Mean Absolute Error
- `Huber`: Huber loss
- `Quantile`: Quantile regression

### Training Parameters

```python
model = CatBoostClassifier(
    # Boosting parameters
    iterations=100,              # Number of boosting rounds
    learning_rate=0.03,          # Shrinkage coefficient
    depth=6,                     # Tree depth
    
    # Regularization
    l2_leaf_reg=3,               # L2 regularization coefficient
    random_strength=1,           # Randomness in tree construction
    
    # Data parameters
    subsample=1,                 # Fraction of samples for training
    max_ctr_complexity=1,        # Maximum categorical feature interactions
    
    # Other
    verbose=0,                   # Verbosity level
    random_state=42,             # Random seed
    thread_count=-1              # Number of threads (-1 = use all)
)
```

---

## Hyperparameter Tuning

### Grid Search

```python
from catboost import CatBoostClassifier
from sklearn.model_selection import GridSearchCV

param_grid = {
    'depth': [4, 6, 8],
    'learning_rate': [0.01, 0.05, 0.1],
    'l2_leaf_reg': [1, 3, 5]
}

model = CatBoostClassifier(
    iterations=100,
    verbose=0,
    random_state=42
)

grid_search = GridSearchCV(
    model, param_grid, cv=5, scoring='roc_auc', n_jobs=-1
)

grid_search.fit(X_train, y_train)

print(f"Best parameters: {grid_search.best_params_}")
print(f"Best score: {grid_search.best_score_}")
```

### Random Search

```python
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

param_dist = {
    'depth': randint(3, 10),
    'learning_rate': uniform(0.001, 0.2),
    'l2_leaf_reg': randint(1, 10),
    'iterations': randint(50, 500)
}

random_search = RandomizedSearchCV(
    model, param_dist, n_iter=20, cv=5, 
    scoring='roc_auc', random_state=42, n_jobs=-1
)

random_search.fit(X_train, y_train)
```

### Bayesian Optimization

```python
from catboost import CatBoostClassifier
from bayes_opt import BayesianOptimization

def evaluate_model(depth, learning_rate, l2_leaf_reg):
    model = CatBoostClassifier(
        depth=int(depth),
        learning_rate=learning_rate,
        l2_leaf_reg=int(l2_leaf_reg),
        iterations=100,
        verbose=0,
        random_state=42
    )
    
    model.fit(X_train, y_train)
    score = model.score(X_val, y_val)
    return score

optimizer = BayesianOptimization(
    f=evaluate_model,
    pbounds={
        'depth': (3, 10),
        'learning_rate': (0.001, 0.2),
        'l2_leaf_reg': (1, 10)
    },
    random_state=42
)

optimizer.maximize(init_points=5, n_iter=15)
print(optimizer.max)
```

### Key Hyperparameters

| Parameter | Default | Range | Effect |
|-----------|---------|-------|--------|
| `iterations` | 1000 | 1-10000 | Number of boosting rounds |
| `depth` | 6 | 1-16 | Tree depth |
| `learning_rate` | 0.03 | 0.001-0.5 | Shrinkage coefficient |
| `l2_leaf_reg` | 3 | 0-25 | L2 regularization |
| `subsample` | 1 | 0-1 | Fraction of samples |
| `random_strength` | 1 | 0-100 | Randomness in splits |

---

## Model Evaluation

### Classification Metrics

```python
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, 
    f1_score, roc_auc_score, confusion_matrix, 
    classification_report, roc_curve, auc
)
import matplotlib.pyplot as plt

# Predictions
y_pred = model.predict(X_test)
y_pred_proba = model.predict_proba(X_test)[:, 1]

# Basic metrics
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(f"Precision: {precision_score(y_test, y_pred):.4f}")
print(f"Recall: {recall_score(y_test, y_pred):.4f}")
print(f"F1-Score: {f1_score(y_test, y_pred):.4f}")
print(f"ROC-AUC: {roc_auc_score(y_test, y_pred_proba):.4f}")

# Classification report
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
print(f"\nConfusion Matrix:\n{cm}")

# ROC Curve
fpr, tpr, _ = roc_curve(y_test, y_pred_proba)
plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, label=f'ROC Curve (AUC={auc(fpr, tpr):.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.legend()
plt.title('ROC Curve')
plt.show()
```

### Regression Metrics

```python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

# Predictions
y_pred = model.predict(X_test)

# Metrics
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"MSE: {mse:.4f}")
print(f"RMSE: {rmse:.4f}")
print(f"MAE: {mae:.4f}")
print(f"R² Score: {r2:.4f}")
```

### Cross-Validation

```python
from sklearn.model_selection import cross_validate

scoring = {
    'accuracy': 'accuracy',
    'precision': 'precision',
    'recall': 'recall',
    'f1': 'f1',
    'roc_auc': 'roc_auc'
}

cv_results = cross_validate(
    model, X_train, y_train, 
    cv=5, scoring=scoring
)

for metric, scores in cv_results.items():
    if metric.startswith('test_'):
        print(f"{metric}: {scores.mean():.4f} (+/- {scores.std():.4f})")
```

---

## Advanced Topics

### Feature Importance

```python
import pandas as pd
import matplotlib.pyplot as plt

# Get feature importance
feature_importance = pd.DataFrame({
    'feature': X_train.columns,
    'importance': model.get_feature_importance()
}).sort_values('importance', ascending=False)

print(feature_importance)

# Plot top features
plt.figure(figsize=(10, 6))
plt.barh(feature_importance['feature'][:10], feature_importance['importance'][:10])
plt.xlabel('Importance')
plt.title('Top 10 Feature Importance')
plt.show()
```

### SHAP Values for Interpretability

```python
import shap

# Create SHAP explainer
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Summary plot
shap.summary_plot(shap_values, X_test, plot_type="bar")

# Dependence plot for a specific feature
shap.dependence_plot("age", shap_values, X_test)

# Force plot for a single prediction
shap.force_plot(explainer.expected_value, shap_values[0], X_test.iloc[0])
```

### Model Serialization

```python
# Save model
model.save_model('catboost_model.cbm')

# Load model
from catboost import CatBoostClassifier
loaded_model = CatBoostClassifier()
loaded_model.load_model('catboost_model.cbm')

# Make predictions with loaded model
predictions = loaded_model.predict(X_test)
```

### Multiclass Classification

```python
model = CatBoostClassifier(
    loss_function='MultiClass',
    classes_count=3,  # for 3 classes
    verbose=0,
    random_state=42
)

model.fit(X_train, y_train)
predictions = model.predict(X_test)
probabilities = model.predict_proba(X_test)
```

### Custom Metrics

```python
from catboost import CatBoostClassifier

def custom_metric(y_true, y_pred):
    """Custom evaluation metric"""
    from sklearn.metrics import f1_score
    return f1_score(y_true, y_pred > 0.5)

model = CatBoostClassifier(
    eval_metric='Logloss',
    verbose=0,
    random_state=42
)

model.fit(
    X_train, y_train,
    eval_set=(X_val, y_val)
)
```

---

## Best Practices

### 1. Data Preparation
```python
# Always identify categorical features
categorical_features = X_train.select_dtypes(include=['object']).columns.tolist()

# Handle missing values appropriately
# CatBoost handles NaN values, but consider imputation for better results
X_train = X_train.fillna(-1)  # or use advanced imputation

# Check data balance
print(y_train.value_counts())
```

### 2. Train-Validation Split
```python
from sklearn.model_selection import train_test_split

# Use stratified split for imbalanced data
X_train, X_val, y_train, y_val = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
```

### 3. Use Early Stopping
```python
model = CatBoostClassifier(verbose=0, random_state=42)

model.fit(
    X_train, y_train,
    eval_set=(X_val, y_val),
    early_stopping_rounds=20,  # Stop if no improvement for 20 rounds
    verbose=0
)
```

### 4. Class Weight for Imbalanced Data
```python
from sklearn.utils.class_weight import compute_class_weight

class_weights = compute_class_weight(
    'balanced', 
    classes=np.unique(y_train),
    y=y_train
)

model = CatBoostClassifier(
    class_weights=class_weights,
    verbose=0,
    random_state=42
)
```

### 5. Reproducibility
```python
import random
import numpy as np

# Set seeds
random.seed(42)
np.random.seed(42)

model = CatBoostClassifier(
    random_state=42,
    verbose=0,
    thread_count=1  # Single thread for reproducibility
)
```

### 6. Performance Optimization
```python
# Use GPU if available
model = CatBoostClassifier(
    task_type='GPU',
    verbose=0,
    random_state=42
)

# Use multiple threads
model = CatBoostClassifier(
    thread_count=-1,  # Use all available threads
    verbose=0,
    random_state=42
)
```

### 7. Ensemble Methods
```python
from sklearn.ensemble import VotingClassifier
from catboost import CatBoostClassifier
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier

# Create ensemble
model1 = CatBoostClassifier(verbose=0, random_state=42)
model2 = XGBClassifier(random_state=42)
model3 = LGBMClassifier(random_state=42)

ensemble = VotingClassifier(
    estimators=[('catboost', model1), ('xgb', model2), ('lgb', model3)],
    voting='soft'
)

ensemble.fit(X_train, y_train)
predictions = ensemble.predict(X_test)
```

---

## Resources

### Official Documentation
- **CatBoost Documentation**: https://catboost.ai/docs/
- **GitHub Repository**: https://github.com/catboost/catboost
- **API Reference**: https://catboost.ai/docs/concepts/python-reference_parameters-list.html

### Learning Materials
- **Yandex CatBoost Tutorial**: https://github.com/catboost/tutorials
- **Kaggle CatBoost Notebooks**: https://www.kaggle.com/search?q=catboost
- **Official Examples**: https://github.com/catboost/catboost/tree/master/examples

### Related Tools & Libraries
- **SHAP**: For model interpretability - https://github.com/slundberg/shap
- **Optuna**: For hyperparameter optimization - https://optuna.org/
- **Hyperopt**: Bayesian optimization - https://github.com/hyperopt/hyperopt
- **Scikit-learn**: For metrics and utilities - https://scikit-learn.org/

### Comparison with Other Libraries
| Feature | CatBoost | XGBoost | LightGBM |
|---------|----------|---------|----------|
| Categorical Features | Native | Requires Encoding | Requires Encoding |
| Speed | Fast | Fast | Fastest |
| GPU Support | Yes | Yes | Yes |
| Interpretability | Good | Good | Good |
| Ease of Use | Easy | Moderate | Moderate |

### Common Pitfalls to Avoid
1. **Forgetting to specify categorical features** - Always pass `cat_features` parameter
2. **Not using validation set** - Always monitor performance on unseen data
3. **Overfitting** - Use early stopping and regularization
4. **Imbalanced data** - Use class weights or stratified split
5. **Not normalizing data** - While CatBoost doesn't require it, it can help
6. **Using same random seed everywhere** - Use different seeds for proper validation

### Community & Support
- **Stack Overflow**: Tag questions with `catboost`
- **GitHub Issues**: https://github.com/catboost/catboost/issues
- **CatBoost Forum**: Active community discussion

---

## Quick Reference Cheat Sheet

```python
# Import
from catboost import CatBoostClassifier, CatBoostRegressor

# Create model
model = CatBoostClassifier(
    iterations=100,
    depth=6,
    learning_rate=0.03,
    cat_features=categorical_cols,
    verbose=0,
    random_state=42
)

# Train
model.fit(X_train, y_train, eval_set=(X_val, y_val), early_stopping_rounds=10)

# Predict
predictions = model.predict(X_test)
probabilities = model.predict_proba(X_test)

# Evaluate
from sklearn.metrics import accuracy_score, roc_auc_score
accuracy = accuracy_score(y_test, predictions)
auc = roc_auc_score(y_test, probabilities[:, 1])

# Feature Importance
importance = model.get_feature_importance()

# Save/Load
model.save_model('model.cbm')
model.load_model('model.cbm')
```

---

## Conclusion

CatBoost is a powerful and user-friendly gradient boosting library that simplifies the machine learning workflow, especially when dealing with categorical features. By understanding its core concepts and following best practices, you can leverage CatBoost effectively in your data science projects.

Start with the basic examples, gradually explore advanced topics, and always validate your models on unseen data. Happy boosting!

---

*Last Updated: 2025-12-25*
*Created for KBTU ML Assignments*
