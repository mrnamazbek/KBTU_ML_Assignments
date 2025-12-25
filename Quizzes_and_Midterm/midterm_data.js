// Midterm exam data with questions about machine learning algorithms
// Includes advanced topics on XGBoost and CatBoost

const midtermQuestions = [
  // XGBoost Advanced Questions
  {
    id: 1,
    question: "What is the primary difference between XGBoost and standard Gradient Boosting in terms of regularization?",
    options: [
      "XGBoost uses L1 and L2 regularization on tree weights and tree structure",
      "XGBoost only uses L1 regularization",
      "Standard GB has better regularization than XGBoost",
      "They use identical regularization techniques"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 2,
    question: "Explain the concept of 'Gain' in XGBoost feature importance. How is it calculated?",
    options: [
      "Gain measures the average improvement in loss when a feature is used",
      "Gain is the number of times a feature appears in trees",
      "Gain is inversely proportional to feature frequency",
      "Gain measures feature correlation with target variable"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 3,
    question: "What role does the learning rate (eta) play in XGBoost and why is shrinkage important?",
    options: [
      "It scales tree predictions; shrinkage reduces overfitting by making updates conservative",
      "It determines tree depth; shrinkage increases model complexity",
      "It controls the number of boosting rounds directly",
      "It has no impact on model regularization"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 4,
    question: "How does XGBoost handle missing values during tree construction?",
    options: [
      "XGBoost learns the optimal direction to send missing values by treating them as a separate category",
      "Missing values are imputed using mean/median before training",
      "XGBoost throws an error if missing values exist",
      "Missing values are randomly assigned to left or right splits"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 5,
    question: "What is the purpose of the 'max_depth' parameter in XGBoost and how does it affect model complexity?",
    options: [
      "It controls maximum tree depth; larger values increase model complexity and risk of overfitting",
      "It sets the minimum number of samples per leaf",
      "It determines the learning rate schedule",
      "It has no effect on model complexity"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 6,
    question: "Explain the concept of 'Cover' in XGBoost feature importance and its significance.",
    options: [
      "Cover is the number of observations affected by splits using the feature",
      "Cover is the percentage of missing values in a feature",
      "Cover measures feature variance in the dataset",
      "Cover is unrelated to feature importance calculation"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 7,
    question: "What are the differences between 'reg_alpha' (L1) and 'reg_lambda' (L2) in XGBoost regularization?",
    options: [
      "L1 encourages sparsity in tree weights; L2 encourages smaller weights overall",
      "L1 and L2 have identical effects in XGBoost",
      "L1 only applies to features; L2 only applies to trees",
      "They are mutually exclusive and cannot be used together"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 8,
    question: "How does the 'subsample' parameter in XGBoost improve generalization?",
    options: [
      "It randomly samples a fraction of observations for each tree, introducing randomness and reducing overfitting",
      "It subsamples features to reduce computation time",
      "It determines the validation set size",
      "It has no effect on model generalization"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 9,
    question: "What is the 'colsample_bytree' parameter in XGBoost and why is it useful?",
    options: [
      "It controls the fraction of features sampled for each tree, reducing overfitting through feature randomness",
      "It sets the column data type",
      "It determines the number of output columns",
      "It controls the number of boosting rounds"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },
  {
    id: 10,
    question: "Explain the concept of 'Frequency' in XGBoost feature importance.",
    options: [
      "Frequency counts how many times a feature appears across all trees",
      "Frequency measures how often a feature splits the data evenly",
      "Frequency is inversely related to feature importance",
      "Frequency has no relationship to importance calculation"
    ],
    correct: 0,
    category: "XGBoost",
    difficulty: "advanced"
  },

  // CatBoost Advanced Questions
  {
    id: 11,
    question: "What is the primary advantage of CatBoost in handling categorical features compared to XGBoost?",
    options: [
      "CatBoost natively handles categorical features without manual encoding; reduces target leakage risk",
      "CatBoost ignores categorical features entirely",
      "CatBoost requires more categorical feature preprocessing",
      "There is no difference in categorical feature handling"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 12,
    question: "Explain the concept of 'target encoding' in CatBoost and how it reduces target leakage.",
    options: [
      "CatBoost uses special algorithms with permutation and cross-validation to encode categories while preventing target leakage",
      "Target encoding is simple mean encoding without any protection",
      "CatBoost does not use target encoding",
      "Target encoding increases the risk of data leakage"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 13,
    question: "What is 'ordered boosting' in CatBoost and how does it differ from standard boosting?",
    options: [
      "Ordered boosting trains on random permutations of the dataset to reduce overfitting on categorical features",
      "It requires categorical features to be sorted",
      "It is identical to standard boosting",
      "It only works with time-series data"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 14,
    question: "How does CatBoost's handling of categorical features affect feature importance calculations?",
    options: [
      "CatBoost calculates feature importance that accurately reflects the contribution of categorical features without bias",
      "Categorical features are excluded from importance calculations",
      "Importance is skewed toward numerical features",
      "CatBoost does not provide feature importance metrics"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 15,
    question: "What is the 'one_hot_max_size' parameter in CatBoost and when should it be used?",
    options: [
      "It controls the maximum number of unique categories to use one-hot encoding; larger values use one-hot, smaller use target encoding",
      "It sets the maximum size of the dataset",
      "It determines tree depth",
      "It has no impact on categorical encoding"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 16,
    question: "Explain the 'iterations' parameter in CatBoost and its relationship to model complexity.",
    options: [
      "It specifies the number of boosting rounds; more iterations increase model complexity and training time",
      "It sets the maximum depth of trees",
      "It determines feature sampling rate",
      "It has no effect on model training"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 17,
    question: "How does CatBoost's 'depth' parameter compare to tree-based models and what are its effects?",
    options: [
      "Depth controls maximum tree depth; affects model complexity and overfitting risk",
      "Depth controls the number of features used",
      "Depth is unrelated to tree structure",
      "CatBoost does not have a depth parameter"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 18,
    question: "What is the significance of 'learning_rate' in CatBoost optimization and its regularization effect?",
    options: [
      "Lower learning rates make updates more conservative, reducing overfitting through regularization",
      "Higher learning rates always produce better models",
      "Learning rate has no effect on regularization",
      "Learning rate only affects convergence speed, not generalization"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 19,
    question: "How does CatBoost handle feature interactions with categorical variables?",
    options: [
      "CatBoost can discover and utilize feature interactions automatically, especially with categorical variables",
      "CatBoost requires manual feature interaction specification",
      "CatBoost ignores feature interactions entirely",
      "CatBoost only handles interactions between numerical features"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },
  {
    id: 20,
    question: "What is the 'bagging_temperature' parameter in CatBoost and how does it control model variance?",
    options: [
      "It controls the intensity of Bayesian bootstrap sampling; higher values increase randomness and reduce overfitting",
      "It sets the training time duration",
      "It determines the number of trees",
      "It has no effect on model variance"
    ],
    correct: 0,
    category: "CatBoost",
    difficulty: "advanced"
  },

  // Additional Comparative Questions
  {
    id: 21,
    question: "When should you choose CatBoost over XGBoost in a machine learning project?",
    options: [
      "When working with datasets containing many categorical features and wanting to minimize preprocessing",
      "When categorical features are already one-hot encoded",
      "When computational speed is not a concern",
      "CatBoost is always superior to XGBoost"
    ],
    correct: 0,
    category: "Comparative",
    difficulty: "advanced"
  },
  {
    id: 22,
    question: "How do gradient boosting algorithms reduce bias compared to single decision trees?",
    options: [
      "By iteratively fitting residuals and combining weak learners to capture complex patterns",
      "By using random forests instead of trees",
      "By increasing tree depth indefinitely",
      "Gradient boosting increases bias rather than reducing it"
    ],
    correct: 0,
    category: "Gradient Boosting",
    difficulty: "advanced"
  },
  {
    id: 23,
    question: "Explain the trade-off between model bias and variance in XGBoost hyperparameter tuning.",
    options: [
      "High learning rate/low iterations → high bias/low variance; low learning rate/high iterations → low bias/high variance",
      "Bias and variance are independent in XGBoost",
      "Increasing regularization always reduces both bias and variance",
      "There is no trade-off between bias and variance"
    ],
    correct: 0,
    category: "Optimization",
    difficulty: "advanced"
  },
  {
    id: 24,
    question: "What is early stopping in gradient boosting models and why is it important?",
    options: [
      "It stops training when validation performance plateaus, preventing overfitting and saving computation",
      "It randomly terminates training for efficiency",
      "It is a manual intervention technique",
      "Early stopping increases model overfitting"
    ],
    correct: 0,
    category: "Optimization",
    difficulty: "advanced"
  },
  {
    id: 25,
    question: "How do permutation feature importances compare to built-in feature importance metrics in XGBoost?",
    options: [
      "Permutation importance is model-agnostic and captures interaction effects; built-in metrics are faster but structure-dependent",
      "They always produce identical results",
      "Built-in metrics are always more accurate",
      "Permutation importance cannot be used with XGBoost"
    ],
    correct: 0,
    category: "Feature Importance",
    difficulty: "advanced"
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = midtermQuestions;
}
