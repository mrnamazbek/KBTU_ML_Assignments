# Assignment 7: Energy Efficiency Dataset 🏢⚡

## Overview
This assignment focuses on predicting **Heating Load** for buildings using the UCI Energy Efficiency Dataset. The workflow includes comprehensive EDA, custom transformer implementation, preprocessing pipelines, and regression model comparison.

## Dataset Information
- **Source**: [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Energy+efficiency)
- **Samples**: 768 building configurations
- **Features**: 8 input variables describing building geometry
- **Targets**: Heating Load (Y1) and Cooling Load (Y2)

### Features
| Feature | Description | Type |
|---------|-------------|------|
| Relative_Compactness | Building shape compactness | Continuous |
| Surface_Area | Total building surface (m²) | Continuous |
| Wall_Area | Wall surface area (m²) | Continuous |
| Roof_Area | Roof surface area (m²) | Continuous |
| Overall_Height | Building height (m) | Discrete (2 values) |
| Orientation | Building direction (1-4) | Categorical |
| Glazing_Area | Window area (m²) | Continuous |
| Glazing_Area_Distribution | Window placement (1-5) | Categorical |

## Assignment Structure

### Part A: Exploratory Data Analysis (EDA)
- **Q1**: Load and inspect dataset
- **Q2**: Dataset summary and statistics
- **Q3**: Feature distributions analysis
- **Q4**: Unique values and categorical identification
- **Q4.1**: Duplicate detection
- **Q5**: Correlation analysis with target
- **Q6**: Scatter matrix visualization

### Part B: Preprocessing & Custom Transformers
- **Q7**: Custom `RatioTransformer` implementation
  - Creates engineered features (e.g., Wall-to-Surface ratio)

### Part C: Preprocessing Pipeline
- **Q8**: `ColumnTransformer` pipeline construction
  - One-hot encoding for categorical features
  - Standard scaling for numerical features

### Part D: Modeling
- **Q9**: Train/test split (80/20)
- **Q10**: Preprocessing pipeline application
- **Q11**: Linear Regression training
- **Q12**: Random Forest Regressor (n_estimators=200)
- **Q13**: Gradient Boosting Regressor (n_estimators=200)
- **Q14**: Model comparison and R² explanation

## Key Concepts

### Data Leakage Warning ⚠️
**Cooling_Load** is highly correlated with **Heating_Load** (r ≈ 0.976) because both are outputs from the same building simulation. Including Cooling_Load as a feature would be **data leakage** - using information that wouldn't be available in real-world predictions.

**Solution**: Always drop Cooling_Load when predicting Heating_Load.

### R² (Coefficient of Determination)
- Measures proportion of variance in target explained by the model
- Range: 0 to 1 (higher is better)
- Interpretation:
  - 0.9-1.0: Excellent
  - 0.8-0.9: Good
  - 0.6-0.8: Moderate
  - <0.6: Poor

## Expected Results

| Model | RMSE | R² Score |
|-------|------|----------|
| Linear Regression | ~2.5 | ~0.90 |
| Random Forest | ~0.8 | ~0.98 |
| Gradient Boosting | ~0.6 | ~0.99 |

*Note: Actual values may vary slightly due to randomness.*

## Files
- `Bekzhanov_Namazbek.ipynb` - Main notebook with all solutions
- `ENB2012_data.xlsx` - Energy Efficiency dataset
- `README.md` - This file
- `DEFENSE_GUIDE.md` - Detailed line-by-line explanations (EN/RU)

## Running the Notebook

1. **Install dependencies**:
```bash
pip install pandas numpy matplotlib seaborn scikit-learn openpyxl
```

2. **Launch Jupyter**:
```bash
jupyter notebook Bekzhanov_Namazbek.ipynb
```

3. **Run all cells** or execute step-by-step.

## Key Learnings
1. Custom transformer creation using `BaseEstimator` and `TransformerMixin`
2. Building modular preprocessing pipelines with `ColumnTransformer`
3. Avoiding data leakage by removing correlated outputs
4. Comparing regression models: Linear vs. Ensemble methods
5. Understanding R² metric for model evaluation

## Author
Bekzhanov Namazbek | KBTU Machine Learning Course

---
*For detailed explanations and defense preparation, see `DEFENSE_GUIDE.md`*
