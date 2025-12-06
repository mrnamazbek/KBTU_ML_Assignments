# Deep Dive: ML Models & Parameters / Глубокое погружение: ML модели и параметры

## 1. The `max_iter` Parameter: How to Choose? / Параметр `max_iter`: Как выбрать?

### 🇬🇧 English
**What is it?** 
`max_iter` (Maximum Iterations) is a safety stop for proper optimization algorithms. Think of it as a "time limit" for a solver to find the best mathematical solution (the minimum of the cost function).

**How to determine the optimal value?**
It is NOT directly based on the number of rows, but rather on the **complexity of the optimization surface** (how "bumpy" the mathematical terrain is).
1.  **Start Default**: Usually 100.
2.  **If it fails (ConvergenceWarning)**: This means the solver didn't reach the bottom of the valley before the time ran out.
3.  **Action**:
    *   **Scale Data first!** (StandardScaler). This smooths the terrain, making it easier to descend. This is the correct fix 90% of the time.
    *   **Increase `max_iter`**: If scaling doesn't help (or you can't scale), increase by powers of 10: `100` -> `1000` -> `5000`.
    *   **Stop point**: If it takes too long or doesn't converge at 10,000+, your data might be noisy or the problem ill-posed.

### 🇷🇺 Русский
**Что это такое?**
`max_iter` (Максимальное число итераций) — это предохранитель для алгоритмов оптимизации. Представьте это как "лимит времени", который дается алгоритму, чтобы найти лучшее математическое решение (минимум функции ошибок).

**Как определить оптимальное значение?**
Оно зависит НЕ от количества строк, а от **сложности "ландшафта"** оптимизации (насколько "ухабиста" математическая поверхность).
1.  **Начните с дефолта**: Обычно 100.
2.  **Если ошибка (ConvergenceWarning)**: Это значит, что алгоритм не успел спуститься на "дно ущелья" (найти минимум) до истечения времени.
3.  **Действия**:
    *   **Сначала отмасштабируйте данные!** (StandardScaler). Это "сглаживает" ландшафт, делая спуск проще. Это правильное решение в 90% случаев.
    *   **Увеличьте `max_iter`**: Если шкалирование не помогло (или нельзя применить), увеличивайте в 10 раз: `100` -> `1000` -> `5000`.
    *   **Когда остановиться**: Если даже при 10,000+ не сходится, возможно, данные слишком "шумные" или проблема поставлена некорректно.

---

## 2. Logistic Regression (Логистическая Регрессия)

### 🇬🇧 English
**Purpose (Intent)**: To classify data by drawing a straight line (decision boundary) that separates classes.  
**Under the Hood**:
1.  **Calculates a weighted sum** of inputs ($z = w1*x1 + w2*x2 + b$).
2.  **Squashes** this sum using the **Sigmoid function** ($1 / (1 + e^{-z})$) to get a probability between 0 and 1.
3.  **Solver (L-BFGS)**: This is the engine. It looks at the errors and iteratively adjusts weights ($w$) to minimize the log-loss. It's like a ball rolling down a hill; `max_iter` is how many planned steps it takes.
**Why it failed initially**: Without scaling, one "step" in the `fare` direction (values 0-500) is huge compared to `age` (0-80). The solver "zig-zags" wildly and runs out of steps.

### 🇷🇺 Русский
**Цель**: Классифицировать данные, проведя прямую линию (границу решений), разделяющую классы.
**Под капотом**:
1.  **Считает взвешенную сумму** входов ($z = w1*x1 + w2*x2 + b$).
2.  **Сжимает** эту сумму функцией **Сигмоиды**, получая вероятность от 0 до 1.
3.  **Solver (L-BFGS)**: Это "движок". Он смотрит на ошибки и итеративно подкручивает веса ($w$), чтобы минимизировать ошибку (log-loss). Это похоже на мяч, катящийся с горы; `max_iter` — это количество шагов.
**Почему была ошибка**: Без шкалирования один "шаг" в направлении цены билета (`fare`, значения 0-500) огромен по сравнению с возрастом (`age`, 0-80). Алгоритм начинает "вилять" из стороны в сторону и не успевает спуститься за 100 шагов.

---

## 3. Random Forest (Случайный Лес)

### 🇬🇧 English
**Purpose**: To create a robust model by combining many weak/simple models (Decision Trees). "Wisdom of the crowds."
**Under the Hood**:
1.  **Bootstrapping**: It creates 150 (since `n_estimators=150`) random subsets of your data (allowing duplicates).
2.  **Tree Building**: It builds a Decision Tree on each subset. Crucially, at every split point, it considers only a **random subset of features**. This ensures the trees are different (uncorrelated).
3.  **Voting**: When predicting, all 150 trees vote. "Survived" or "Died". The majority wins.
**Insight**: It is **scale-invariant**. It doesn't care if `fare` is 500 or 0.5; it just asks "Is fare > 50?". That's why it worked perfectly without StandardScaler.

### 🇷🇺 Русский
**Цель**: Создать мощную модель, объединив много слабых (Решающих Деревьев). Принцип "Мудрость толпы".
**Под капотом**:
1.  **Бутстрэппинг**: Создает 150 (так как `n_estimators=150`) случайных подвыборок из данных.
2.  **Построение деревьев**: Строит дерево на каждой подвыборке. Главное: в каждом узле ветвления оно смотрит только на **случайную часть признаков**. Это делает деревья непохожими друг на друга.
3.  **Голосование**: При предсказании все 150 деревьев голосуют. Большинство побеждает.
**Инсайт**: Эта модель **инвариантна к масштабу**. Ей все равно, цена 500 или 0.5, она просто спрашивает "Цена > 50?". Поэтому она отлично работала без StandardScaler.

---

## 4. Support Vector Machine / SVM (Метод Опорных Векторов)

### 🇬🇧 English
**Purpose**: To find the **widest possible street** (margin) that separates the classes.  
**Under the Hood**:
1.  **Kernel Trick (RBF)**: Generally, data isn't separable by a straight line in 2D. SVM projects data into higher dimensions (3D, 4D, etc.) where they *can* be separated by a plane.
2.  **Margin Maximization**: It tries to place the boundary so that the distance to the nearest points of both classes (the "Support Vectors") is maximized.
**Insight**: SVM calculates **distances** between points. If one feature (`fare`) has huge numbers, it dominates the distance calculation, making other features (`age`, `sex`) irrelevant. This crashes performance without scaling.

### 🇷🇺 Русский
**Цель**: Найти **самую широкую дорогу** (зазор), разделяющую классы.
**Под капотом**:
1.  **Kernel Trick (Ядерный трюк)**: Часто данные нельзя разделить прямой линией на плоскости. SVM проецирует данные в высшие измерения (3D, 4D и т.д.), где их *можно* разделить плоскостью.
2.  **Максимизация зазора**: Он ставит границу так, чтобы расстояние до ближайших точек обоих классов ("Опорных векторов") было максимальным.
**Инсайт**: SVM считает **расстояния** между точками. Если один признак (цена) имеет огромные числа, он полностью перетягивает на себя расчет расстояния, и остальные признаки (возраст, пол) становятся неважными. Без шкалирования модель ломается.
