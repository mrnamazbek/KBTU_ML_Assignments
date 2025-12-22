/**
 * MASTER DATA REPOSITORY: KBTU ML COURSE 2025
 * Structure: 
 * - question: String
 * - options: Array (Optional for 'fill')
 * - correct: Number (Index) or String (for 'fill')
 * - type: 'choice' | 'fill'
 * - topic: String (Used for Weak Topic Analysis)
 * - set: 'midterm' | 'quiz2' | 'quiz3' | 'quiz4' | 'bonus'
 * - optionExplanations: { en: Array, ru: Array }
 */

const masterQuizData = [
    // --- MIDTERM EXAM (50 Questions) ---
    {
        question: "The main goal of hyperparameter tuning is to:",
        options: ["Change data labels", "Add new features", "Measure bias and variance", "Optimize model settings before training"],
        correct: 3,
        topic: "Hyperparameters",
        set: "midterm",
        optionExplanations: {
            en: [
                "❌ **Labels**: This is data preparation, not model tuning.",
                "❌ **Features**: This is Feature Engineering.",
                "❌ **Measure**: This is Evaluation. Tuning *manages* bias/variance but isn't the measurement itself.",
                "✅ **Optimize settings**: Correct! These are parameters like 'k' in k-NN that you set before training starts."
            ],
            ru: [
                "❌ **Метки**: Это подготовка данных, а не тюнинг модели.",
                "❌ **Признаки**: Это проектирование признаков (Feature Engineering).",
                "❌ **Измерение**: Это оценка (Evaluation). Тюнинг помогает *управлять* ошибками, но сам не является измерением.",
                "✅ **Оптимизация**: Верно! Гиперпараметры (как 'k' в k-NN) — это настройки, которые мы задаем ДО начала обучения."
            ]
        }
    },
    {
        question: "In the California Housing analysis, the correlation between median_income and median_house_value was found to be the strongest. This suggests that:",
        options: ["Median income is irrelevant", "Median income is a key feature with strong linear relationship", "Use only categorical features", "Correlation implies causation"],
        correct: 1,
        topic: "Feature Analysis",
        set: "midterm",
        optionExplanations: {
            en: [
                "❌ **Irrelevant**: High correlation makes it the *most* relevant predictor.",
                "✅ **Key feature**: Correct! High Pearson correlation means houses tend to cost more where people earn more.",
                "❌ **Only categorical**: Ignoring strong numeric data would make the model less accurate.",
                "❌ **Causation**: ⚠️ Danger! Correlation shows they move together, but doesn't prove one *causes* the other."
            ],
            ru: [
                "❌ **Нерелевантно**: Высокая корреляция делает этот признак *самым* важным.",
                "✅ **Ключевой признак**: Верно! Коэффициент Пирсона говорит, что цена дома растет вместе с доходом жителей.",
                "❌ **Только категории**: Игнорирование сильных числовых данных снизит точность модели.",
                "❌ **Причинность**: ⚠️ Опасно! Корреляция показывает связь, но не доказывает, что одно является причиной другого."
            ]
        }
    },
    {
        question: "Create a histogram for all numerical attributes in a DataFrame named housing: housing.__()",
        type: "fill",
        answer: "hist",
        topic: "Visualization",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **hist()**: Automatically generates a grid of histograms for every numerical column in Pandas."],
            ru: ["✅ **hist()**: Автоматически строит сетку гистограмм для каждой числовой колонки в Pandas."]
        }
    },
    {
        question: "The argument c in matplotlib's scatter plot defines:",
        options: ["Labels", "Color mapping", "Background", "Axis color"],
        correct: 1,
        topic: "Visualization",
        set: "midterm",
        optionExplanations: {
            en: [
                "❌ **Labels**: Labels use the `label` parameter.",
                "✅ **Color mapping**: Correct! Used to represent a third variable (like price) via a color scale.",
                "❌ **Background**: Background is controlled via axis properties.",
                "❌ **Axis**: Axis colors use tick or spine parameters."
            ],
            ru: [
                "❌ **Метки**: Для этого используется параметр `label`.",
                "✅ **Цвет**: Верно! Позволяет отобразить третью переменную (например, цену) через цветовую палитру.",
                "❌ **Фон**: Настраивается через свойства осей.",
                "❌ **Оси**: Цвет осей меняется через параметры тиков или границ."
            ]
        }
    },
    {
        question: "In markdown, # before text represents:",
        options: ["Bold", "Hyperlink", "Heading", "Italics"],
        correct: 2,
        topic: "Tools",
        set: "midterm",
        optionExplanations: {
            en: ["❌ **Bold**: Uses `**` or `__`.", "❌ **Link**: Uses `[text](url)`.", "✅ **Heading**: Correct! One `#` is H1, `##` is H2, and so on.", "❌ **Italics**: Uses `*` or `_`."],
            ru: ["❌ **Жирный**: Используется `**`.", "❌ **Ссылка**: Используется `[текст](ссылка)`.", "✅ **Заголовок**: Верно! С одной `#` начинается заголовок первого уровня.", "❌ **Курсив**: Используется `*`."]
        }
    },
    {
        question: "Association Rule Learning is best described as:",
        options: ["Finding co-occurrence patterns", "Predicting future values", "Identifying anomalies", "Clustering customers"],
        correct: 0,
        topic: "ML Types",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Patterns**: Correct! Finds 'if X, then Y' relationships in transaction data (Market Basket Analysis).",
                "❌ **Predicting**: This is Regression/Forecasting.",
                "❌ **Anomalies**: This is Anomaly Detection (looking for RARE events).",
                "❌ **Clustering**: Groups people/objects based on similarity, not rules between items."
            ],
            ru: [
                "✅ **Паттерны**: Верно! Ищет связи типа 'если X, то Y' в транзакциях (анализ покупательской корзины).",
                "❌ **Прогноз**: Это регрессия или прогнозирование рядов.",
                "❌ **Аномалии**: Это поиск редких отклонений (Anomaly Detection).",
                "❌ **Кластеризация**: Группирует объекты по схожести, а не ищет правила между предметами."
            ]
        }
    },
    {
        question: "The MAE (Mean Absolute Error) measures:",
        options: ["Squared error", "Average absolute difference", "Variance", "Root squared residuals"],
        correct: 1,
        topic: "Metrics",
        set: "midterm",
        optionExplanations: {
            en: [
                "❌ **Squared**: That's MSE (Mean Squared Error).",
                "✅ **Absolute**: Correct! It takes the average of the absolute errors ($|y_{true} - y_{pred}|$). It is robust to outliers.",
                "❌ **Variance**: Variance measures spread, not error magnitude.",
                "❌ **Root**: That's RMSE."
            ],
            ru: [
                "❌ **Квадрат**: Это MSE.",
                "✅ **Абсолютная**: Верно! Усредняет модули ошибок. Она менее чувствительна к выбросам, чем регрессия с квадратами.",
                "❌ **Дисперсия**: Измеряет разброс данных, а не величину ошибки.",
                "❌ **Корень**: Это RMSE."
            ]
        }
    },
    {
        question: "In supervised learning, the model never uses labeled data during training.",
        options: ["True", "False"],
        correct: 1,
        topic: "Basics",
        set: "midterm",
        optionExplanations: {
            en: ["❌ **True**: No, Supervised Learning REQUIRES labels (answers) to learn.", "✅ **False**: Correct! Labels are the teacher's guide in Supervised Learning."],
            ru: ["❌ **Правда**: Нет, обучение с учителем ОБЯЗАТЕЛЬНО требует меток (ответов).", "✅ **Ложь**: Верно! Метки — это подсказки учителя в этом типе обучения."]
        }
    },
    {
        question: "In the example of detecting tumors in brain scans, which ML task is used?",
        options: ["Semantic segmentation", "Regression", "Reinforcement learning", "Clustering"],
        correct: 0,
        topic: "Applications",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Segmentation**: Correct! This involves identifying which pixels in an image belong to a tumor.",
                "❌ **Regression**: Predicts a continuous number (like price), not shapes on an image.",
                "❌ **Reinforcement**: Learns through trial and error reward systems (like a robot in a maze).",
                "❌ **Clustering**: Often lacks predefined labels; tumors require precise, labeled medical data."
            ],
            ru: [
                "✅ **Сегментация**: Верно! Это процесс определения того, какие именно пиксели изображения относятся к опухоли.",
                "❌ **Регрессия**: Предсказывает число (цену, вес), а не формы на картинке.",
                "❌ **Reinforcement**: Обучение за награды (как ИИ в играх).",
                "❌ **Кластеризация**: Обычно работает без учителей, тогда как в медицине нужны точные размеченные ответы."
            ]
        }
    },
    {
        question: "To calculate correlation matrix in pandas: corr_matrix = df.___()",
        type: "fill",
        answer: "corr",
        topic: "Pandas",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **corr()**: Fast method to compute the pairwise correlation of columns."],
            ru: ["✅ **corr()**: Быстрый метод для вычисления корреляции между всеми колонками таблицы."]
        }
    },
    {
        question: "The scatterplot matrix for feature relationships is created using:",
        options: ["sns.pairplot()", "plt.show()", "df.plot_matrix()", "np.plot()"],
        correct: 0,
        topic: "Visualization",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **pairplot()**: Correct! A Seaborn function that plots every numeric feature against every other numeric feature.",
                "❌ **show()**: Only displays current plots, doesn't create a matrix.",
                "❌ **plot_matrix()**: Not a standard Pandas method.",
                "❌ **np.plot()**: Numpy doesn't have a high-level plotting method for DataFrames."
            ],
            ru: [
                "✅ **pairplot()**: Верно! Функция Seaborn, которая строит графики зависимости каждого признака от каждого.",
                "❌ **show()**: Только выводит график на экран, но не создает его.",
                "❌ **plot_matrix()**: Не является стандартным методом в Pandas.",
                "❌ **np.plot()**: У Numpy нет таких высокоуровневых методов для таблиц."
            ]
        }
    },
    {
        question: "Which of the following pairs correctly matches ML types?",
        options: ["Image classification -> Supervised", "Spam filtering -> Unsupervised", "Market segmentation -> Reinforcement", "Speech recognition -> Clustering"],
        correct: 0,
        topic: "Definitions",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Classification**: Correct! We have labeled images (Cat/Dog) used for training.",
                "❌ **Spam**: This is Supervised (Spam/Not Spam labels).",
                "❌ **Segmentation**: This is Unsupervised (Clustering users).",
                "❌ **Speech**: Typically Supervised (Sound -> Text labels)."
            ],
            ru: [
                "✅ **Классификация**: Верно! У нас есть размеченные фото (Кот/Пёс) для обучения.",
                "❌ **Спам**: Это обучение с учителем (метки Спам/Не спам).",
                "❌ **Сегментация**: Это обучение БЕЗ учителя (кластеризация).",
                "❌ **Речь**: Обычно с учителем (Звук -> Текст)."
            ]
        }
    },
    {
        question: "In the happiness vs. GDP example, the cost function measures:",
        options: ["Model error", "Accuracy", "Parameters count", "Samples count"],
        correct: 0,
        topic: "Math",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Model error**: Correct! The cost function computes the 'distance' between the line and the actual data points.",
                "❌ **Accuracy**: Accuracy is usually used in classification; cost functions typically use error magnitude.",
                "❌ **Parameters**: Bias and weight are tuned *using* the cost function, they aren't measured by it.",
                "❌ **Samples**: This is just the dataset size."
            ],
            ru: [
                "✅ **Ошибка модели**: Верно! Функция потерь вычисляет «расстояние» между линией предсказания и реальными точками.",
                "❌ **Точность (Accuracy)**: Обычно используется в классификации, а функции потерь измеряют величину ошибки.",
                "❌ **Параметры**: Параметры модели подбираются *с помощью* функции потерь.",
                "❌ **Примеры**: Это просто размер набора данных."
            ]
        }
    },
    {
        question: "Create a scatter plot in matplotlib: plt.__(x, y)",
        type: "fill",
        answer: "scatter",
        topic: "Visualization",
        set: "midterm",
        optionExplanations: { en: ["✅ **scatter()**: Standard function for creating point charts."], ru: ["✅ **scatter()**: Стандартная функция для создания точечных диаграмм."] }
    },
    {
        question: "Underfitting occurs when:",
        options: ["Model is too simple", "Model is too complex", "Data is perfect", "Test data is missing"],
        correct: 0,
        topic: "Bias-Variance",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Too simple**: Correct! High Bias. Model fails to learn the basic patterns.",
                "❌ **Complex**: This causes Overfitting (High Variance).",
                "❌ **Perfect**: If data is perfect and model still fails, it's underfitting, but the data itself is fine.",
                "❌ **Missing**: This prevents evaluation but doesn't cause underfitting."
            ],
            ru: [
                "✅ **Слишком простая**: Верно! Высокое смещение (High Bias). Модель не видит структуру данных.",
                "❌ **Сложная**: Это причина переобучения (Overfitting).",
                "❌ **Идеальные данные**: Если данные хороши, а модель — нет, значит она слишком слабая.",
                "❌ **Отсутствие данных**: Это мешает проверить модель, но не делает её слабой сама по себе."
            ]
        }
    },
    {
        question: "According to Tom Mitchell's definition, a program learns from experience E with respect to task T and performance measure P if:",
        options: ["Accuracy decreases", "Performance on T improves with E", "Uses labeled data", "High power"],
        correct: 1,
        topic: "Definitions",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Improves**: Correct! The essence of learning is that the score P on task T gets better as we provide more experience E.", "❌ **Decreases**: That's the opposite of learning!"],
            ru: ["✅ **Улучшается**: Верно! Суть обучения в том, что результат P в задаче T становится лучше с накоплением опыта E.", "❌ **Ухудшается**: Это полная противоположность обучению!"]
        }
    },
    {
        question: "In supervised learning, the algorithm tries to find patterns without any target labels.",
        options: ["True", "False"],
        correct: 1,
        topic: "Basics",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **False**: That describes *Unsupervised* Learning. Supervised Learning always needs labels."],
            ru: ["✅ **Ложь**: Это описание обучения *Без учителя*. Обучение 'с учителем' всегда требует меток."]
        }
    },
    {
        question: "Which of the following is an example of supervised learning?",
        options: ["Predicting house prices using labeled data", "Grouping customers", "Detecting anomalies", "PCA"],
        correct: 0,
        topic: "Applications",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **House prices**: Correct! We have historical prices (labels) to guide the model.",
                "❌ **Grouping/Anomalies/PCA**: All these are typically Unsupervised Learning tasks."
            ],
            ru: [
                "✅ **Цены на дома**: Верно! У нас есть исторические цены (метки) для обучения.",
                "❌ **Группировка/Аномалии/PCA**: Все это примеры задач обучения БЕЗ учителя."
            ]
        }
    },
    {
        question: "The k in k-Nearest Neighbors represents:",
        options: ["Model complexity", "Number of features", "Number of clusters", "Number of neighbors used for prediction"],
        correct: 3,
        topic: "Models",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Neighbors**: Correct! It looks at the nearest $k$ points in the feature space to make a decision."],
            ru: ["✅ **Соседи**: Верно! Модель смотрит на $k$ ближайших точек в пространстве признаков для принятия решения."]
        }
    },
    {
        question: "Batch learning means:",
        options: ["Continuous learning", "Learning from data in one large step", "Deletes old data", "Cannot be retrained"],
        correct: 1,
        topic: "ML Types",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Large step**: Correct! It trains on all available data at once and is then deployed (no learning while online).",
                "❌ **Continuous**: This is Online/Incremental Learning."
            ],
            ru: [
                "✅ **Один шаг**: Верно! Модель обучается на всех доступных данных сразу, а затем используется без дообучения в 'живом' режиме.",
                "❌ **Непрерывное**: Это Online или Incremental Learning."
            ]
        }
    },
    {
        question: "To fit a k-Nearest Neighbors model: from sclearn.neighbors import ___",
        type: "fill",
        answer: "KNeighborsClassifier",
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: { en: ["✅ **KNeighborsClassifier**: The standard class name in scikit-learn for k-NN Classification."], ru: ["✅ **KNeighborsClassifier**: Стандартное имя класса в sklearn для k-NN классификации."] }
    },
    {
        question: "The accuracy of a kNN model in scikit-learn can be computed using:",
        options: ["knn.fit()", "knn.test()", "knn.validate()", "knn.score()"],
        correct: 3,
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: {
            en: [
                "❌ **fit()**: Used for training.",
                "✅ **score()**: Correct! It returns the mean accuracy on the given test data and labels.",
                "❌ **test()/validate()**: These aren't standard estimator methods in scikit-learn."
            ],
            ru: [
                "❌ **fit()**: Используется для обучения.",
                "✅ **score()**: Верно! Возвращает среднюю точность (accuracy) на предоставленных данных.",
                "❌ **test()/validate()**: Таких стандартных методов у объектов-оценщиков в sklearn нет."
            ]
        }
    },
    {
        question: "Unsupervised learning is mainly used to:",
        options: ["Predict known outcomes", "Classify labeled data", "Train with rewards", "Find hidden patterns without labels"],
        correct: 3,
        topic: "Definitions",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Hidden patterns**: Correct! Used for clustering, dimensionality reduction, and association rules.",
                "❌ **Predict/Classify**: This is Supervised Learning.",
                "❌ **Rewards**: This is Reinforcement Learning."
            ],
            ru: [
                "✅ **Скрытые закономерности**: Верно! Применяется для кластеризации и поиска ассоциаций.",
                "❌ **Предсказание/Классификация**: Это задачи обучения С учителем.",
                "❌ **Награды**: Это обучение с подкреплением (Reinforcement)."
            ]
        }
    },
    {
        question: "The main advantage of using pipelines is:",
        options: ["Reproducible workflows", "Removing model dependencies", "Training models faster", "Manual data processing"],
        correct: 0,
        topic: "Tools",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Reproducible**: Correct! It prevents data leakage and ensures preprocessing is identical for train and test sets.",
                "❌ **Manual**: The whole point of pipelines is to AUTOMATE processing."
            ],
            ru: [
                "✅ **Воспроизводимость**: Верно! Пайплайны предотвращают утечку данных и автоматизируют всю цепочку обработки.",
                "❌ **Ручная**: Суть пайплайнов — АВТОМАТИЗАЦИЯ, а не ручная работа."
            ]
        }
    },
    {
        question: "To load the Iris dataset from scikit-learn: from sklearn.datasets import ___",
        type: "fill",
        answer: "load_iris",
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: { en: ["✅ **load_iris**: Standard function to fetch the classic flower dataset."], ru: ["✅ **load_iris**: Стандартная функция для загрузки классического датасета с цветами ириса."] }
    },
    {
        question: "Which of the following metrics penalizes large errors more heavily?",
        options: ["RMSE", "MAE", "R2", "Accuracy"],
        correct: 0,
        topic: "Metrics",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **RMSE**: Correct! It uses the square of errors, making outliers much more 'expensive' for the model.",
                "❌ **MAE**: Uses absolute values; treats all errors proportionally.",
                "❌ **R2/Accuracy**: Don't directly measure error magnitude in the same way."
            ],
            ru: [
                "✅ **RMSE**: Верно! Использует корень из суммы квадратов ошибок, что делает выбросы очень 'дорогими'.",
                "❌ **MAE**: Использует модуль ошибки, поэтому относится ко всем ошибкам пропорционально.",
                "❌ **R2/Accuracy**: Не измеряют величину ошибки напрямую таким образом."
            ]
        }
    },
    {
        question: "In stratified sampling, each stratum must appear in the sample in the same proportion as in the population.",
        options: ["True", "False"],
        correct: 0,
        topic: "Sampling",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **True**: Correct! This is vital for small datasets to ensure the test set is representative."],
            ru: ["✅ **Правда**: Верно! Это критично для небольших наборов данных, чтобы тест был похож на реальный мир."]
        }
    },
    {
        question: "During stratified sampling in the California Housing dataset, an additional column income_cat was created using pd.cut(). The main reason was to:",
        options: ["Detect missing values", "Convert numeric income to categorical bins", "Simplify correlations", "Improve model scaling"],
        correct: 1,
        topic: "Sampling",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Bins**: Correct! Stratification needs categories (strata). We binned income to perform proportional sampling.",
                "❌ **Missing values**: `pd.cut` doesn't help with detection."
            ],
            ru: [
                "✅ **Бины**: Верно! Для стратификации нужны категории. Мы разбили доход на группы для пропорционального отбора.",
                "❌ **Пропуски**: `pd.cut` не предназначен для поиска пропущенных данных."
            ]
        }
    },
    {
        question: "The describe() method in pandas provides:",
        options: ["Only column names", "Graphical visualization", "Basic summary statistics", "Correlation coefficients"],
        correct: 2,
        topic: "Pandas",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Statistics**: Correct! It gives count, mean, std, min, max, and quartiles.",
                "❌ **Visualization**: That would be `.hist()` or `.plot()`."
            ],
            ru: [
                "✅ **Статистика**: Верно! Выдает количество, среднее, стандартное отклонение, минимум, максимум и квартили.",
                "❌ **Визуализация**: Это делают методы вроде `.hist()` или `.plot()`."
            ]
        }
    },
    {
        question: "Predict using a trained linear regression model: y_pred = model.___(X_test)",
        type: "fill",
        answer: "predict",
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: { en: ["✅ **predict()**: Universal method in sklearn to generate outputs for new input data."], ru: ["✅ **predict()**: Универсальный метод в sklearn для получения предсказаний на новых данных."] }
    },
    {
        question: "Machine Learning is best described as:",
        options: ["Explicit rules", "Programming computers to learn from data", "Statistics only", "Manual labeling"],
        correct: 1,
        topic: "Definitions",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Learn from data**: Correct! Unlike traditional programming, the computer finds the 'rules' itself by looking at examples."],
            ru: ["✅ **Обучение на данных**: Верно! В отличие от обычного программирования, компьютер сам находит правила, глядя на примеры."]
        }
    },
    {
        question: "Which library provides the KNeighborsClassifier?",
        options: ["sklearn.metrics", "numpy", "pandas", "sklearn.neighbors"],
        correct: 3,
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: { en: ["✅ **sklearn.neighbors**: This module contains neighbor-based algorithms."], ru: ["✅ **sklearn.neighbors**: Этот модуль содержит алгоритмы, основанные на поиске ближайших соседей."] }
    },
    {
        question: "To make a prediction for a new sample X_new: prediction = knn.___(X_new)",
        type: "fill",
        answer: "predict",
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: { en: ["✅ **predict()**: The standard method for applying the model to new samples."], ru: ["✅ **predict()**: Стандартный метод для применения обученной модели к новым примерам."] }
    },
    {
        question: "Overfitting means the model performs well on the training set but poorly on unseen data.",
        options: ["True", "False"],
        correct: 0,
        topic: "Bias-Variance",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **True**: Correct! High Variance. The model memorized the training noise and can't generalize."],
            ru: ["✅ **Правда**: Верно! Высокая дисперсия (High Variance). Модель зазубрила шум из обучения и не понимает новые данные."]
        }
    },
    {
        question: "The command model.fit(X, y) in scikit-learn:",
        options: ["Trains the model on data", "Tests the model", "Displays accuracy", "Splits data"],
        correct: 0,
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Trains**: Correct! `fit` is where the algorithm 'learns' from features $X$ and labels $y$."],
            ru: ["✅ **Обучает**: Верно! Метод `fit` — это момент, когда алгоритм «учится» на признаках $X$ и ответах $y$."]
        }
    },
    {
        question: "In supervised learning, the label set is also called the:",
        options: ["Predictor", "Feature", "Target", "Variable"],
        correct: 2,
        topic: "Terminology",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Target**: Correct! Usually denoted as $y$. It's what we want to predict.",
                "❌ **Feature/Predictor**: That's $X$ (the inputs)."
            ],
            ru: [
                "✅ **Target (Цель)**: Верно! Обычно обозначается через $y$. Это то, что мы хотим предсказать.",
                "❌ **Признак/Предиктор**: Это входные данные ($X$)."
            ]
        }
    },
    {
        question: "In regression, the target variable is typically:",
        options: ["Category", "Label index", "Continuous numeric value", "Probability"],
        correct: 2,
        topic: "Definitions",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Continuous**: Correct! Regression is used for predicting quantities (like $253,401.50).",
                "❌ **Category**: This would be Classification."
            ],
            ru: [
                "✅ **Непрерывное число**: Верно! Регрессия нужна для предсказания величин (например, цены квартиры).",
                "❌ **Категория**: Это была бы задача классификации."
            ]
        }
    },
    {
        question: "In Python's scikit-learn, which function is used to split data into training and test sets?",
        options: ["split_data()", "train_test_split()", "divide_set()", "random_split()"],
        correct: 1,
        topic: "Tools",
        set: "midterm",
        optionExplanations: { en: ["✅ **train_test_split()**: The most common way to separate data for validation in sklearn."], ru: ["✅ **train_test_split()**: Самый популярный способ разделения данных на обучение и тест в sklearn."] }
    },
    {
        question: "Overfitting occurs when:",
        options: ["Large dataset", "Simple model", "Zero learning rate", "Complex model fitting noise"],
        correct: 3,
        topic: "Bias-Variance",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Complex fitting noise**: Correct! The model is too flexible and starts seeing patterns in random fluctuations."],
            ru: ["✅ **Сложная модель, выучившая шум**: Верно! Модель слишком гибкая и начала видеть закономерности там, где их нет (в случайном шуме)."]
        }
    },
    {
        question: "Which function in pandas displays the first few rows of a DataFrame?",
        options: ["df.show()", "df.top()", "df.head()", "df.print()"],
        correct: 2,
        topic: "Pandas",
        set: "midterm",
        optionExplanations: { en: ["✅ **head()**: Returns the first 5 rows by default."], ru: ["✅ **head()**: По умолчанию возвращает первые 5 строк таблицы."] }
    },
    {
        question: "Online learning is best suited for:",
        options: ["Static datasets", "Streaming or constantly updating data", "Small datasets only", "Models that never change"],
        correct: 1,
        topic: "ML Types",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Streaming**: Correct! Online learning processes data incrementally as it arrives."],
            ru: ["✅ **Потоковые данные**: Верно! Online (инкрементальное) обучение обрабатывает данные по мере их поступления."]
        }
    },
    {
        question: "Stratified sampling ensures that:",
        options: ["Random data selected", "Missing data imputed", "Normalized features", "Subgroups represented proportionally"],
        correct: 3,
        topic: "Sampling",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Proportionally**: Correct! It keeps the same class balance in both training and test sets."],
            ru: ["✅ **Пропорционально**: Верно! Метод сохраняет тот же баланс классов и в обучении, и в тесте."]
        }
    },
    {
        question: "Import the Linear Regression model: from sklearn.linear_model import ___",
        type: "fill",
        answer: "LinearRegression",
        topic: "Scikit-Learn",
        set: "midterm",
        optionExplanations: { en: ["✅ **LinearRegression**: The name of the standard Linear Regression class in sklearn."], ru: ["✅ **LinearRegression**: Имя стандартного класса линейной регрессии в sklearn."] }
    },
    {
        question: "Which markdown syntax correctly inserts an image?",
        options: ["<img>", "[image](url)", "# Image", "![text](url)"],
        correct: 3,
        topic: "Tools",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **![text](url)**: Correct! The `!` makes the difference between a text link and an embedded image.",
                "❌ **[text](url)**: This is just a hyperlink to a file."
            ],
            ru: [
                "✅ **![текст](ссылка)**: Верно! Знак `!` отличает встроенную картинку от обычной текстовой ссылки.",
                "❌ **[текст](ссылка)**: Это просто текстовая гиперссылка."
            ]
        }
    },
    {
        question: "What is the purpose of random_state=42 in train_test_split()?",
        options: ["Reproducibility", "Accuracy", "Remove randomness", "Perform stratification"],
        correct: 0,
        topic: "Tools",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Reproducibility**: Correct! It ensures the random split is identical every time you run the code."],
            ru: ["✅ **Воспроизводимость**: Верно! Гарантирует, что случайное разделение будет одинаковым при каждом перезапуске кода."]
        }
    },
    {
        question: "In supervised learning, features are also known as:",
        options: ["Targets", "Labels", "Attributes or inputs", "Predictions"],
        correct: 2,
        topic: "Terminology",
        set: "midterm",
        optionExplanations: {
            en: [
                "✅ **Attributes/Inputs**: Correct! Usually denoted as $X$. These are the columns used for making predictions.",
                "❌ **Labels**: Labels are the targets (y)."
            ],
            ru: [
                "✅ **Атрибуты или входы**: Верно! Обычно обозначаются как $X$. Это колонки, на которых мы строим предсказание.",
                "❌ **Метки (Labels)**: Метки — это цели (y)."
            ]
        }
    },
    {
        question: "In the California Housing dataset, the target variable represents:",
        options: ["Median house value", "Population size", "Ocean proximity", "Median income"],
        correct: 0,
        topic: "Applications",
        set: "midterm",
        optionExplanations: {
            en: ["✅ **Median value**: Correct! Our goal was to predict the price of houses in California districts."],
            ru: ["✅ **Медианная цена**: Верно! Нашей целью было предсказание стоимости домов в районах Калифорнии."]
        }
    },

    // --- QUIZ 2 (Encoding & Scaling) ---
    {
        question: "What happens if you use pd.get_dummies() on test data containing unseen categories?",
        options: ["Error", "New columns created", "Assigns NaN", "Ignores categories"],
        correct: 1,
        topic: "Encoding",
        set: "quiz2",
        optionExplanations: {
            en: [
                "❌ **Error**: Pandas doesn't complain, it just silently breaks your model's expected shape.",
                "✅ **New columns**: Correct! This creates a mismatch between dimensions (train has 5, test might have 7), causing a crash later.",
                "💡 **Coach Tip**: Always use sklearn's `OneHotEncoder` with `handle_unknown='ignore'` for more safety!"
            ],
            ru: [
                "❌ **Ошибка**: Pandas молчит, он просто тихо меняет размерность таблицы, что ломает модель.",
                "✅ **Новые колонки**: Верно! Это создает несовпадение колонок (в обучении 5, а в тесте стало 7).",
                "💡 **Совет**: Всегда используйте `OneHotEncoder` из sklearn с параметром `handle_unknown='ignore'`."
            ]
        }
    },
    {
        question: "Which technique best handles heavily right-skewed features?",
        options: ["StandardScaler", "Log transformation", "One-hot encoding", "Normalization"],
        correct: 1,
        topic: "Transformation",
        set: "quiz2",
        optionExplanations: {
            en: [
                "❌ **StandardScaler**: Good for scale, but it doesn't fix the shape (skewness).",
                "✅ **Log transformation**: Correct! It compresses large values more than small ones, making the distribution more 'normal'.",
                "💡 **Coach Tip**: Look at histograms! If there's a long tail to the right, think about Log or Root transforms."
            ],
            ru: [
                "❌ **StandardScaler**: Исправляет масштаб, но не форму распределения (скошенность).",
                "✅ **Log transformation**: Верно! Сжимает большие значения сильнее малых, делая распределение более симметричным.",
                "💡 **Совет**: Смотри на гистограмму! Если видишь длинный «хвост» справа — пробуй логарифм."
            ]
        }
    },

    {
        question: "What happens if you use OneHotEncoder(handle_unknown='ignore') on unseen categories?",
        options: ["Errors", "Drops the sample", "Returns an all-zero row for that sample", "Guesses the closest category"],
        correct: 2,
        topic: "Encoding",
        set: "quiz2",
        optionExplanations: {
            en: [
                "❌ **Errors**: This only happens if you don't use 'ignore'.",
                "❌ **Drops**: It doesn't drop the row; it just changes the encoding.",
                "✅ **All-zero row**: Correct! The model receives 0s for all known category columns, which is the safest way to handle unknown data in production.",
                "❌ **Guesses**: Models don't guess categories unless you explicitly use an Imputer or KNN."
            ],
            ru: [
                "❌ **Ошибка**: Это произойдет только если НЕ использовать 'ignore'.",
                "❌ **Удаление**: Строка остается на месте, меняется только её код.",
                "✅ **Все нули**: Верно! Программа подставляет 0 во все колонки этой категории. Это самый безопасный способ обработки неизвестных данных.",
                "❌ **Угадывание**: Модели не угадывают категории сами по себе без специальных методов."
            ]
        }
    },
    {
        question: "Bucketization (converting numbers to bins) always improves model performance.",
        options: ["True", "False"],
        correct: 1,
        topic: "Feature Engineering",
        set: "quiz2",
        optionExplanations: {
            en: [
                "❌ **True**: In ML, 'always' is almost never true!",
                "✅ **False**: Correct! While bucketization helps linear models understand non-linear ranges, it also LOSES information within the bin. Sometimes raw numbers are better."
            ],
            ru: [
                "❌ **Правда**: В машинном обучении слово «всегда» почти никогда не бывает верным!",
                "✅ **Ложь**: Верно! Разбиение на группы помогает линейным моделям, но при этом мы ТЕРЯЕМ точность внутри каждой группы."
            ]
        }
    },
    {
        question: "Standardization using StandardScaler() transforms data using:",
        options: ["(x-min)/(max-min)", "x/max", "(x-mean)/std", "log(x)"],
        correct: 2,
        topic: "Scaling",
        set: "quiz3",
        optionExplanations: {
            en: [
                "❌ **(x-min)**: That's normalization (MinMaxScaler).",
                "✅ **(x-mean)/std**: Correct! This is the formula for a z-score. It ensures mean=0 and variance=1.",
                "💡 **Coach Tip**: Standardization handles outliers better than MinMax because it doesn't squish everything into a tiny [0,1] range."
            ],
            ru: [
                "❌ **(x-min)**: Это нормализация (MinMaxScaler).",
                "✅ **(x-mean)/std**: Верно! Это формула z-оценки. Среднее становится 0, а отклонение — 1.",
                "💡 **Совет**: Стандартизация лучше переносит выбросы, чем MinMax, так как не втискивает все данные в узкий диапазон [0,1]."
            ]
        }
    },

    {
        question: "Which scaler may distort data if the distribution contains outliers?",
        options: ["MinMaxScaler", "Normalizer", "RobustScaler", "StandardScaler"],
        correct: 0,
        topic: "Scaling",
        set: "quiz3",
        optionExplanations: {
            en: [
                "✅ **MinMaxScaler**: Correct! Because it uses the absolute min and max, one single outlier at 1,000,000 will crush all your 'normal' data points into a tiny range like 0.0001.",
                "❌ **Normalizer**: Rescales rows, not features.",
                "❌ **RobustScaler**: Specifically designed to handle outliers by using the Interquartile Range.",
                "❌ **StandardScaler**: Sensitive to outliers, but not as extreme as MinMaxScaler (which has a hard 0-1 boundary)."
            ],
            ru: [
                "✅ **MinMaxScaler**: Верно! Так как он использует минимум и максимум, один выброс в миллион «сожмет» все нормальные данные в крошечный отрезок около нуля.",
                "❌ **Normalizer**: Масштабирует строки, а не столбцы.",
                "❌ **RobustScaler**: Специально создан для работы с выбросами через квантили.",
                "❌ **StandardScaler**: Тоже чувствителен к выбросам, но не так критично, как MinMax."
            ]
        }
    },
    {
        question: "Given RBF formula exp(−γ(x−m)²), what happens if γ is very small?",
        options: ["Narrow peak", "Negative similarity", "Very wide similarity curve", "Similarity becomes exactly 1"],
        correct: 2,
        topic: "RBF Kernel",
        set: "quiz3",
        optionExplanations: {
            en: [
                "❌ **Narrow peak**: This happens when Gamma is LARGE. Influence is local.",
                "❌ **Negative**: Exponential functions are always positive.",
                "✅ **Wide curve**: Correct! Small Gamma means one data point influences a huge area around it (global influence).",
                "❌ **Exactly 1**: This only happens if x exactly matches the landmark m."
            ],
            ru: [
                "❌ **Узкий пик**: Это бывает при БОЛЬШОЙ Гамме. Влияние только на близких соседей.",
                "❌ **Отрицательность**: Экспонента всегда положительна.",
                "✅ **Широкая кривая**: Верно! Маленькая Гамма означает, что точка влияет на очень большую область вокруг себя.",
                "❌ **Равна 1**: Это возможно только если точка x совпадает с ориентиром m."
            ]
        }
    },
    {
        question: "In a pipeline, which steps must be transformers?",
        options: ["All steps", "Only the final step", "All steps except the last", "None of them"],
        correct: 2,
        topic: "Pipelines",
        set: "quiz4",
        optionExplanations: {
            en: [
                "❌ **All**: The last step can be an estimator (like LinearRegression) which doesn't have a `transform()` method.",
                "✅ **Except last**: Correct! Every intermediate step must be able to change the data so it can be passed to the next step.",
                "💡 **Coach Tip**: Think of a factory belt. Every station (transformer) modifies the product, until the final inspector (estimator) evaluates it."
            ],
            ru: [
                "❌ **Все**: Последним шагом может быть модель (регрессия), у которой нет метода `transform()`.",
                "✅ **Все кроме последнего**: Верно! Каждый промежуточный шаг должен уметь преобразовывать данные для следующего шага.",
                "💡 **Совет**: Представь конвейер. Каждая станция (трансформер) меняет деталь, пока финальный инспектор (модель) не выдаст результат."
            ]
        }
    },

    // --- BONUS QUIZ (Validation) ---
    {
        question: "What is the key advantage of using k-fold cross-validation?",
        options: ["Eliminates bias completely", "Always improves accuracy", "Reliable estimate of generalization", "Reduces features"],
        correct: 2,
        topic: "Validation",
        set: "bonus",
        optionExplanations: {
            en: [
                "❌ **Eliminates bias**: No technique 'eliminates' bias completely.",
                "✅ **Reliable estimate**: Correct! By testing on every subset of the data, you get a much better idea of how the model will perform on unseen data.",
                "💡 **Coach Tip**: Use CV if your dataset is small. It makes much better use of your limited data points."
            ],
            ru: [
                "❌ **Убирает смещение**: Никакой метод не убирает смещение полностью.",
                "✅ **Надежная оценка**: Верно! Проверяя модель на каждом кусочке данных, ты лучше понимаешь её истинную силу.",
                "💡 **Совет**: Используй кросс-валидацию, если данных мало. Она позволяет выжать максимум из имеющихся примеров."
            ]
        }
    },
    // --- ADVANCED FINAL EXAM MODULE (Logic Boost) ---
    {
        question: "What happens if you use Standard Scaler on a feature that has a huge outlier (e.g., 10,000 when the mean is 50)?",
        options: ["The outlier is removed", "The mean becomes skewed and the range of normal data is squashed", "The outlier is automatically clipped to 1", "The model becomes 100% accurate"],
        correct: 1,
        topic: "Scaling Issues",
        set: "midterm", // Adding to midterm/final pool
        optionExplanations: {
            en: [
                "❌ **Removed**: Scalers don't remove data. They just transform values.",
                "✅ **Squashed**: Correct! Standard scaler is very sensitive to outliers. One huge value will pull the mean up and make standard deviation huge, leaving normal points as tiny decimals close to zero.",
                "❌ **Clipped**: Clipping is a separate technique (like `winsorizing`).",
                "💡 **Coach Tip**: Use `RobustScaler` if you have nasty outliers—it uses median and IQR instead of mean and std!"
            ],
            ru: [
                "❌ **Удаление**: Скейлеры не удаляют данные, они только меняют их значения.",
                "✅ **Сдавливание**: Верно! StandardScaler чувствителен к выбросам. Одно гигантское число раздует стандартное отклонение, из-за чего обычные значения превратятся в крошечные дробные числа.",
                "❌ **Клиппинг**: Это отдельный прием. Скейлеры сами ничего не обрезают.",
                "💡 **Совет**: Если в данных есть выбросы, используй `RobustScaler` — он работает через медиану и квантили."
            ]
        }
    },
    {
        question: "If your model has 100% accuracy on Training but 50% on Validation, you are likely witnessing:",
        options: ["Underfitting", "Perfect learning", "Data leakage", "Overfitting (High Variance)"],
        correct: 3,
        topic: "Bias-Variance",
        set: "midterm",
        optionExplanations: {
            en: [
                "❌ **Underfitting**: Underfitting gives BAD scores on both sets.",
                "❌ **Perfect**: No, 50% is basically random guessing.",
                "❌ **Data Leakage**: Leakage usually makes BOTH scores look too good.",
                "✅ **Overfitting**: Correct! Your model memorized the specific details (and noise) of the training data but can't handle new data."
            ],
            ru: [
                "❌ **Недообучение**: В этом случае плохие результаты будут везде.",
                "❌ **Идеал**: Нет, 50% — это уровень подбрасывания монетки.",
                "❌ **Утечка**: Утечка обычно делает результаты на тесте слишком *хорошими*.",
                "✅ **Переобучение**: Верно! Модель просто заучила тренировочные данные вместе с их шумом и не понимает новые примеры."
            ]
        }
    },
    {
        question: "Which hyperparameter in RandomizedSearchCV controls how many total models will be tested?",
        type: "fill",
        answer: "n_iter",
        topic: "Validation",
        set: "bonus",
        optionExplanations: {
            en: ["✅ **n_iter**: Correct! Unlike GridSearch (which tries every option), RandomizedSearch stops after $n\_iter$ random combinations."],
            ru: ["✅ **n_iter**: Верно! В отличие от GridSearch (который пробует всё), случайный поиск остановится после $n\_iter$ попыток."]
        }
    },
    {
        question: "Why is log transformation applied to features with heavy-tailed distributions?",
        options: ["To increase variance", "To improve categorical encoding", "To reduce skewness and stabilize variance", "To create more outliers"],
        correct: 2,
        topic: "Feature Engineering",
        set: "quiz4",
        optionExplanations: {
            en: [
                "❌ **Increase variance**: Log transformation usually *reduces* the spread of large values.",
                "❌ **Categorical**: Log is for numerical data, not categories.",
                "✅ **Reduce skewness**: Correct! It 'pulls' the long right tail of the distribution toward the center, making it easier for linear models to work with.",
                "❌ **Outliers**: It actually makes outliers LESS extreme."
            ],
            ru: [
                "❌ **Увеличение дисперсии**: Логарифм обычно *уменьшает* разброс больших значений.",
                "❌ **Категории**: Логарифм нужен для чисел, а не для категорий.",
                "✅ **Уменьшение скошенности**: Верно! Он «подтягивает» длинный правый хвост распределения к центру, делая данные более пригодными для линейных моделей.",
                "❌ **Выбросы**: Он делает выбросы МЕНЕЕ заметными."
            ]
        }
    },
    {
        question: "The purpose of ratio-based feature engineering (e.g., bedrooms_ratio) is to:",
        options: ["Reduce memory", "Remove multicollinearity", "Reduce dimensionality", "Create more meaningful, normalized relationships"],
        correct: 3,
        topic: "Feature Engineering",
        set: "quiz4",
        optionExplanations: {
            en: [
                "✅ **Normalized relationships**: Correct! 5 bedrooms might be a lot for a small house but little for a mansion. A ratio (bedrooms/rooms) tells a better story independent of total size.",
                "❌ **Multicollinearity**: If anything, ratios might *add* complexity to relationships."
            ],
            ru: [
                "✅ **Смысловые связи**: Верно! 5 спален — это много для маленького дома, но мало для особняка. Отношение (спальни/комнаты) дает более точную картину независимо от размера дома.",
                "❌ **Мультиколлинеарность**: Напротив, новые признаки могут даже усложнить связи между данными."
            ]
        }
    },
    {
        question: "KMeans-based cluster similarity features can help linear models capture nonlinear geographic patterns.",
        options: ["True", "False"],
        correct: 0,
        topic: "ClusterSimilarity",
        set: "quiz4",
        optionExplanations: {
            en: [
                "✅ **True**: Correct! By measuring distance to specific 'hubs' (clusters), the linear model can learn that being near 'Point A' is good, even if it's not a simple straight-line relationship across the map."
            ],
            ru: [
                "✅ **Правда**: Верно! Измеряя расстояние до «центров» (кластеров), линейная модель может понять, что близость к 'Точке А' важна, даже если общая зависимость по карте не является прямой линией."
            ]
        }
    },
    {
        question: "What is the main limitation of GridSearchCV compared to RandomizedSearchCV?",
        options: ["Cannot use CV", "Only for classification", "Computationally expensive", "Cannot tune pipelines"],
        correct: 2,
        topic: "Validation",
        set: "bonus",
        optionExplanations: {
            en: [
                "✅ **Expensive**: Correct! GridSearch tries EVERY possible combination. If you have 10 params with 10 values each, that's $10^{10}$ models! RandomizedSearch only tries $n$ random ones.",
                "❌ **Pipelines**: Both work perfectly with pipelines."
            ],
            ru: [
                "✅ **Дороговизна**: Верно! GridSearch перебирает ВСЕ возможные комбинации. Если у тебя 10 параметров по 10 значений, это $10^{10}$ моделей! RandomizedSearch пробует только $n$ случайных.",
                "❌ **Пайплайны**: Оба метода отлично работают с пайплайнами."
            ]
        }
    },
    {
        question: "Which sklearn tool can automatically remove low-importance features based on a fitted model?",
        options: ["PCA", "SelectKBest", "SelectFromModel", "VarianceThreshold"],
        correct: 2,
        topic: "Feature Selection",
        set: "bonus",
        optionExplanations: {
            en: [
                "❌ **PCA**: Reduces dimensions by creating NEW features, not by picking existing ones.",
                "❌ **SelectKBest**: Uses statistical tests (independently of a model).",
                "✅ **SelectFromModel**: Correct! It uses the weights (like `coef_` or `feature_importances_`) from a trained model to pick the best features.",
                "❌ **VarianceThreshold**: Only looks at the variance of a single feature, not its importance to a label."
            ],
            ru: [
                "❌ **PCA**: Уменьшает размерность, создавая НОВЫЕ признаки, а не выбирая старые.",
                "❌ **SelectKBest**: Использует статистические тесты (независимо от самой модели).",
                "✅ **SelectFromModel**: Верно! Этот инструмент использует веса обученной модели (`feature_importances_`), чтобы оставить только важные признаки.",
                "❌ **VarianceThreshold**: Смотрит только на разброс одного признака, не учитывая его важность для предсказания."
            ]
        }
    }
];
