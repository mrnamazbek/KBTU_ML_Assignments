# 🚢 Assignment 6: Titanic Survival Prediction

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Scikit-Learn](https://img.shields.io/badge/Library-Scikit--Learn-orange)
![Status](https://img.shields.io/badge/Status-Completed-success)

## 📖 Problem Description
"Women and children first!" 🚣‍♀️

The sinking of the Titanic is one of the most infamous shipwrecks in history. In this assignment, we use machine learning to create a model that predicts which passengers survived the Titanic shipwreck.

## 🚀 Key Concepts

### 1. Feature Engineering 🛠️
We don't just use the data as is. We create new features!
- **FamilySize**: We combine `SibSp` (siblings/spouses) and `Parch` (parents/children) to see if family size affected survival.
- **Log Transformation**: We apply `log` to `Fare` because it's highly skewed (a few people paid HUGE amounts).

### 2. Custom Transformers 🤖
We build our own tools using Scikit-Learn's `BaseEstimator` and `TransformerMixin`. This allows us to integrate our custom logic (like adding `FamilySize`) directly into the ML pipeline.

### 3. Model Comparison 🏎️
We race three models against each other:
- **Logistic Regression**: The baseline.
- **Random Forest**: A powerful ensemble of decision trees.
- **SVM (Support Vector Machine)**: Finds the best boundary between survivors and non-survivors.

## 📊 Visuals
- **Bar Plots**: Survival rate by Gender (Females survived way more!).
- **Heatmap**: Correlation matrix showing how Class and Fare are related to Survival.

## 🛠️ How to Run
1. Open `Titanic.ipynb` in Jupyter.
2. Run the cells to load the data and see the EDA.
3. Watch the custom transformers in action.
4. Compare the accuracy of the models. (Hint: Random Forest usually wins! 🌲)

---
*Created by Namazbek Bekzhanov*
