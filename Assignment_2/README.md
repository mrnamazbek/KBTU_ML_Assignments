# 🌍 Assignment 2: Life Satisfaction Prediction

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Scikit-Learn](https://img.shields.io/badge/Library-Scikit--Learn-orange)
![Status](https://img.shields.io/badge/Status-Completed-success)

## 📖 Problem Description
Can money buy happiness? 🤔 In this assignment, we explore the relationship between a country's wealth (**GDP per capita**) and its citizens' reported **Life Satisfaction**.

We use machine learning to model this relationship and predict life satisfaction for new data points.

## 🚀 Key Concepts

### 1. Linear Regression 📈
Imagine trying to draw a straight line through a cloud of data points so that the line is as close to all points as possible. That's **Linear Regression**!
- It assumes a linear relationship: $y = \theta_0 + \theta_1 x$
- **Goal**: Find the best intercept ($\theta_0$) and slope ($\theta_1$).

### 2. K-Nearest Neighbors (KNN) 🏘️
Instead of drawing a line, what if we just asked the neighbors?
- **KNN** looks at the $k$ closest data points to the new value.
- It averages their values to make a prediction.
- **k=1**: Just copy the nearest neighbor (can be noisy).
- **k=High**: Average of many neighbors (smoother, but might miss details).

## 📊 Visuals
The notebook includes visualizations comparing how these two models behave:
- **Linear Regression** produces a smooth, straight line.
- **KNN** produces a jagged line that adapts locally to the data.

## 🛠️ How to Run
1. Open `Life_Satisfaction.ipynb` in Jupyter.
2. Run all cells to see the data loading, visualization, and model training.
3. Compare the predictions for a GDP of **$37,655.2**!

---
*Created by Namazbek Bekzhanov*
