export const quizDatabase = {
    bonus: [
        {
            id: "b1",
            topic: "Metrics",
            question: "Fill in the missing function used to compute RMSE in scikit-learn: from sklearn.metrics import _______________________",
            options: {
                A: "mean_squared_error",
                B: "root_mean_squared_error",
                C: "rmse_score",
                D: "mean_absolute_error"
            },
            answer: "B",
            explanations: {
                A: "MSE is the square of RMSE. While related, it requires manual square rooting.",
                B: "Correct! Scikit-learn now has a direct root_mean_squared_error function for convenience.",
                C: "There is no function named rmse_score in scikit-learn.",
                D: "MAE measures absolute error, not squared error."
            },
            explanations_ru: {
                A: "MSE — это квадрат RMSE. Хотя они связаны, для RMSE нужно извлекать корень вручную.",
                B: "Верно! В scikit-learn теперь есть прямая функция root_mean_squared_error.",
                C: "Функции с именем rmse_score в scikit-learn не существует.",
                D: "MAE измеряет абсолютную ошибку, а не квадратичную."
            },
            hint: "Look at the code snippet. / Посмотрите на фрагмент кода."
        },
        {
            id: "b2",
            topic: "Validation",
            question: "What is the key advantage of using k-fold cross-validation?",
            options: {
                A: "It eliminates bias completely",
                B: "It always improves accuracy",
                C: "It provides a more reliable estimate of generalization performance",
                D: "It reduces the number of features"
            },
            answer: "C",
            explanations: {
                A: "Bias is inherent in the model/data; CV only helps measure it better.",
                B: "CV is an evaluation tool, it doesn't change the model itself.",
                C: "Correct! It provides a better estimate of how the model will perform on unseen data.",
                D: "CV does not perform dimensionality reduction."
            },
            explanations_ru: {
                A: "Смещение заложено в модели/данных; CV только помогает его лучше измерить.",
                B: "CV — это инструмент оценки, он не меняет саму модель.",
                C: "Верно! Оно дает более надежную оценку того, как модель будет работать на новых данных.",
                D: "CV не выполняет сокращение количества признаков."
            },
            hint: "Robustness over randomness. / Надежность против случайности."
        },
        {
            id: "b3",
            topic: "Scikit-Learn",
            question: "In regression, scikit-learn uses negative error metrics in cross_val_score because:",
            options: {
                A: "Higher scores are considered better (utility function convention)",
                B: "False",
                C: "It matches OLS requirements",
                D: "It is faster to compute"
            },
            answer: "A",
            explanations: {
                A: "Correct! Scikit-learn treats metrics as things to maximize (utility).",
                B: "This is not a valid reason.",
                C: "Mathematical requirements for OLS don't dictate API conventions.",
                D: "Computation speed is unaffected."
            },
            explanations_ru: {
                A: "Верно! Scikit-learn рассматривает метрики как то, что нужно максимизировать.",
                B: "Это не является весомой причиной.",
                C: "Математические требования OLS не диктуют соглашения API.",
                D: "Скорость вычислений не меняется."
            },
            hint: "Utility vs. Loss. / Полезность против Потери."
        },
        {
            id: "b4",
            topic: "Hyperparameters",
            question: "What is the main limitation of GridSearchCV compared to RandomizedSearchCV?",
            options: {
                A: "It cannot use cross-validation",
                B: "It only works for classification",
                C: "It becomes computationally expensive with many hyperparameters",
                D: "It cannot tune pipelines"
            },
            answer: "C",
            explanations: {
                A: "Both use cross-validation.",
                B: "Both work for any estimator.",
                C: "Correct! It checks every combination, leading to exponential growth.",
                D: "GridSearchCV is frequently used with pipelines."
            },
            explanations_ru: {
                A: "Оба используют кросс-валидацию.",
                B: "Оба работают для любого эстиматора.",
                C: "Верно! Он проверяет каждую комбинацию, что ведет к экспоненциальному росту.",
                D: "GridSearchCV часто используется с пайплайнами."
            },
            hint: "Combinatorial explosion. / Комбинаторный взрыв."
        },
        {
            id: "b5",
            topic: "Feature Selection",
            question: "Which sklearn tool can automatically remove low-importance features based on a fitted model?",
            options: {
                A: "PCA",
                B: "SelectKBest",
                C: "SelectFromModel",
                D: "VarianceThreshold"
            },
            answer: "C",
            explanations: {
                A: "PCA creates new features, doesn't just remove old ones.",
                B: "SelectKBest uses statistical tests, not necessarily a fitted model's importance.",
                C: "Correct! It uses the feature_importances_ or coefficients of a fitted model.",
                D: "VarianceThreshold only looks at the variance of the features themselves."
            },
            explanations_ru: {
                A: "PCA создает новые признаки, а не просто удаляет старые.",
                B: "SelectKBest использует стат-тесты, а не важность обученной модели.",
                C: "Верно! Он использует важность признаков или коэффициенты обученной модели.",
                D: "VarianceThreshold смотрит только на дисперсию самих признаков."
            },
            hint: "Using the model's own knowledge. / Использование собственных знаний модели."
        }
    ],
    quiz4: [
        {
            id: "q4_1",
            topic: "Feature Engineering",
            question: "Why is log transformation applied to features with heavy-tailed distributions?",
            options: {
                A: "To increase variance",
                B: "To improve categorical encoding",
                C: "To reduce skewness and stabilize variance",
                D: "To create more outliers"
            },
            answer: "C",
            explanations: {
                A: "It actually reduces the range and variance for high values.",
                B: "Log is for numerical features, not categorical encoding.",
                C: "Correct! It makes the distribution more 'normal' (Gaussian).",
                D: "It reduces the impact of outliers by pulling them in."
            },
            explanations_ru: {
                A: "На самом деле это уменьшает диапазон и дисперсию для больших значений.",
                B: "Log предназначен для численных признаков, а не для категориального кодирования.",
                C: "Верно! Это делает распределение более 'нормальным'.",
                D: "Это уменьшает влияние выбросов, 'подтягивая' их."
            },
            hint: "Compressing a long tail. / Сжатие длинного хвоста."
        },
        {
            id: "q4_2",
            topic: "Pipelines",
            question: "Complete the pipeline step: log_pipeline = make_pipeline(SimpleImputer(), FunctionTransformer(np.log), ________)",
            options: {
                A: "StandardScaler()",
                B: "LinearRegression()",
                C: "OneHotEncoder()",
                D: "KMeans()"
            },
            answer: "A",
            explanations: {
                A: "Correct! Scaling is the natural next step after log transformation in a numeric pipeline.",
                B: "Regression is usually the final step of the model pipeline, not the numeric sub-pipeline.",
                C: "This is a numeric pipeline; OneHot is for categories.",
                D: "KMeans is a clusterer, not a standard scaler."
            },
            explanations_ru: {
                A: "Верно! Масштабирование — естественный следующий шаг после логарифмирования.",
                B: "Регрессия обычно является последним шагом всего пайплайна, а не численного под-пайплайна.",
                C: "Это численный пайплайн; OneHot — для категорий.",
                D: "KMeans — это кластеризатор, а не стандартный скейлер."
            },
            hint: "Scaling after transforming. / Масштабирование после трансформации."
        },

        // Added from your @Quizzes dump (Practice Mode until you provide answer key)
        {
            id: "q4_3",
            topic: "Feature Engineering",
            question: "The purpose of ratio-based feature engineering (e.g., bedrooms_ratio) is to:",
            options: {
                A: "Reduce memory usage",
                B: "Remove multicollinearity",
                C: "Reduce dimensionality",
                D: "Create more meaningful, normalized relationships between features"
            },
            answer: null,
            explanations: {
                A: "Practice mode: add your official explanation/answer key.",
                B: "Practice mode: add your official explanation/answer key.",
                C: "Practice mode: add your official explanation/answer key.",
                D: "Practice mode: add your official explanation/answer key."
            },
            explanations_ru: {
                A: "Режим практики: добавьте официальный ключ/объяснение.",
                B: "Режим практики: добавьте официальный ключ/объяснение.",
                C: "Режим практики: добавьте официальный ключ/объяснение.",
                D: "Режим практики: добавьте официальный ключ/объяснение."
            },
            hint: "Ratios often capture relative relationships better than raw counts. / Отношения часто лучше отражают смысл, чем абсолютные значения."
        },
        {
            id: "q4_4",
            topic: "Transformers",
            question: "FunctionTransformer requires the input and output to have the same shape.",
            options: {
                A: "True",
                B: "False",
                C: "Depends on estimator",
                D: "Only for categorical data"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Think about how pipelines pass arrays between steps. / Подумайте, как пайплайн передаёт массивы между шагами."
        },
        {
            id: "q4_5",
            topic: "RBF",
            question: "RBF similarity always outputs values between 0 and 1.",
            options: {
                A: "True",
                B: "False",
                C: "Only when normalized",
                D: "Only for classification"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "RBF uses exp(−γ⋅distance²). / RBF использует exp(−γ⋅distance²)."
        },
        {
            id: "q4_6",
            topic: "Pipelines",
            question: "What does this code do? num_pipeline = make_pipeline(SimpleImputer(), StandardScaler())",
            options: {
                A: "Creates categorical pipeline",
                B: "Creates cluster features",
                C: "Trains a model",
                D: "Creates a two-step numeric preprocessing pipeline"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Impute then scale. / Импьютация, затем масштабирование."
        },
        {
            id: "q4_7",
            topic: "Feature Names",
            question: "Why does ratio_name function exist?",
            options: {
                A: "To perform ratio",
                B: "To name the ratio name in ratio operation",
                C: "To supply output feature names to FunctionTransformer",
                D: "To be added in ratio pipeline"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Some transformers need feature_names_out helpers. / Некоторые трансформеры требуют имена выходных признаков."
        },
        {
            id: "q4_8",
            topic: "Clustering",
            question: "When using sample_weight in KMeans inside ClusterSimilarity, which sample property typically receives more weight in the housing example?",
            options: {
                A: "Houses with larger populations",
                B: "Houses with more rooms",
                C: "Houses closer to the ocean",
                D: "Houses with higher median house values"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Sample weights emphasize certain examples during fitting. / Веса усиливают вклад отдельных примеров."
        },
        {
            id: "q4_9",
            topic: "Clustering",
            question: "KMeans-based cluster similarity features can help linear models capture nonlinear geographic patterns.",
            options: {
                A: "True",
                B: "False",
                C: "Only for trees",
                D: "Only with OneHotEncoder"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Nonlinear patterns can be approximated by engineered features. / Нелинейность можно поймать через новые признаки."
        },
        {
            id: "q4_10",
            topic: "Pipelines",
            question: "In a pipeline, which steps must be transformers?",
            options: {
                A: "All steps",
                B: "Only the final step",
                C: "All steps except the last",
                D: "None of them"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Think: intermediate steps must transform X. / Промежуточные шаги должны преобразовывать X."
        }
    ],
    quiz3: [
        {
            id: "q3_1",
            topic: "Feature Engineering",
            question: "Which transformation is most appropriate for heavy-tailed features like population?",
            options: {
                A: "One-hot encoding",
                B: "Log transformation",
                C: "MinMax scaling only",
                D: "Label encoding"
            },
            answer: "B",
            explanations: {
                A: "One-hot is for categorical data, not numeric features with long tails.",
                B: "Correct! Log transformation compresses the tail and makes it more bell-shaped.",
                C: "MinMax only scales the range, it doesn't change the distribution shape.",
                D: "Label encoding is for categorical target labels."
            },
            explanations_ru: {
                A: "One-hot — для категориальных данных, а не для числовых признаков с длинным хвостом.",
                B: "Верно! Логарифмирование сжимает хвост и делает его более похожим на колокол.",
                C: "MinMax только масштабирует диапазон, не меняя форму распределения.",
                D: "Label encoding предназначен для категориальных меток."
            },
            hint: "Pulling in the extreme values. / Подтягивание экстремальных значений."
        },
        {
            id: "q3_2",
            topic: "Preprocessing",
            question: "Which scaler may distort data if the distribution contains outliers?",
            options: {
                A: "MinMaxScaler",
                B: "Normalizer",
                C: "RobustScaler",
                D: "StandardScaler"
            },
            answer: "A",
            explanations: {
                A: "Correct! Outliers can squeeze most data into a tiny range near 0 or 1.",
                B: "Normalizer scales samples individually, not features.",
                C: "RobustScaler is specifically designed to handle outliers.",
                D: "StandardScaler is affected by outliers but less dramatically than MinMax."
            },
            explanations_ru: {
                A: "Верно! Выбросы могут сжать большинство данных в крошечный диапазон около 0 или 1.",
                B: "Normalizer масштабирует каждый образец отдельно, а не признаки.",
                C: "RobustScaler специально разработан для работы с выбросами.",
                D: "StandardScaler подвержен влиянию выбросов, но менее сильно, чем MinMax."
            },
            hint: "The min and max are sensitive points. / Минимум и максимум — чувствительные точки."
        },

        // Added from your @Quizzes dump (Practice Mode)
        {
            id: "q3_3",
            topic: "Scikit-Learn",
            question: "Fill the blank to get scaled feature names: scaler = StandardScaler(); scaler.fit(X); scaler.____________________",
            options: {
                A: "get_feature_names_out()",
                B: "feature_names()",
                C: "get_columns()",
                D: "names_out()"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Modern sklearn exposes a standard feature-name API. / В sklearn есть стандартный API для имён признаков."
        },
        {
            id: "q3_4",
            topic: "Preprocessing",
            question: "MinMaxScaler always produces values exactly between -1 and 1.",
            options: { A: "True", B: "False", C: "Only with outliers", D: "Only after StandardScaler" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "MinMaxScaler typically maps to [0, 1] by default. / По умолчанию MinMaxScaler часто даёт [0, 1]."
        },
        {
            id: "q3_5",
            topic: "RBF",
            question: "Given RBF formula exp(−γ(x−m)^2), what happens if γ is very small?",
            options: {
                A: "Narrow peak",
                B: "Negative similarity",
                C: "Very wide similarity curve",
                D: "Similarity becomes exactly 1"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Gamma controls decay speed. / Гамма контролирует скорость убывания."
        },
        {
            id: "q3_6",
            topic: "API Design",
            question: "A custom class that should support hyperparameter tuning must:",
            options: {
                A: "Use BaseEstimator",
                B: "Override fit_transform()",
                C: "Implement inverse_fit()",
                D: "Inherit from Pipeline"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Sklearn relies on get_params/set_params. / Sklearn использует get_params/set_params."
        },
        {
            id: "q3_7",
            topic: "Clustering",
            question: "ClusterSimilarity transformer returns RBF similarities to KMeans cluster centers.",
            options: { A: "True", B: "False", C: "Only for classification", D: "Only with PCA" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "It’s a feature-engineering idea: distance → similarity. / Идея: расстояние → схожесть."
        },
        {
            id: "q3_8",
            topic: "Clustering",
            question: "In the ClusterSimilarity transformer, the fit() method:",
            options: {
                A: "Computes RBF similarities",
                B: "Fits a KMeans model",
                C: "Scales numerical features",
                D: "Performs one-hot encoding"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "fit() usually learns parameters; transform() applies. / fit() учит параметры; transform() применяет."
        },
        {
            id: "q3_9",
            topic: "Preprocessing",
            question: "Fill in the missing code to apply MinMax scaling: scaler = MinMaxScaler(); scaler.fit(train_data); scaled = scaler.________(test_data)",
            options: { A: "transform", B: "predict", C: "fit", D: "score" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "fit on train, apply to test. / fit на train, применить на test."
        },
        {
            id: "q3_10",
            topic: "Preprocessing",
            question: "Standardization using StandardScaler() transforms data using:",
            options: {
                A: "(x−min(x))/(max(x)−min(x))",
                B: "x/max(x)",
                C: "(x−μ)/σ",
                D: "log(x)"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "StandardScaler uses mean and std. / StandardScaler использует среднее и std."
        }
    ],
    quiz2: [
        {
            id: "q2_1",
            topic: "Pandas",
            question: "What happens if you use pd.get_dummies() on test data containing unseen categories?",
            options: {
                A: "It throws an error",
                B: "It creates new columns for the unseen categories",
                C: "It assigns NaN",
                D: "It ignores the categories"
            },
            answer: "B",
            explanations: {
                A: "Pandas doesn't know about your previous 'get_dummies' calls.",
                B: "Correct! This creates a column mismatch between train and test sets.",
                C: "It creates columns for new values instead of assigning NaN.",
                D: "It processes all unique values it finds."
            },
            explanations_ru: {
                A: "Pandas не знает о ваших предыдущих вызовах get_dummies.",
                B: "Верно! Это создает несоответствие столбцов между обучением и тестом.",
                C: "Он создает столбцы для новых значений вместо присвоения NaN.",
                D: "Он обрабатывает все уникальные значения, которые находит."
            },
            hint: "Independent execution. / Независимое выполнение."
        },
        {
            id: "q2_2",
            topic: "Scikit-Learn",
            question: "What happens if you use OneHotEncoder(handle_unknown='ignore') on unseen categories?",
            options: {
                A: "Error",
                B: "Drops the sample",
                C: "Returns an all-zero row for that sample",
                D: "Guesses the closest category"
            },
            answer: "C",
            explanations: {
                A: "The 'ignore' flag specifically prevents errors.",
                B: "The sample is kept, just encoded differently.",
                C: "Correct! It outputs a row of zeros for the missing categories.",
                D: "It doesn't perform any inference on the value."
            },
            explanations_ru: {
                A: "Флаг 'ignore' специально предотвращает ошибки.",
                B: "Образец сохраняется, просто кодируется по-другому.",
                C: "Верно! Он выводит строку из нулей для отсутствующих категорий.",
                D: "Он не делает никаких предположений о значении."
            },
            hint: "Safe fallback. / Безопасный запасной вариант."
        },

        // Added from your @Quizzes dump (Practice Mode)
        {
            id: "q2_3",
            topic: "Pandas",
            question: "Fill in the code to compute the correlation matrix: corr_matrix = housing.corr(numeric_only=________)",
            options: { A: "True", B: "False", C: "None", D: "All" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "pandas corr can restrict to numeric columns. / corr может считать только числовые столбцы."
        },
        {
            id: "q2_4",
            topic: "Feature Engineering",
            question: "Which technique best handles heavily right-skewed features such as population?",
            options: { A: "StandardScaler", B: "Log transformation", C: "One-hot encoding", D: "Normalization" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Think about shrinking extreme values. / Подумайте о “сжатии” больших значений."
        },
        {
            id: "q2_5",
            topic: "General",
            question: "Bucketization always improves model performance.",
            options: { A: "True", B: "False", C: "Only for trees", D: "Only for linear models" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Binning can help or hurt depending on model/data. / Биннинг может как помочь, так и навредить."
        },
        {
            id: "q2_6",
            topic: "RBF",
            question: "Which of the following is TRUE about RBF features?",
            options: {
                A: "They add linearity to the model",
                B: "They help linear models approximate nonlinear patterns",
                C: "They remove outliers",
                D: "They reduce dimensionality"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "RBF features can be a nonlinear basis expansion. / RBF-признаки — это нелинейное расширение базиса."
        },
        {
            id: "q2_7",
            topic: "RBF",
            question: "What does a small gamma (γ → 0) imply for the RBF curve?",
            options: { A: "Very narrow peak", B: "Very wide spread", C: "No peak", D: "Random noise" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Small gamma means slow decay. / Маленькая гамма — медленное убывание."
        },
        {
            id: "q2_8",
            topic: "RBF",
            question: "In an RBF kernel, the parameter γ (gamma) controls:",
            options: {
                A: "The distance between cluster centers",
                B: "How quickly similarity decays with distance",
                C: "The learning rate of the model",
                D: "The number of samples"
            },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Gamma controls locality of similarity. / Гамма контролирует “локальность” схожести."
        },
        {
            id: "q2_9",
            topic: "Preprocessing",
            question: "Which feature scaling method preserves outliers but rescales the feature to zero mean and unit variance?",
            options: { A: "MinMaxScaler", B: "StandardScaler", C: "Normalizer", D: "Log scaling" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "Zero mean + unit variance is the key phrase. / Ключ: нулевое среднее и единичное std."
        },
        {
            id: "q2_10",
            topic: "Scikit-Learn",
            question: "Fill in the missing argument name in OneHotEncoder: encoder = OneHotEncoder(________ = False)",
            options: { A: "sparse", B: "sparse_output", C: "handle_unknown", D: "drop" },
            answer: null,
            explanations: { A: "Practice mode.", B: "Practice mode.", C: "Practice mode.", D: "Practice mode." },
            explanations_ru: { A: "Режим практики.", B: "Режим практики.", C: "Режим практики.", D: "Режим практики." },
            hint: "sklearn changed this parameter name in newer versions. / В новых версиях sklearn имя параметра менялось."
        }
    ],
    midterm: [
        {
            id: "m1",
            topic: "Hyperparameters",
            question: "The main goal of hyperparameter tuning is to:",
            options: {
                A: "Change data labels",
                B: "Add new features",
                C: "Measure bias and variance",
                D: "Optimize model settings before training"
            },
            answer: "D",
            explanations: {
                A: "Labels are ground truth and should not be changed by tuning.",
                B: "Feature engineering adds features, not hyperparameter tuning.",
                C: "Tuning might affect bias and variance, but the goal is optimization.",
                D: "Correct! We tune settings like 'max_depth' to find the best model version."
            },
            explanations_ru: {
                A: "Метки — это истинные значения, их не следует менять при настройке.",
                B: "Добавление признаков — это часть проектирования признаков.",
                C: "Настройка может влиять на смещение и дисперсию, но цель — оптимизация.",
                D: "Верно! Мы настраиваем параметры, такие как 'max_depth', чтобы найти лучшую версию модели."
            },
            hint: "Settings before the fit. / Настройки перед обучением."
        },
        {
            id: "m2",
            topic: "EDA",
            question: "In the California Housing analysis, the strong correlation between median_income and median_house_value suggests that:",
            options: {
                A: "Median income is an irrelevant predictor",
                B: "Median income has a strong linear relationship with house prices",
                C: "The model should use only categorical features",
                D: "Correlation automatically implies causation"
            },
            answer: "B",
            explanations: {
                A: "Strong correlation implies relevance, not irrelevance.",
                B: "Correct! It means income is a powerful feature for predicting price.",
                C: "Categorical features alone are rarely sufficient for complex regression.",
                D: "Correlation is association; causation requires deeper experimental proof."
            },
            explanations_ru: {
                A: "Сильная корреляция подразумевает релевантность, а не бесполезность.",
                B: "Верно! Это значит, что доход — мощный признак для предсказания цены.",
                C: "Только категориальных признаков редко достаточно для сложной регрессии.",
                D: "Корреляция — это связь; причинно-следственная связь требует доказательств."
            },
            hint: "Look at the line of best fit. / Посмотрите на линию регрессии."
        },
        {
            id: "m3",
            topic: "Visualization",
            question: "Which command creates a histogram for all numerical attributes in a DataFrame named housing?",
            options: {
                A: "housing.plot()",
                B: "housing.hist()",
                C: "housing.describe()",
                D: "housing.show()"
            },
            answer: "B",
            explanations: {
                A: ".plot() defaults to line plots, not necessarily histograms for all attributes.",
                B: "Correct! .hist() automatically detects numerical columns and plots their distributions.",
                C: ".describe() provides numerical statistics, not a graphical histogram.",
                D: ".show() is not a pandas DataFrame method."
            },
            explanations_ru: {
                A: ".plot() по умолчанию строит линейные графики.",
                B: "Верно! .hist() автоматически находит числовые столбцы и строит их распределения.",
                C: ".describe() выдает числовую статистику, а не график.",
                D: ".show() не является методом DataFrame в pandas."
            },
            hint: "H-I-S-T. / Четыре буквы."
        },
        {
            id: "m4",
            topic: "Visualization",
            question: "The argument 'c' in matplotlib's scatter plot defines:",
            options: {
                A: "Column name for labels",
                B: "Data point color mapping",
                C: "Chart background",
                D: "Axis color"
            },
            answer: "B",
            explanations: {
                A: "Labels are usually set via labels or legend, not 'c'.",
                B: "Correct! 'c' stands for color and can be mapped to a variable (column).",
                C: "Background is usually set via rcParams or specific figure methods.",
                D: "Axis color is set via spine settings."
            },
            explanations_ru: {
                A: "Метки обычно устанавливаются через labels или legend.",
                B: "Верно! 'c' означает color (цвет) и может быть привязан к переменной.",
                C: "Фон обычно устанавливается через настройки фигуры.",
                D: "Цвет осей устанавливается через настройки spines."
            },
            hint: "C for Color. / C — значит Цвет."
        },
        {
            id: "m5",
            topic: "General",
            question: "In markdown, '#' before text represents:",
            options: {
                A: "Bold text",
                B: "A hyperlink",
                C: "A heading",
                D: "Italics"
            },
            answer: "C",
            explanations: {
                A: "Bold is **text**.",
                B: "Hyperlink is [text](url).",
                C: "Correct! # is H1, ## is H2, and so on.",
                D: "Italics is *text*."
            },
            explanations_ru: {
                A: "Жирный шрифт — это **текст**.",
                B: "Гиперссылка — это [текст](url).",
                C: "Верно! # — это заголовок H1, ## — H2 и т.д.",
                D: "Курсив — это *текст*."
            },
            hint: "Think about structure. / Думайте о структуре."
        },
        {
            id: "m6",
            topic: "Unsupervised",
            question: "Association Rule Learning is best described as:",
            options: {
                A: "Finding co-occurrence patterns among items",
                B: "Predicting future values",
                C: "Identifying anomalies in data",
                D: "Clustering customers into groups"
            },
            answer: "A",
            explanations: {
                A: "Correct! Like 'people who buy beer also buy diapers'.",
                B: "Predicting values is Regression/Time Series.",
                C: "Anomalies is Outlier Detection.",
                D: "Grouping customers is Clustering."
            },
            explanations_ru: {
                A: "Верно! Например: 'люди, которые покупают пиво, также покупают подгузники'.",
                B: "Предсказание значений — это регрессия.",
                C: "Поиск аномалий — это Outlier Detection.",
                D: "Группировка клиентов — это кластеризация."
            },
            hint: "Finding associations. / Поиск ассоциаций."
        },
        {
            id: "m7",
            topic: "Metrics",
            question: "The MAE (Mean Absolute Error) measures:",
            options: {
                A: "Average squared error",
                B: "Average absolute difference between predictions and true values",
                C: "Variance of predictions",
                D: "Root of squared residuals"
            },
            answer: "B",
            explanations: {
                A: "Average squared error is MSE.",
                B: "Correct! Absolute difference means they don't cancel each other out.",
                C: "Variance measures spread, not error directly.",
                D: "Root of squared residuals is RMSE."
            },
            explanations_ru: {
                A: "Средний квадрат ошибки — это MSE.",
                B: "Верно! Абсолютная разность означает, что ошибки не компенсируют друг друга.",
                C: "Дисперсия измеряет разброс, а не саму ошибку.",
                D: "Корень из квадратов остатков — это RMSE."
            },
            hint: "Absolute = no negative signs. / Абсолют — нет знака минус."
        },
        {
            id: "m8",
            topic: "Supervised",
            question: "In supervised learning, the model never uses labeled data during training.",
            options: {
                A: "True",
                B: "False"
            },
            answer: "B",
            explanations: {
                A: "Supervised learning *requires* labels to learn.",
                B: "Correct! The labels are the 'teacher' in supervised learning."
            },
            explanations_ru: {
                A: "Обучение с учителем требует меток для обучения.",
                B: "Верно! Метки — это и есть 'учитель' в обучении с учителем."
            },
            hint: "Labels are the answers. / Метки — это ответы."
        },
        {
            id: "m9",
            topic: "Classification",
            question: "In detecting tumors in brain scans, which specific ML task is used?",
            options: {
                A: "Semantic segmentation (Classification)",
                B: "Regression",
                C: "Reinforcement learning",
                D: "Clustering"
            },
            answer: "A",
            explanations: {
                A: "Correct! Labeled pixels belong to a specific class (tumor/no tumor).",
                B: "Regression predicts numbers, not 'where the tumor is'.",
                C: "RL uses agents and rewards, rarely used for static scan analysis.",
                D: "Clustering is unsupervised; scans usually have ground-truth labels."
            },
            explanations_ru: {
                A: "Верно! Размеченные пиксели относятся к классу (опухоль/не опухоль).",
                B: "Регрессия предсказывает числа, а не 'где находится опухоль'.",
                C: "RL использует агентов и награды, редко используется для анализа снимков.",
                D: "Кластеризация — обучение без учителя."
            },
            hint: "Identifying zones. / Опознание зон."
        },
        {
            id: "m10",
            topic: "Pandas",
            question: "To calculate the correlation matrix in pandas: corr_matrix = df._______()",
            options: {
                A: "correlate",
                B: "corr",
                C: "relation",
                D: "matrix"
            },
            answer: "B",
            explanations: {
                A: "correlate is not a pandas method (it exists in numpy).",
                B: "Correct! .corr() returns the Pearson correlation by default.",
                C: "relation is not a method.",
                D: "matrix is too generic."
            },
            explanations_ru: {
                A: "correlate — это метод numpy, а не pandas.",
                B: "Верно! .corr() по умолчанию возвращает корреляцию Пирсона.",
                C: "relation — такого метода нет.",
                D: "matrix — слишком общее название."
            },
            hint: "Four letters. / Четыре буквы."
        },
        {
            id: "m11",
            topic: "Visualization",
            question: "The scatterplot matrix for feature relationships is created using:",
            options: {
                A: "plt.show()",
                B: "df.plot_matrix()",
                C: "sns.pairplot()",
                D: "np.plot()"
            },
            answer: "C",
            explanations: {
                A: "plt.show() displays the plot, but doesn't create the matrix.",
                B: "No such method exists in pandas.",
                C: "Correct! Seaborn's pairplot is the standard for multivariate visualization.",
                D: "Numpy is for numerical operations, not plotting matrices."
            },
            explanations_ru: {
                A: "plt.show() отображает график, но не создает матрицу.",
                B: "Такого метода в pandas не существует.",
                C: "Верно! Seaborn pairplot — стандарт для многомерной визуализации.",
                D: "Numpy предназначен для числовых операций."
            },
            hint: "Pairs of plots. / Пары графиков."
        },
        {
            id: "m12",
            topic: "Supervised",
            question: "Which of the following pairs correctly matches ML types?",
            options: {
                A: "Image classification → Supervised learning",
                B: "Spam filtering → Unsupervised learning",
                C: "Market segmentation → Reinforcement learning",
                D: "Speech recognition → Clustering"
            },
            answer: "A",
            explanations: {
                A: "Correct! We use labeled images to train classification models.",
                B: "Spam filtering is supervised (Spam/Not Spam labels).",
                C: "Market segmentation is Unsupervised (Clustering).",
                D: "Speech recognition is complex but generally Supervised."
            },
            explanations_ru: {
                A: "Верно! Мы используем размеченные изображения.",
                B: "Фильтрация спама — обучение с учителем (метки Спам/Не спам).",
                C: "Сегментация рынка — это обучение без учителя (кластеризация).",
                D: "Распознавание речи — это преимущественно обучение с учителем."
            },
            hint: "Labeled data usage. / Использование размеченных данных."
        },
        {
            id: "m13",
            topic: "General",
            question: "In the happiness vs. GDP example, the cost function measures:",
            options: {
                A: "How bad the model's predictions are",
                B: "How accurate the model is",
                C: "The number of parameters",
                D: "The number of samples"
            },
            answer: "A",
            explanations: {
                A: "Correct! Cost function (loss) quantifies the distance between prediction and reality.",
                B: "Accuracy is a metric, but cost function specifically measures 'cost' or 'error'.",
                C: "Parameters are variables, not the measure of error.",
                D: "Samples is the dataset size."
            },
            explanations_ru: {
                A: "Верно! Функция потерь количественно определяет расстояние между предсказанием и реальностью.",
                B: "Точность — это метрика, а функция потерь измеряет 'стоимость' или ошибку.",
                C: "Параметры — это переменные, а не мера ошибки.",
                D: "Samples — это размер набора данных."
            },
            hint: "Error minimization. / Минимизация ошибки."
        },
        {
            id: "m14",
            topic: "Visualization",
            question: "Create a scatter plot in matplotlib: plt.__(x, y)",
            options: {
                A: "line",
                B: "scatter",
                C: "dots",
                D: "point"
            },
            answer: "B",
            explanations: {
                A: "line is for line charts.",
                B: "Correct! .scatter() draws individual points.",
                C: "dots is not a method.",
                D: "point is not a method."
            },
            explanations_ru: {
                A: "line — для линейных графиков.",
                B: "Верно! .scatter() рисует отдельные точки.",
                C: "dots — такого метода нет.",
                D: "point — такого метода нет."
            },
            hint: "Think about scattering seeds. / Как разброс семян."
        },
        {
            id: "m15",
            topic: "Fundamentals",
            question: "Underfitting occurs when:",
            options: {
                A: "The model is too simple to capture data patterns",
                B: "The model is too complex",
                C: "The training data is perfect",
                D: "The test data is missing"
            },
            answer: "A",
            explanations: {
                A: "Correct! For example, using a line to fit a curve.",
                B: "Model too complex leads to Overfitting.",
                C: "Perfect data doesn't cause underfitting.",
                D: "Missing test data is a data issue, not a model relationship issue."
            },
            explanations_ru: {
                A: "Верно! Например, выбор прямой линии для кривой.",
                B: "Слишком сложная модель ведет к Overfitting (переобучению).",
                C: "Идеальные данные не вызывают недообучения.",
                D: "Отсутствие тестовых данных — это проблема данных."
            },
            hint: "High bias. / Высокое смещение."
        },
        {
            id: "m16",
            topic: "Definitions",
            question: "According to Tom Mitchell, a program learns if:",
            options: {
                A: "Its accuracy decreases over time",
                B: "Its performance on T improves with experience E",
                C: "It uses labeled data",
                D: "It has high computational power"
            },
            answer: "B",
            explanations: {
                A: "Learning implies improvement, not decrease.",
                B: "Correct! This is the classic formal definition (P improves with E for T).",
                C: "Labels are part of specific types but not the general definition.",
                D: "Power is hardware; learning is algorithmic behavior."
            },
            explanations_ru: {
                A: "Обучение подразумевает улучшение, а не ухудшение.",
                B: "Верно! Классическое определение: P улучшается с опытом E для задачи T.",
                C: "Метки — часть типов, но не общего определения.",
                D: "Мощность — это железо; обучение — это алгоритмический процесс."
            },
            hint: "P improves with E for T. / P растет с E для T."
        },
        {
            id: "m17",
            topic: "Supervised",
            question: "In supervised learning, the algorithm tries to find patterns without any target labels.",
            options: {
                A: "True",
                B: "False"
            },
            answer: "B",
            explanations: {
                A: "That's unsupervised learning.",
                B: "Correct! Supervised learning depends on labels."
            },
            explanations_ru: {
                A: "Это обучение без учителя.",
                B: "Верно! Обучение с учителем зависит от меток."
            },
            hint: "Supervised = Teacher (Labels). / С учителем = Метки."
        },
        {
            id: "m18",
            topic: "General",
            question: "Which of the following is an example of supervised learning?",
            options: {
                A: "Predicting house prices using labeled data",
                B: "Grouping customers by purchase behavior",
                C: "Detecting anomalies in network traffic",
                D: "Dimensionality reduction using PCA"
            },
            answer: "A",
            explanations: {
                A: "Correct! We have the price (label) for previous houses.",
                B: "Grouping is Clustering (Unsupervised).",
                C: "Anomalies detection is often Unsupervised.",
                D: "PCA is Unsupervised feature transformation."
            },
            explanations_ru: {
                A: "Верно! У нас есть цена (метка) для предыдущих домов.",
                B: "Группировка — это кластеризация (без учителя).",
                C: "Поиск аномалий часто проходит без учителя.",
                D: "PCA — трансформация признаков без учителя."
            },
            hint: "X predicts Y. / X предсказывает Y."
        },
        {
            id: "m19",
            topic: "Algorithms",
            question: "The 'k' in k-Nearest Neighbors represents:",
            options: {
                A: "Model complexity",
                B: "Number of features",
                C: "Number of clusters",
                D: "Number of neighbors used for prediction"
            },
            answer: "D",
            explanations: {
                A: "Complexity is affected by k, but it's not what k *represents*.",
                B: "No relation to features count.",
                C: "k in k-means represents clusters; in kNN it's neighbors.",
                D: "Correct! Looking at the closest 'k' points."
            },
            explanations_ru: {
                A: "k влияет на сложность, но это не то, что k 'означает'.",
                B: "Не связано с количеством признаков.",
                C: "k в k-means — кластеры; в kNN — соседи.",
                D: "Верно! Опрос ближайших 'k' точек выборки."
            },
            hint: "Close friends. / Близкие друзья."
        },
        {
            id: "m20",
            topic: "Fundamentals",
            question: "Batch learning means:",
            options: {
                A: "Model learns continuously from new data",
                B: "Model learns from data in one large step (all at once)",
                C: "Model deletes old data",
                D: "Model cannot be retrained"
            },
            answer: "B",
            explanations: {
                A: "Continuous is Online/Incremental learning.",
                B: "Correct! Also known as offline learning.",
                C: "Batching doesn't imply deletion.",
                D: "It can be retrained, just by running the whole batch again."
            },
            explanations_ru: {
                A: "Непрерывное — это онлайн-обучение.",
                B: "Верно! Также известно как офлайн-обучение.",
                C: "Батчинг не подразумевает удаление данных.",
                D: "Его можно переобучить, просто запустив весь батч снова."
            },
            hint: "Eat the whole meal at once. / Съесть всё сразу."
        },
        {
            id: "m21",
            topic: "Code",
            question: "To fit a k-Nearest Neighbors model in scikit-learn, which method is used?",
            options: {
                A: "knn.train()",
                B: "knn.fit()",
                C: "knn.learn()",
                D: "knn.process()"
            },
            answer: "B",
            explanations: {
                A: "Scikit-learn uses .fit() instead of .train().",
                B: "Correct! .fit(X, y) is the standard method for all estimators.",
                C: "There is no .learn() method.",
                D: ".process() is not a fitting method."
            },
            explanations_ru: {
                A: "Scikit-learn использует .fit() вместо .train().",
                B: "Верно! .fit(X, y) — это стандартный метод для всех эстиматоров.",
                C: "Метода .learn() не существует.",
                D: ".process() не является методом обучения."
            },
            hint: "Fits the data. / Подгонка под данные."
        },
        {
            id: "m22",
            topic: "Code",
            question: "The accuracy of a kNN model in scikit-learn can be computed using:",
            options: {
                A: "knn.fit()",
                B: "knn.test()",
                C: "knn.validate()",
                D: "knn.score()"
            },
            answer: "D",
            explanations: {
                A: "fit() is for training.",
                B: "test() is not a standard method.",
                C: "validate() is not a standard method.",
                D: "Correct! .score(X, y) calculates R2 for regression or accuracy for classification."
            },
            explanations_ru: {
                A: "fit() предназначен для обучения.",
                B: "test() не является стандартным методом.",
                C: "validate() не является стандартным методом.",
                D: "Верно! .score(X, y) вычисляет R2 или точность."
            },
            hint: "Get the score. / Получить балл."
        },
        {
            id: "m23",
            topic: "Unsupervised",
            question: "Unsupervised learning is mainly used to:",
            options: {
                A: "Predict known outcomes",
                B: "Classify labeled data",
                C: "Train models with rewards",
                D: "Find hidden patterns without labels"
            },
            answer: "D",
            explanations: {
                A: "Predicting outcomes is Supervised.",
                B: "Classifying labeled data is Supervised.",
                C: "Rewards is Reinforcement Learning.",
                D: "Correct! Like clustering or dimensionality reduction."
            },
            explanations_ru: {
                A: "Предсказание результатов — это обучение с учителем.",
                B: "Классификация размеченных данных — обучение с учителем.",
                C: "Награды — это обучение с подкреплением.",
                D: "Верно! Например, кластеризация или снижение размерности."
            },
            hint: "No ground truth. / Без правильных ответов."
        },
        {
            id: "m24",
            topic: "Pipelines",
            question: "The main advantage of using pipelines is:",
            options: {
                A: "Reproducible and organized workflows",
                B: "Removing model dependencies",
                C: "Training models faster",
                D: "Manual data processing"
            },
            answer: "A",
            explanations: {
                A: "Correct! It bundles transformers and predictors together safely.",
                B: "It doesn't remove dependencies, it manages them.",
                C: "Faster training depends on algorithms, not the pipeline wrapper itself.",
                D: "Pipelines automate processing, not manual."
            },
            explanations_ru: {
                A: "Верно! Они объединяют трансформаторы и предикторы в единый поток.",
                B: "Они не удаляют зависимости, а управляют ими.",
                C: "Скорость зависит от алгоритмов, а не от обертки пайплайна.",
                D: "Пайплайны автоматизируют обработку."
            },
            hint: "Automated sequence. / Автоматизированная последовательность."
        },
        {
            id: "m25",
            topic: "Metrics",
            question: "Which of the following metrics penalizes large errors more heavily?",
            options: {
                A: "RMSE",
                B: "MAE",
                C: "R2",
                D: "Accuracy"
            },
            answer: "A",
            explanations: {
                A: "Correct! Squaring the errors before rooting gives more weight to outliers.",
                B: "MAE treats all absolute errors linearly.",
                C: "R2 is a relative score, not a direct error penalty measure.",
                D: "Accuracy is for classification, handles 'right or wrong' labels."
            },
            explanations_ru: {
                A: "Верно! Возведение ошибок в квадрат дает больший вес выбросам.",
                B: "MAE обрабатывает все ошибки линейно.",
                C: "R2 — это относительная метрика, а не мера штрафа.",
                D: "Точность (Accuracy) предназначена для классификации."
            },
            hint: "Squared influence. / Квадратичное влияние."
        },
        {
            id: "m26",
            topic: "Datasets",
            question: "To load the Iris dataset from scikit-learn, use: from sklearn.datasets import _______",
            options: {
                A: "load_data",
                B: "iris_loader",
                C: "load_iris",
                D: "get_iris"
            },
            answer: "C",
            explanations: {
                A: "General function names in sklearn usually specify the dataset name.",
                B: "Naming convention is load_[name].",
                C: "Correct! load_iris() returns a Bunch object with data and targets.",
                D: "get_iris is not an sklearn function."
            },
            explanations_ru: {
                A: "Общие имена функций обычно включают название датасета.",
                B: "Соглашение об именовании — load_[name].",
                C: "Верно! load_iris() возвращает объект Bunch с данными и метками.",
                D: "get_iris не является функцией sklearn."
            },
            hint: "Load + Iris. / Загрузить + Ирис."
        },
        {
            id: "m27",
            topic: "Sampling",
            question: "In stratified sampling, each stratum must appear in the sample in the same proportion as in the population.",
            options: {
                A: "True",
                B: "False"
            },
            answer: "A",
            explanations: {
                A: "Correct! This prevents sampling bias by maintaining real-world representativeness.",
                B: "This is the core definition of stratified sampling."
            },
            explanations_ru: {
                A: "Верно! Это предотвращает смещение выборки, сохраняя репрезентативность.",
                B: "Это основное определение стратифицированной выборки."
            },
            hint: "Proportional representation. / Пропорциональное представительство."
        },
        {
            id: "m28",
            topic: "EDA",
            question: "What was the main reason for creating an 'income_cat' column in the California Housing dataset?",
            options: {
                A: "To detect missing income values",
                B: "To convert numerical income into categorical bins for proportional sampling",
                C: "To simplify feature correlations",
                D: "To improve model accuracy by scaling"
            },
            answer: "B",
            explanations: {
                A: "Missing values are handled by imputers, not categorization.",
                B: "Correct! It allowed StratifiedShuffleSplit to work on a numerical feature.",
                C: "Categorization can sometimes hide correlation patterns.",
                D: "Scaling is different from binning/categorization."
            },
            explanations_ru: {
                A: "Пропущенные значения обрабатываются импьютерами.",
                B: "Верно! Это позволило использовать StratifiedShuffleSplit для числового признака.",
                C: "Категоризация иногда может скрывать паттерны корреляции.",
                D: "Масштабирование — это не то же самое, что биннинг."
            },
            hint: "Binned for balance. / Разбиение для баланса."
        },
        {
            id: "m29",
            topic: "Pandas",
            question: "The describe() method in pandas provides:",
            options: {
                A: "Only column names",
                B: "Graphical visualization",
                C: "Basic summary statistics (count, mean, std, etc.)",
                D: "Correlation coefficients"
            },
            answer: "C",
            explanations: {
                A: "Column names are found in .columns.",
                B: "Visualization uses .plot() or .hist().",
                C: "Correct! It's the first step for understanding numeric distributions.",
                D: "Correlation is found via .corr()."
            },
            explanations_ru: {
                A: "Имена столбцов находятся в .columns.",
                B: "Визуализация использует .plot() или .hist().",
                C: "Верно! Это первый шаг к пониманию распределений.",
                D: "Корреляция находится через .corr()."
            },
            hint: "Summary stats. / Статистическая сводка."
        },
        {
            id: "m30",
            topic: "Code",
            question: "Predict using a trained model: y_pred = model._______(X_test)",
            options: {
                A: "predict",
                B: "fit",
                C: "transform",
                D: "estimate"
            },
            answer: "A",
            explanations: {
                A: "Correct! .predict() is used after the model has been fitted.",
                B: "fit() is for training.",
                C: "transform() is for preprocessing data, not predicting labels.",
                D: "estimate is not a standard sklearn method."
            },
            explanations_ru: {
                A: "Верно! .predict() используется после обучения модели.",
                B: "fit() — для обучения.",
                C: "transform() — для предобработки данных.",
                D: "estimate — не стандартный метод sklearn."
            },
            hint: "Predict the future. / Предсказать будущее."
        },
        {
            id: "m31",
            topic: "Fundamentals",
            question: "Machine Learning is best described as:",
            options: {
                A: "Writing explicit rules for computers to follow",
                B: "Programming computers to learn from data",
                C: "Using statistical formulas only",
                D: "Manually labeling all data"
            },
            answer: "B",
            explanations: {
                A: "This describes traditional rule-based programming.",
                B: "Correct! ML algorithms use data to find their own rules.",
                C: "Statistics is a tool, but ML is broader (algorithms + data).",
                D: "Labeling is part of the process, but not the whole field."
            },
            explanations_ru: {
                A: "Это описывает традиционное программирование на основе правил.",
                B: "Верно! Алгоритмы ML используют данные для поиска собственных правил.",
                C: "Статистика — инструмент, но ML шире.",
                D: "Разметка — часть процесса, но не вся область."
            },
            hint: "Learning from examples. / Обучение на примерах."
        },
        {
            id: "m32",
            topic: "Scikit-Learn",
            question: "Which library provides the KNeighborsClassifier?",
            options: {
                A: "sklearn.metrics",
                B: "numpy",
                C: "sklearn.neighbors",
                D: "pandas"
            },
            answer: "C",
            explanations: {
                A: "Metrics is for evaluating models.",
                B: "Numpy is for numerical arrays.",
                C: "Correct! All neighbor-based models are in this sub-module.",
                D: "Pandas is for data manipulation."
            },
            explanations_ru: {
                A: "Metrics — для оценки моделей.",
                B: "Numpy — для числовых массивов.",
                C: "Верно! Все модели на основе соседей находятся в этом под-модуле.",
                D: "Pandas — для манипуляций с данными."
            },
            hint: "Think about neighbors. / Думайте о соседях."
        },
        {
            id: "m33",
            topic: "Fundamentals",
            question: "Overfitting means the model performs well on the training set but poorly on unseen data.",
            options: {
                A: "True",
                B: "False"
            },
            answer: "A",
            explanations: {
                A: "Correct! The model has 'memorized' noise instead of learning patterns.",
                B: "This is exactly what overfitting describes."
            },
            explanations_ru: {
                A: "Верно! Модель 'зазубрила' шум вместо изучения паттернов.",
                B: "Это ровно то, что описывает переобучение."
            },
            hint: "Memorizing vs. Learning. / Зазубривание против Обучения."
        },
        {
            id: "m34",
            topic: "Code",
            question: "The command model.fit(X, y) in scikit-learn:",
            options: {
                A: "Trains the model on data",
                B: "Tests the model",
                C: "Displays accuracy",
                D: "Splits data"
            },
            answer: "A",
            explanations: {
                A: "Correct! It adjusts the model parameters to minimize error.",
                B: "Testing is done via .score() or .predict().",
                C: "Accuracy is displayed via .score().",
                D: "Data splitting is done via train_test_split."
            },
            explanations_ru: {
                A: "Верно! Он подстраивает параметры модели для минимизации ошибки.",
                B: "Тестирование выполняется через .score() или .predict().",
                C: "Точность отображается через .score().",
                D: "Разделение данных делает train_test_split."
            },
            hint: "Adjustment phase. / Фаза подстройки."
        },
        {
            id: "m35",
            topic: "Supervised",
            question: "In supervised learning, the label set is also called the:",
            options: {
                A: "Predictor",
                B: "Feature",
                C: "Target",
                D: "Variable"
            },
            answer: "C",
            explanations: {
                A: "Predictors are the input features (X).",
                B: "Features are the inputs (X).",
                C: "Correct! It is what the model aims to predict.",
                D: "Variable is too generic."
            },
            explanations_ru: {
                A: "Предикторы — это входные признаки (X).",
                B: "Признаки — это входы (X).",
                C: "Верно! Это то, что модель стремится предсказать.",
                D: "Variable — слишком общее понятие."
            },
            hint: "The bulls-eye. / Центр мишени."
        },
        {
            id: "m36",
            topic: "Supervised",
            question: "In regression, the target variable is typically:",
            options: {
                A: "A category",
                B: "A label index",
                C: "A continuous numeric value",
                D: "A probability"
            },
            answer: "C",
            explanations: {
                A: "Categorical targets are for Classification.",
                B: "Indices are for Classification.",
                C: "Correct! Like price, temperature, or age.",
                D: "Probabilities are usually internal model outputs for classification."
            },
            explanations_ru: {
                A: "Категориальные метки — для классификации.",
                B: "Индексы меток — для классификации.",
                C: "Верно! Например, цена, температура или возраст.",
                D: "Вероятности — это обычно внутренние расчеты моделей классификации."
            },
            hint: "Numbers on a spectrum. / Числа на спектре."
        },
        {
            id: "m37",
            topic: "Scikit-Learn",
            question: "Which function is used to split data into training and test sets?",
            options: {
                A: "split_data()",
                B: "train_test_split()",
                C: "divide_set()",
                D: "random_split()"
            },
            answer: "B",
            explanations: {
                A: "Not a standard function.",
                B: "Correct! It is part of sklearn.model_selection.",
                C: "Not a standard function.",
                D: "Not a standard function."
            },
            explanations_ru: {
                A: "Не стандартная функция.",
                B: "Верно! Находится в модуле sklearn.model_selection.",
                C: "Не стандартная функция.",
                D: "Не стандартная функция."
            },
            hint: "Hyphenated name. / Имя через дефис."
        },
        {
            id: "m38",
            topic: "Fundamentals",
            question: "Underfitting means the model is too simple, while overfitting means:",
            options: {
                A: "The dataset is too large",
                B: "The model is too simple",
                C: "The model is too complex and fits noise",
                D: "The learning rate is zero"
            },
            answer: "C",
            explanations: {
                A: "Larger datasets usually help *avoid* overfitting.",
                B: "Too simple is underfitting.",
                C: "Correct! It maps to specific random variations instead of general rules.",
                D: "Zero learning rate means the model won't learn at all."
            },
            explanations_ru: {
                A: "Большие датасеты обычно помогают *избежать* переобучения.",
                B: "Слишком простая модель — это недообучение.",
                C: "Верно! Она подстраивается под случайные вариации вместо общих правил.",
                D: "Нулевая скорость обучения означает, что модель просто не будет учиться."
            },
            hint: "Complexity vs. Simple. / Сложность против Простоты."
        },
        {
            id: "m39",
            topic: "Fundamentals",
            question: "In the Life Satisfaction example, if Linear Regression systematically underpredicts for high-GDP, it indicates:",
            options: {
                A: "Overfitting",
                B: "Non-linearity in the relationship",
                C: "High variance",
                D: "Proper linearity"
            },
            answer: "B",
            explanations: {
                A: "Overfitting would cause good predictions on training data.",
                B: "Correct! The model assumes a line but the real world follows a curve.",
                C: "High variance means unstable predictions, not systematic bias.",
                D: "Linearity would result in balanced errors."
            },
            explanations_ru: {
                A: "Переобучение вызвало бы хорошие предсказания на тренировочных данных.",
                B: "Верно! Модель предполагает прямую, но реальность — это кривая.",
                C: "Высокая дисперсия означает нестабильность, а не системное смещение.",
                D: "Линейность дала бы сбалансированные ошибки."
            },
            hint: "Line vs. Curve. / Прямая против Кривой."
        },
        {
            id: "m40",
            topic: "Pandas",
            question: "Which function in pandas displays the first few rows of a DataFrame?",
            options: {
                A: "df.show()",
                B: "df.top()",
                C: "df.head()",
                D: "df.print()"
            },
            answer: "C",
            explanations: {
                A: "show() is for plots or Spark DataFrames.",
                B: "top() is not a method.",
                C: "Correct! Default is 5 rows.",
                D: "print(df) works, but .head() is the pandas method for previewing."
            },
            explanations_ru: {
                A: "show() для графиков или Spark.",
                B: "top() — такого метода нет.",
                C: "Верно! По умолчанию 5 строк.",
                D: "print(df) работает, но .head() — специальный метод для предосмотра."
            },
            hint: "Upper part of the body. / Верхняя часть тела."
        },
        {
            id: "m41",
            topic: "Fundamentals",
            question: "Online learning is best suited for:",
            options: {
                A: "Static datasets",
                B: "Streaming or constantly updating data",
                C: "Small datasets only",
                D: "Models that never change"
            },
            answer: "B",
            explanations: {
                A: "Batch learning is better for static data.",
                B: "Correct! It adapts as new samples arrive.",
                C: "It is essential for massive datasets that don't fit in memory.",
                D: "It's for models that *must* change over time."
            },
            explanations_ru: {
                A: "Пакетное (batch) обучение лучше для статики.",
                B: "Верно! Модель адаптируется с приходом новых данных.",
                C: "Это необходимо для огромных данных, не влезающих в память.",
                D: "Это для моделей, которые *должны* меняться."
            },
            hint: "Live stream. / Прямой эфир."
        },
        {
            id: "m42",
            topic: "Sampling",
            question: "Stratified sampling ensures that:",
            options: {
                A: "Training and test sets contain random data only",
                B: "Missing data are imputed",
                C: "Features are normalized",
                D: "Each subgroup is represented proportionally in train/test sets"
            },
            answer: "D",
            explanations: {
                A: "Pure random sampling can miss small subgroups.",
                B: "Imputation is a separate preprocessing step.",
                C: "Normalization is a separate step.",
                D: "Correct! It maintains the 'ratio' of important features in both sets."
            },
            explanations_ru: {
                A: "Чисто случайная выборка может упустить малые подгруппы.",
                B: "Импьютация — это отдельный шаг предобработки.",
                C: "Нормализация — это отдельный шаг.",
                D: "Верно! Она сохраняет пропорции важных признаков в обоих наборах."
            },
            hint: "Fair layers. / Справедливые слои."
        },
        {
            id: "m43",
            topic: "General",
            question: "Which markdown syntax correctly inserts an image?",
            options: {
                A: "<img>",
                B: "[image](url)",
                C: "# Image",
                D: "![text](url)"
            },
            answer: "D",
            explanations: {
                A: "That's HTML, not standard markdown.",
                B: "This is the syntax for a hyperlink.",
                C: "This is a heading.",
                D: "Correct! The exclamation mark signifies an image."
            },
            explanations_ru: {
                A: "Это HTML, а не чистый markdown.",
                B: "Это синтаксис для гиперссылки.",
                C: "Это заголовок.",
                D: "Верно! Восклицательный знак означает изображение."
            },
            hint: "Attention! + Link. / Внимание! + Ссылка."
        },
        {
            id: "m44",
            topic: "Sampling",
            question: "What is the purpose of random_state=42 in train_test_split?",
            options: {
                A: "To ensure results can be reproduced",
                B: "To improve accuracy",
                C: "To remove randomness",
                D: "To perform stratified sampling"
            },
            answer: "A",
            explanations: {
                A: "Correct! It seeds the random generator so you get the same split every run.",
                B: "Accuracy depends on data and model, not the seed value.",
                C: "It controls randomness, it doesn't remove it.",
                D: "Stratification is controlled by the 'stratify' parameter."
            },
            explanations_ru: {
                A: "Верно! Это фиксирует генератор случайных чисел для повторяемости результата.",
                B: "Точность зависит от данных и модели, а не от seed.",
                C: "Параметр управляет случайностью, а не удаляет её.",
                D: "Стратификация управляется параметром 'stratify'."
            },
            hint: "Reproducibility is key. / Воспроизводимость — это ключ."
        },
        {
            id: "m45",
            topic: "Fundamentals",
            question: "In supervised learning, features are also known as:",
            options: {
                A: "Targets",
                B: "Labels",
                C: "Attributes or inputs",
                D: "Predictions"
            },
            answer: "C",
            explanations: {
                A: "Targets are the outputs (Y).",
                B: "Labels are the ground-truth outputs (Y).",
                C: "Correct! Inputs or attributes (X) are the features.",
                D: "Predictions are model outputs."
            },
            explanations_ru: {
                A: "Targets — это выходные данные (Y).",
                B: "Labels — это правильные ответы (Y).",
                C: "Верно! Входные данные или атрибуты (X) — это признаки.",
                D: "Predictions — это оценки модели."
            },
            hint: "Input vs. Output. / Вход против Выхода."
        },
        {
            id: "m46",
            topic: "Code",
            question: "In Python, which library is typically used for data manipulation and analysis?",
            options: {
                A: "Matplotlib",
                B: "Pandas",
                C: "Requests",
                D: "TensorFlow"
            },
            answer: "B",
            explanations: {
                A: "Used for plotting.",
                B: "Correct! DataFrames are the core of Pandas.",
                C: "Used for HTTP requests.",
                D: "Used for Deep Learning."
            },
            explanations_ru: {
                A: "Используется для графиков.",
                B: "Верно! DataFrames — сердце Pandas.",
                C: "Для HTTP-запросов.",
                D: "Для глубокого обучения."
            },
            hint: "Bamboo eating bear. / Панда."
        },
        {
            id: "m47",
            topic: "Metrics",
            question: "To evaluate a classification model, you would use:",
            options: {
                A: "Mean Squared Error",
                B: "Accuracy score",
                C: "R-squared",
                D: "Root Mean Squared Error"
            },
            answer: "B",
            explanations: {
                A: "MSE is for regression.",
                B: "Correct! Accuracy measures the ratio of correct predictions.",
                C: "R2 is for regression.",
                D: "RMSE is for regression."
            },
            explanations_ru: {
                A: "MSE для регрессии.",
                B: "Верно! Точность измеряет долю верных ответов.",
                C: "R2 для регрессии.",
                D: "RMSE для регрессии."
            },
            hint: "Right or wrong. / Право или лево."
        },
        {
            id: "m48",
            topic: "General",
            question: "A high-quality dataset should have:",
            options: {
                A: "Lots of missing values",
                B: "Duplicate rows",
                C: "Consistent labeling and relevant features",
                D: "Only one feature"
            },
            answer: "C",
            explanations: {
                A: "Missing values reduce quality.",
                B: "Duplicates can bias the model.",
                C: "Correct! Clean data is the foundation of good ML.",
                D: "One feature is rarely enough."
            },
            explanations_ru: {
                A: "Пропуски снижают качество.",
                B: "Дубликаты могут сместить модель.",
                C: "Верно! Чистые данные — основа хорошего ML.",
                D: "Одного признака редко хватает."
            },
            hint: "Cleanliness is next to godliness. / Чистота — залог успеха."
        },
        {
            id: "m49",
            topic: "Algorithms",
            question: "k-means clustering is an example of:",
            options: {
                A: "Supervised learning",
                B: "Unsupervised learning",
                C: "Reinforcement learning",
                D: "Evolutionary learning"
            },
            answer: "B",
            explanations: {
                A: "Supervised needs labels.",
                B: "Correct! It groups data without prior labels.",
                C: "Reinforcement uses rewards.",
                D: "Evolutionary is a different paradigm."
            },
            explanations_ru: {
                A: "Нужны метки.",
                B: "Верно! Группирует данные без меток.",
                C: "Использует награды.",
                D: "Другая парадигма."
            },
            hint: "No teacher. / Без учителя."
        },
        {
            id: "m50",
            topic: "Code",
            question: "How do you import the LinearRegression class from scikit-learn?",
            options: {
                A: "import linear_regression",
                B: "from sklearn.linear_model import LinearRegression",
                C: "from sklearn import Regression",
                D: "sklearn.model(Linear)"
            },
            answer: "B",
            explanations: {
                A: "Incorrect import path.",
                B: "Correct! It is located in the linear_model submodule.",
                C: "Regression is not a direct import.",
                D: "Wrong syntax."
            },
            explanations_ru: {
                A: "Неверный путь импорта.",
                B: "Верно! Находится в подмодуле linear_model.",
                C: "Regression — не прямой импорт.",
                D: "Неверный синтаксис."
            },
            hint: "Linear + Model. / Линейная + Модель."
        }
    ]
};
