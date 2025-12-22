export const questions = [
    {
        id: 1,
        topic: "Validation",
        question: "What is the key advantage of using k-fold cross-validation?",
        options: {
            A: "It eliminates bias completely",
            B: "It always improves accuracy",
            C: "It provides a more reliable estimate of generalization performance",
            D: "It reduces the number of features"
        },
        answer: "C",
        explanation_en: "Cross-validation ensures that the model is evaluated on every single data point exactly once. This provides a much more robust estimation of how the model will perform on unseen data compared to a single train-test split.",
        explanation_ru: "Кросс-валидация гарантирует, что модель оценивается на каждой точке данных ровно один раз. Это дает гораздо более надежную оценку того, как модель будет работать на новых данных, по сравнению с однократным разделением на обучение и тест.",
        wrong_en: "A single split can be 'lucky' or 'unlucky', giving a false sense of performance. Bias is inherent in models and data, not just the split method.",
        wrong_ru: "Однократное разделение может быть 'удачным' или 'неудачным', создавая ложное впечатление о качестве. Смещение (bias) присуще моделям и данным, а не только методу разделения.",
        hint: "Think about reliability and making the most of your data. / Думайте о надежности и максимальном использовании данных."
    },
    {
        id: 2,
        topic: "Scikit-Learn",
        question: "In regression, scikit-learn uses negative error metrics in cross_val_score because:",
        options: {
            A: "Higher scores are always considered better in scikit-learn convention",
            B: "Error cannot be positive",
            C: "It is a mathematical requirement for OLS",
            D: "It reduces computational complexity"
        },
        answer: "A",
        explanation_en: "Scikit-Learn mimics a 'utility function' where higher values are better. Since we want to minimize error (like MSE), taking the negative value makes 'higher' (closer to zero) better.",
        explanation_ru: "Scikit-Learn следует соглашению 'функции полезности', где более высокие значения лучше. Так как мы хотим минимизировать ошибку (например, MSE), использование отрицательного значения делает 'большее' значение (ближе к нулю) предпочтительным.",
        wrong_en: "Error is naturally positive (like squared difference). Scaling it negatively is just a convention for optimization algorithms.",
        wrong_ru: "Ошибка по своей природе положительна (как квадрат разности). Отрицательное значение — это просто соглашение для алгоритмов оптимизации.",
        hint: "Convention: Greater is Better. / Соглашение: больше — значит лучше."
    },
    {
        id: 3,
        topic: "Hyperparameters",
        question: "What is the main limitation of GridSearchCV compared to RandomizedSearchCV?",
        options: {
            A: "It cannot use cross-validation",
            B: "It only works for classification",
            C: "It becomes computationally expensive with many hyperparameters",
            // D missing in source, adding a plausible one
            D: "It cannot tune pipelines"
        },
        answer: "C",
        explanation_en: "GridSearchCV tries every single combination of parameters. If you have 5 parameters with 5 values each, that's 5^5 = 3125 fits. It grows exponentially!",
        explanation_ru: "GridSearchCV пробует каждую комбинацию параметров. Если у вас 5 параметров по 5 значений в каждом, это 3125 обучений. Сложность растет экспоненциально!",
        wrong_en: "GridSearchCV is very flexible but slow. It works perfectly with pipelines and cross-validation.",
        wrong_ru: "GridSearchCV гибкий, но медленный. Он отлично работает с пайплайнами и кросс-валидацией.",
        hint: "Combinatorial explosion. / Комбинаторный взрыв."
    },
    {
        id: 4,
        topic: "Feature Engineering",
        question: "Why is log transformation applied to features with heavy-tailed distributions?",
        options: {
            A: "To increase variance",
            B: "To improve categorical encoding",
            C: "To reduce skewness and stabilize variance",
            D: "To create more outliers"
        },
        answer: "C",
        explanation_en: "Many ML models (like Linear Regression) assume normally distributed data. Log transformation shrinks large values more than small ones, making the distribution more bell-shaped.",
        explanation_ru: "Многие модели (например, линейная регрессия) предполагают нормальное распределение данных. Логарифмирование сжимает большие значения сильнее, чем малые, делая распределение более похожим на колокол.",
        wrong_en: "Log transformation actually reduces the impact of outliers and decreases variance for high-value ranges.",
        wrong_ru: "Логарифмирование на самом деле уменьшает влияние выбросов и снижает дисперсию для диапазонов с высокими значениями.",
        hint: "Think about the 'long tail' and how to pull it in. / Думайте о 'длинном хвосте' и о том, как его подтянуть."
    },
    {
        id: 5,
        topic: "Pipelines",
        question: "In a Scikit-Learn Pipeline, which steps MUST be transformers?",
        options: {
            A: "All steps",
            B: "Only the final step",
            C: "All steps except the last",
            D: "None of them"
        },
        answer: "C",
        explanation_en: "Intermediate steps must have a fit_transform() method to pass data to the next step. The last step can be an estimator (like a model) or a transformer.",
        explanation_ru: "Промежуточные шаги должны иметь метод fit_transform(), чтобы передавать данные следующему шагу. Последний шаг может быть эстиматором (моделью) или трансформером.",
        wrong_en: "The final step only needs fit(). If every step was a transformer, the pipeline itself would only be a transformer, not a predictor.",
        wrong_ru: "Последнему шагу достаточно метода fit(). Если бы все шаги были трансформерами, сам пайплайн был бы только трансформером, а не предсказателем.",
        hint: "Think about the flow of data through the pipe. / Думайте о потоке данных через трубу."
    },
    {
        id: 6,
        topic: "Metrics",
        question: "Which of the following metrics penalizes large errors more heavily?",
        options: {
            A: "RMSE (Root Mean Squared Error)",
            B: "MAE (Mean Absolute Error)",
            C: "R2 Score",
            D: "Accuracy"
        },
        answer: "A",
        explanation_en: "Because RMSE squares the differences before averaging, a single large error has a much bigger impact than several small errors.",
        explanation_ru: "Поскольку RMSE возводит разности в квадрат перед усреднением, одна большая ошибка оказывает гораздо большее влияние, чем несколько мелких.",
        wrong_en: "MAE treats all errors linearly. A 10-unit error is just 10 times a 1-unit error in MAE, but 100 times in MSE/RMSE.",
        wrong_ru: "MAE обрабатывает все ошибки линейно. Ошибка в 10 единиц для MAE просто в 10 раз больше ошибки в 1 единицу, но для MSE/RMSE — в 100 раз.",
        hint: "Squaring makes big numbers REALLY big. / Возведение в квадрат делает большие числа ОЧЕНЬ большими."
    },
    {
        id: 7,
        topic: "Preprocessing",
        question: "Which scaler may distort data if the distribution contains many outliers?",
        options: {
            A: "MinMaxScaler",
            B: "Normalizer",
            C: "RobustScaler",
            D: "None of the above"
        },
        answer: "A",
        explanation_en: "MinMaxScaler uses the absolute min and max of the data. One extreme outlier will squash all other data points into a tiny range (e.g., 0.0001 to 0.0002).",
        explanation_ru: "MinMaxScaler использует абсолютные минимум и максимум данных. Один экстремальный выброс сожмет все остальные данные в крошечный диапазон (например, от 0.0001 до 0.0002).",
        wrong_en: "RobustScaler is specifically designed to handle outliers by using quartiles. MinMaxScaler is very sensitive to them.",
        wrong_ru: "RobustScaler специально разработан для работы с выбросами с использованием квартилей. MinMaxScaler очень чувствителен к ним.",
        hint: "0 to 1 scaling depends on the 'all-time' high and low. / Масштабирование от 0 до 1 зависит от абсолютных максимума и минимума."
    },
    {
        id: 8,
        topic: "General ML",
        question: "Underfitting occurs when:",
        options: {
            A: "The model is too simple to capture data patterns",
            B: "The model is too complex and fits noise",
            C: "The training data is perfect",
            D: "The test data is missing"
        },
        answer: "A",
        explanation_en: "Underfitting (high bias) happens when the model is not powerful enough. It performs poorly on both training and test sets.",
        explanation_ru: "Недообучение (высокое смещение) происходит, когда модель недостаточно мощная. Она плохо работает как на обучающем, так и на тестовом наборах.",
        wrong_en: "Fitting noise is the definition of Overfitting. Underfitting is when you miss the signal entirely.",
        wrong_ru: "Подгонка под шум — это определение Переобучения. Недообучение — это когда вы полностью упускаете сигнал.",
        hint: "Too simple = Low performance everywhere. / Слишком просто = везде плохие результаты."
    },
    {
        id: 9,
        topic: "Supervised Learning",
        question: "In the context of tumor detection in brain scans, which ML task is typically used?",
        options: {
            A: "Semantic segmentation (Classification)",
            B: "Regression",
            C: "Reinforcement learning",
            D: "Association rule learning"
        },
        answer: "A",
        explanation_en: "Detecting/labeling specific areas of an image (like a tumor) is a classification task, specifically segmentation if we mark pixel-by-pixel.",
        explanation_ru: "Обнаружение/маркировка определенных областей изображения (например, опухоли) — это задача классификации, точнее сегментации, если мы отмечаем пиксель за пикселем.",
        wrong_en: "Regression predicts continuous values (like price). We need to know 'Tumor' vs 'No Tumor'.",
        wrong_ru: "Регрессия предсказывает непрерывные значения (например, цену). Нам нужно знать 'Опухоль' или 'Не опухоль'.",
        hint: "Is it a number or a category? / Это число или категория?"
    },
    {
        id: 10,
        topic: "Validation",
        question: "What is the purpose of 'random_state=42' in train_test_split?",
        options: {
            A: "To ensure results can be reproduced",
            B: "To improve accuracy",
            C: "To remove randomness",
            D: "To perform stratified sampling"
        },
        answer: "A",
        explanation_en: "Setting a seed for the random number generator ensures that every time you run the code, you get the same 'random' split.",
        explanation_ru: "Установка 'seed' (зерна) для генератора случайных чисел гарантирует, что каждый раз при запуске кода вы получите одно и то же 'случайное' разделение.",
        wrong_en: "It doesn't make the model better, it just makes the experiments consistent and easier to debug.",
        wrong_ru: "Это не делает модель лучше, это просто делает эксперименты последовательными и облегчает отладку.",
        hint: "Consistency is key for science. / Постоянство — залог науки."
    },
    {
        id: 11,
        topic: "EDA",
        question: "In the California Housing analysis, a strong correlation between median_income and median_house_value was found. This suggests:",
        options: {
            A: "Median income is an irrelevant predictor",
            B: "Median income has a strong linear relationship with house prices",
            C: "Correlation automatically implies causation",
            D: "The model should only use categorical features"
        },
        answer: "B",
        explanation_en: "A high correlation coefficient indicates that as income rises, house values typically rise too. This makes it a very strong potential feature for a linear model.",
        explanation_ru: "Высокий коэффициент корреляции указывает на то, что с ростом дохода обычно растут и цены на жилье. Это делает доход очень сильным потенциальным признаком для линейной модели.",
        wrong_en: "Correlation measures association, not causation. Also, just because it's strong doesn't mean other features are useless.",
        wrong_ru: "Корреляция измеряет связь, а не причинно-следственную связь. Кроме того, то, что связь сильная, не означает, что другие признаки бесполезны.",
        hint: "Straight lines and growth. / Прямые линии и рост."
    },
    {
        id: 12,
        topic: "Statistics",
        question: "The describe() method in pandas provides:",
        options: {
            A: "Only column names",
            B: "Graphical visualization",
            C: "Basic summary statistics (mean, std, min, max, etc.)",
            D: "Correlation coefficients"
        },
        answer: "C",
        explanation_en: "describe() is a quick way to get a statistical overview of your numerical data, helping you spot outliers early.",
        explanation_ru: "describe() — это быстрый способ получить статистический обзор ваших числовых данных, помогающий вовремя заметить выбросы.",
        wrong_en: "For correlation, you'd use .corr(). For visualization, .hist() or similar methods.",
        wrong_ru: "Для корреляции используется .corr(). Для визуализации — .hist() или подобные методы.",
        hint: "Numbers that summarize the whole column. / Числа, которые описывают весь столбец."
    },
    {
        id: 13,
        topic: "General ML",
        question: "Batch learning (Offline learning) means:",
        options: {
            A: "Model learns continuously from new data",
            B: "Model learns from data in one large step and is then deployed",
            C: "Model deletes old data automatically",
            D: "Model cannot be retrained"
        },
        answer: "B",
        explanation_en: "In batch learning, you train the model on all available data at once. To update it, you must retrain a new version from scratch on the full old+new dataset.",
        explanation_ru: "При пакетном обучении вы обучаете модель на всех имеющихся данных сразу. Чтобы обновить ее, нужно заново обучить новую версию на всем наборе (старые + новые данные).",
        wrong_en: "Continuous learning is 'Online Learning'. Batch learning is static once deployed.",
        wrong_ru: "Непрерывное обучение — это 'Online Learning'. Пакетное обучение статично после развертывания.",
        hint: "Think: One big bake vs. continuous cooking. / Думайте: Одно большое запекание против непрерывной готовки."
    },
    {
        id: 14,
        topic: "Sampling",
        question: "Stratified sampling ensures that:",
        options: {
            A: "Training and test sets contain random data only",
            B: "Missing data are imputed",
            C: "Each subgroup is represented proportionally in train/test sets",
            D: "Features are normalized"
        },
        answer: "C",
        explanation_en: "If 10% of your users are from Almaty, stratified sampling ensures that exactly 10% of your training set and 10% of your test set are also from Almaty.",
        explanation_ru: "Если 10% ваших пользователей из Алматы, стратифицированная выборка гарантирует, что ровно 10% вашей обучающей выборки и 10% тестовой также будут из Алматы.",
        wrong_en: "Random sampling might accidentally pick only people from Astana, creating a biased test set.",
        wrong_ru: "Случайная выборка может случайно выбрать только людей из Астаны, создав смещенный тестовый набор.",
        hint: "Keeping the balance of the groups. / Сохранение баланса групп."
    },
    {
        id: 15,
        topic: "General ML",
        question: "Overfitting occurs when:",
        options: {
            A: "The dataset is too large",
            B: "The model is too simple",
            C: "The model is too complex and fits noise in the training data",
            D: "The learning rate is zero"
        },
        answer: "C",
        explanation_en: "Overfitting means the model has 'memorized' the training data, including its random noise. It looks great on training data but fails on new data.",
        explanation_ru: "Переобучение означает, что модель 'зазубрила' обучающие данные, включая случайный шум. Она показывает отличные результаты на обучении, но проваливается на новых данных.",
        wrong_en: "A simple model leads to Underfitting. High capacity (complexity) is what leads to overfitting.",
        wrong_ru: "Простая модель ведет к Недообучению. Высокая мощность (сложность) — это то, что ведет к переобучению.",
        hint: "Memorizing vs. Generalizing. / Зубрежка против обобщения."
    },
    {
        id: 16,
        topic: "Classification",
        question: "The 'k' in k-Nearest Neighbors (kNN) represents:",
        options: {
            A: "Number of features",
            B: "Number of clusters",
            C: "Number of neighbors used for prediction",
            D: "Model complexity level"
        },
        answer: "C",
        explanation_en: "kNN works by looking at the 'k' closest points to a new sample and taking a majority vote (classification) or average (regression).",
        explanation_ru: "kNN работает, глядя на 'k' ближайших точек к новому образцу и принимая решение большинством голосов (классификация) или усреднением (регрессия).",
        wrong_en: "Features are the columns. Clusters are used in Unsupervised algorithms like KMeans.",
        wrong_ru: "Признаки — это столбцы. Кластеры используются в алгоритмах обучения без учителя, таких как KMeans.",
        hint: "Looking at your closest friends to decide what to do. / Смотришь на ближайших друзей, чтобы решить, что делать."
    },
    {
        id: 17,
        topic: "Supervised Learning",
        question: "Which of the following is an example of supervised learning?",
        options: {
            A: "Grouping customers by purchase behavior",
            B: "Predicting house prices using labeled data",
            C: "Detecting anomalies in network traffic",
            D: "Dimensionality reduction using PCA"
        },
        answer: "B",
        explanation_en: "Supervised learning requires 'labels' (answers). Predicting a specific value (price) from known historical examples is the classic supervised task (Regression).",
        explanation_ru: "Обучение с учителем требует 'меток' (ответов). Предсказание конкретного значения (цены) на основе известных исторических примеров — классическая задача обучения с учителем (регрессия).",
        wrong_en: "Grouping without labels is Clustering (Unsupervised). PCA is also Unsupervised.",
        wrong_ru: "Группировка без меток — это Кластеризация (без учителя). PCA — это также обучение без учителя.",
        hint: "Learning from a teacher who gives you the answers. / Обучение у учителя, который дает вам ответы."
    },
    {
        id: 18,
        topic: "Unsupervised Learning",
        question: "Unsupervised learning is mainly used to:",
        options: {
            A: "Predict known outcomes",
            B: "Classify labeled data",
            C: "Find hidden patterns without labels",
            D: "Train models with rewards and penalties"
        },
        answer: "C",
        explanation_en: "In Unsupervised learning, there is no 'right answer'. The algorithm looks for structure, like clusters or associations, in the raw data.",
        explanation_ru: "В обучении без учителя нет 'правильного ответа'. Алгоритм ищет структуру, такую как кластеры или ассоциации, в исходных данных.",
        wrong_en: "Predicting outcomes is Supervised. Rewards/penalties is Reinforcement Learning.",
        wrong_ru: "Предсказание результатов — это обучение с учителем. Награды/штрафы — это обучение с подкреплением.",
        hint: "Exploring data on your own. / Самостоятельное исследование данных."
    },
    {
        id: 19,
        topic: "Pipelines",
        question: "The main advantage of using pipelines is:",
        options: {
            A: "Training models faster",
            B: "Removing model dependencies",
            C: "Reproducible and organized workflows",
            D: "Manual data processing"
        },
        answer: "C",
        explanation_en: "Pipelines bundle preprocessing and modeling into a single object. This prevents data leakage and ensures the exact same transformations are applied to both train and test sets.",
        explanation_ru: "Пайплайны объединяют предобработку и моделирование в один объект. Это предотвращает утечку данных и гарантирует применение одинаковых преобразований к обучающему и тестовому наборам.",
        wrong_en: "Pipelines don't necessarily speed up training, but they make it much safer and more professional.",
        wrong_ru: "Пайплайны не обязательно ускоряют обучение, но делают его гораздо более безопасным и профессиональным.",
        hint: "Automation and safety first. / Автоматизация и безопасность прежде всего."
    },
    {
        id: 20,
        topic: "Regression",
        question: "In regression, the target variable is typically:",
        options: {
            A: "A category",
            B: "A label index",
            C: "A continuous numeric value",
            D: "A probability"
        },
        answer: "C",
        explanation_en: "Regression is used when you want to predict a quantity (like price, temperature, or age) rather than a group or class.",
        explanation_ru: "Регрессия используется, когда вы хотите предсказать количество (например, цену, температуру или возраст), а не группу или класс.",
        wrong_en: "Categories or label indices are what you predict in Classification.",
        wrong_ru: "Категории или индексы меток — это то, что вы предсказываете в классификации.",
        hint: "Think about infinite possibilities (numbers) vs. fixed options (categories). / Думайте о бесконечных возможностях (числа) против фиксированных вариантов (категории)."
    },
    {
        id: 21,
        topic: "Scikit-Learn",
        question: "The command model.fit(X, y) in scikit-learn performs what action?",
        options: {
            A: "Tests the model on unseen data",
            B: "Trains the model on the provided data",
            C: "Calculates the accuracy score",
            D: "Splits the data into training and test sets"
        },
        answer: "B",
        explanation_en: "In the Scikit-Learn API, .fit() is the universal command to start the training process. For transformers, it learns parameters; for models, it learns the relationship between X and y.",
        explanation_ru: "В Scikit-Learn .fit() — это универсальная команда для начала процесса обучения. Для трансформеров она изучает параметры, для моделей — зависимости между X и y.",
        wrong_en: "Testing is done via .predict() or .score(). Splitting is usually done via train_test_split() before fitting.",
        wrong_ru: "Тестирование выполняется через .predict() или .score(). Разделение обычно делается через train_test_split() перед обучением.",
        hint: "Fit = Learn. / Обучение — это подгонка под данные."
    },
    {
        id: 22,
        topic: "Validation",
        question: "Which function in Scikit-Learn is standard for dividing data into training and testing parts?",
        options: {
            A: "split_data()",
            B: "divide_set()",
            C: "train_test_split()",
            D: "random_split()"
        },
        answer: "C",
        explanation_en: "train_test_split() is the most commonly used function in the model_selection module. It shuffles and splits the dataset in one go.",
        explanation_ru: "train_test_split() — самая распространенная функция в модуле model_selection. Она перемешивает и разделяет датасет за один раз.",
        wrong_en: "While the others sound plausible, only train_test_split() is part of the official Scikit-Learn API.",
        wrong_ru: "Хотя другие названия звучат правдоподобно, только train_test_split() является частью официального API Scikit-Learn.",
        hint: "It does exactly what its name says: splits for train and test. / Она делает именно то, что говорит название: разделяет для обучения и теста."
    },
    {
        id: 23,
        topic: "General ML",
        question: "Online learning (Incremental learning) is best suited for:",
        options: {
            A: "Large, static datasets that don't change",
            B: "Small datasets only",
            C: "Streaming or constantly updating data",
            D: "Simple models like Linear Regression only"
        },
        answer: "C",
        explanation_en: "Online learning updates the model incrementally as new data arrives. It's perfect for stock prices, sensor data, or when the dataset is too big to fit in RAM.",
        explanation_ru: "Онлайн-обучение обновляет модель постепенно по мере поступления новых данных. Это идеально для цен на акции, данных с датчиков или когда датасет слишком велик для ОЗУ.",
        wrong_en: "Static datasets are usually handled better by Batch learning. Small datasets don't necessarily need incremental updates.",
        wrong_ru: "Статические данные обычно лучше обрабатываются пакетным обучением. Маленькие датасеты не обязательно требуют постепенного обновления.",
        hint: "Learning on the fly. / Обучение 'на лету'."
    },
    {
        id: 24,
        topic: "Scikit-Learn",
        question: "In Python, which command would you use to predict outcomes with a trained model?",
        options: {
            A: "model.calculate(X_test)",
            B: "model.predict(X_test)",
            C: "model.show(X_test)",
            D: "model.get_labels(X_test)"
        },
        answer: "B",
        explanation_en: ".predict() takes new input features and produces the model's output based on what it learned during .fit().",
        explanation_ru: ".predict() принимает новые признаки и выдает результат модели на основе того, что она выучила во время .fit().",
        wrong_en: "Calculate, show, and get_labels are not standard methods for making predictions in Scikit-Learn.",
        wrong_ru: "Calculate, show и get_labels не являются стандартными методами для получения предсказаний в Scikit-Learn.",
        hint: "The most logical verb for a model's output. / Самый логичный глагол для результата работы модели."
    },
    {
        id: 25,
        topic: "Classification",
        question: "Which scikit-learn module contains the KNeighborsClassifier?",
        options: {
            A: "sklearn.metrics",
            B: "sklearn.linear_model",
            C: "sklearn.neighbors",
            D: "sklearn.cluster"
        },
        answer: "C",
        explanation_en: "K-Nearest Neighbors based algorithms are organized under the 'neighbors' submodule in sklearn.",
        explanation_ru: "Алгоритмы, основанные на K-ближайших соседях, организованы в подмодуле 'neighbors' в sklearn.",
        wrong_en: "Metrics is for evaluation. linear_model is for Linear/Logistic regression. Cluster is for Unsupervised learners like KMeans.",
        wrong_ru: "Metrics — для оценки. linear_model — для линейной/логистической регрессии. Cluster — для обучения без учителя, например KMeans.",
        hint: "Look for the word 'neighbors' in the library name. / Ищите слово 'neighbors' в названии библиотеки."
    },
    {
        id: 26,
        topic: "EDA",
        question: "In the California Housing dataset, what does the target variable represent?",
        options: {
            A: "Ocean proximity",
            B: "Population size",
            C: "Median income",
            D: "Median house value"
        },
        answer: "D",
        explanation_en: "The primary goal of the California Housing project (from the textbook and quizzes) is to predict the price of a house (median_house_value).",
        explanation_ru: "Основная цель проекта California Housing (из учебника и тестов) — предсказать цену дома (median_house_value).",
        wrong_en: "Income and population are predictors (features). Ocean proximity is a categorical feature.",
        wrong_ru: "Доход и население — это предикторы (признаки). Близость к океану — категориальный признак.",
        hint: "The 'price' we are looking for. / 'Цена', которую мы ищем."
    }
];
