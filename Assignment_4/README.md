# 🏠 Assignment 4: House Prices Exploration

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Scikit-Learn](https://img.shields.io/badge/Library-Scikit--Learn-orange)
![Status](https://img.shields.io/badge/Status-Completed-success)

## 📖 Problem Description
How much is that house worth? 💰

In this assignment, we dive into the **House Prices** dataset. Before building any models, it's crucial to understand the data. This process is called **Exploratory Data Analysis (EDA)**.

We will:
- Fetch the data from OpenML.
- Check for missing values and data types.
- Visualize distributions and correlations.

## 🚀 Key Concepts

### 1. Regression 📉
Predicting a continuous number (like price) is a **Regression** problem.
- **Target**: `SalePrice`
- **Features**: `OverallQual`, `GrLivArea`, `GarageCars`, etc.

### 2. Correlation Heatmap 🔥
A heatmap shows how strongly features are related to each other.
- **Red (1.0)**: Strong positive correlation (as one goes up, the other goes up).
- **Blue (-1.0)**: Strong negative correlation.
- **Observation**: `OverallQual` (Quality) is highly correlated with `SalePrice`. No surprise there!

### 3. MAE vs RMSE 📏
- **MAE (Mean Absolute Error)**: The average "miss" distance. Easy to understand.
- **RMSE (Root Mean Squared Error)**: Punishes big mistakes more. If you want to avoid huge errors, use this.

## 🛠️ How to Run
1. Open `House_Prices.ipynb` in Jupyter.
2. Run the cells to fetch the data (internet required).
3. Explore the histograms and the colorful correlation matrix.
4. See the scatter plot of Living Area vs Price!

---
*Created by Namazbek Bekzhanov*
