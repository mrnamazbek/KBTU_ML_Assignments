# 💵 Assignment 5: Adult Income Prediction

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Scikit-Learn](https://img.shields.io/badge/Library-Scikit--Learn-orange)
![Status](https://img.shields.io/badge/Status-Completed-success)

## 📖 Problem Description
Can we predict if a person earns more than $50K/year? 🤑

In this assignment, we use the **Adult Income** dataset (from the 1994 Census). It contains information like age, education, occupation, and hours worked.

## 🚀 Key Concepts

### 1. Data Cleaning 🧹
Real-world data is messy!
- **Missing Values**: We check for nulls and decide whether to drop them or fill them in (imputation).
- **Categorical Data**: Computers only understand numbers. We convert text (e.g., "Private", "Self-emp") into numbers using **One-Hot Encoding**.

### 2. Logistic Regression vs KNN 🥊
We compare two popular classifiers:
- **Logistic Regression**: Draws a line (or hyperplane) to separate high vs low income. Fast and simple.
- **KNN**: Looks at similar people (neighbors) to decide. Slower but flexible.

## 📊 Visuals
- **Histograms**: See the distribution of Age, Hours per Week, etc.
- **Bar Charts**: Visualize Occupation, Education, and Marital Status.

## 🛠️ How to Run
1. Open `Adult_Income.ipynb` in Jupyter.
2. Run the cells to clean the data and visualize it.
3. Train both models and see which one is more accurate!

---
*Created by Namazbek Bekzhanov*
