# 🎓 KBTU Machine Learning Assignments

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Jupyter](https://img.shields.io/badge/Notebooks-Jupyter-orange)
![Status](https://img.shields.io/badge/Status-Completed-success)
![ML](https://img.shields.io/badge/Machine%20Learning-Scikit--Learn-green)

Welcome to my Machine Learning portfolio! 🚀  
This repository contains comprehensive solutions for the Machine Learning course assignments at KBTU. Each assignment explores different algorithms, data science concepts, and real-world applications.

---

## 📂 Assignments Overview

| # | Assignment | Topic | PDF Report | Defense Guide |
|:---:|:---|:---|:---:|:---:|
| **1** | [Markdown Basics](Assignment_1/) | 📝 Jupyter Markdown | [PDF](Assignment_1/Bekzhanov_Namazbek_Assignment_1.pdf) | [Guide](Assignment_1/DEFENSE_GUIDE.md) |
| **2** | [Life Satisfaction](Assignment_2/) | 🌍 Regression Analysis | [PDF](Assignment_2/Bekzhanov_Namazbek_Assignment_2.pdf) | [Guide](Assignment_2/DEFENSE_GUIDE.md) |
| **3** | [Iris Classification](Assignment_3/) | 🌸 KNN Classification | [PDF](Assignment_3/Bekzhanov_Namazbek_Assignment_3.pdf) | [Guide](Assignment_3/DEFENSE_GUIDE.md) |
| **4** | [House Prices EDA](Assignment_4/) | 🏠 Exploratory Analysis | [PDF](Assignment_4/Bekzhanov_Namazbek_Assignment_4%20(1).pdf) | [Guide](Assignment_4/DEFENSE_GUIDE.md) |
| **5** | [Adult Income](Assignment_5/) | 💵 Binary Classification | [PDF](Assignment_5/Bekzhanov_Namazbek_Assignment_5.pdf) | [Guide](Assignment_5/DEFENSE_GUIDE.md) |
| **6** | [Titanic Survival](Assignment_6/) | 🚢 Advanced ML | - | [Guide](Assignment_6/DEFENSE_GUIDE.md) |

---

## 📊 Key Results & Achievements

### 📝 Assignment 1: Markdown Mastery
- **Objective**: Master Jupyter Notebook formatting using Markdown and HTML
- **Skills Developed**:
  - Advanced text formatting (headings, lists, tables)
  - Image embedding and resizing
  - HTML integration for complex layouts
- **Highlight**: Created professional notebook presentations with centered elements and side-by-side layouts

### 🌍 Assignment 2: Life Satisfaction Prediction
- **Dataset**: GDP per Capita vs Life Satisfaction (31 countries)
- **Models Compared**:
  - **Linear Regression**: Best for interpretable baseline modeling
  - **K-Nearest Neighbors (k=1,3,5,10)**: Captured local patterns
- **Key Insight**: Strong positive correlation between GDP and happiness, with diminishing returns at high income levels
- **Techniques Applied**: Model comparison, visualization, prediction interpretation

### 🌸 Assignment 3: Iris Flower Classification
- **Dataset**: Classic Iris dataset (150 samples, 3 species)
- **Model**: K-Nearest Neighbors Classifier
- **Performance**: High accuracy (typically 95-100% on test set)
- **Best Features**: Petal length and petal width provided clearest class separation
- **Techniques Applied**: Pair plots, stratified train-test split, model hyperparameter tuning

### 🏠 Assignment 4: House Prices Exploratory Analysis
- **Dataset**: Ames Housing dataset
- **Top Predictors Identified**:
  1. Overall Quality (correlation: ~0.79)
  2. Living Area (correlation: ~0.71)
  3. Garage Size (correlation: ~0.64)
- **Key Findings**:
  - Sale price is right-skewed (log transformation recommended)
  - Many features exhibit multicollinearity
- **Techniques Applied**: Correlation analysis, heatmaps, distribution visualization, feature importance

### 💵 Assignment 5: Adult Income Prediction
- **Dataset**: Census data (48,000+ samples)
- **Task**: Predict if income > $50K/year
- **Models Compared**:
  - **Logistic Regression**: Better interpretability and speed
  - **K-Nearest Neighbors**: Captured non-linear patterns
- **Data Challenges**: Missing values, imbalanced classes, mixed data types
- **Techniques Applied**: One-hot encoding, stratified sampling, imputation strategies

### 🚢 Assignment 6: Titanic Survival Analysis
- **Dataset**: Titanic passenger data (891 samples)
- **Models Compared**:
  - **Logistic Regression**: ~80% accuracy
  - **Random Forest**: ~82% accuracy (best performer)
  - **Support Vector Machine (SVM)**: ~79% accuracy
- **Feature Engineering**:
  - Created `FamilySize` feature (SibSp + Parch + 1)
  - Applied log transformation to fare
  - Implemented custom transformers
- **Key Insight**: Gender and passenger class were strongest survival predictors
- **Techniques Applied**: Custom transformers, pipelines, feature scaling, ensemble methods

---

## 🛠️ Technologies & Libraries

### Core Stack
- **Python 3.8+**: Primary programming language
- **Jupyter Notebook**: Interactive development environment
- **Scikit-Learn**: Machine learning algorithms and utilities

### Data Processing
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing

### Visualization
- **Matplotlib**: Comprehensive plotting library
- **Seaborn**: Statistical data visualization

### Key ML Concepts Covered
- Regression (Linear, Polynomial)
- Classification (KNN, Logistic Regression, Random Forest, SVM)
- Feature Engineering (Custom Transformers, Encoding)
- Data Preprocessing (Imputation, Scaling, Encoding)
- Model Evaluation (Accuracy, Train-Test Split, Cross-Validation)
- Exploratory Data Analysis (EDA)

---

## 🚀 How to Use

### Prerequisites
```bash
pip install pandas numpy matplotlib seaborn scikit-learn jupyter
```

### Running the Assignments
1. **Clone this repository**:
   ```bash
   git clone https://github.com/mrnamazbek/KBTU_ML_Assignments.git
   cd KBTU_ML_Assignments
   ```

2. **Navigate to an assignment folder**:
   ```bash
   cd Assignment_3  # Example: Iris Classification
   ```

3. **Open the notebook**:
   ```bash
   jupyter notebook Iris_Classification.ipynb
   ```

4. **Run the cells** to see the code, visualizations, and results!

### Understanding the Code
Each notebook includes:
- **Bilingual comments** (English & Russian) explaining each step
- **Visualizations** for better understanding
- **Defense Guides** with in-depth explanations and common interview questions

---

## 📚 Learning Outcomes

Through these assignments, I gained proficiency in:
- ✅ **Data Preprocessing**: Handling missing values, encoding categorical variables, feature scaling
- ✅ **Exploratory Data Analysis**: Correlation analysis, distribution visualization, outlier detection
- ✅ **Model Selection**: Comparing algorithms and understanding their strengths/weaknesses
- ✅ **Feature Engineering**: Creating meaningful features to improve model performance
- ✅ **Model Evaluation**: Using appropriate metrics and validation techniques
- ✅ **Code Quality**: Writing clean, documented, and reproducible code

---

## 📖 Additional Resources

Each assignment folder contains:
- **Jupyter Notebook** (`.ipynb`): Interactive code with bilingual comments
- **PDF Report**: Complete outputs and results
- **Defense Guide** (`.md`): Structured study material for viva/defense with:
  - Code explanations in English & Russian
  - Common professor questions with answers
  - Mathematical intuitions
  - Improvement suggestions

---

## 👨‍💻 Author

**Namazbek Bekzhanov**  
Machine Learning Student @ KBTU

---

## 📄 License

This project is created for educational purposes as part of the KBTU Machine Learning course.

---

*Last Updated: December 2025*
