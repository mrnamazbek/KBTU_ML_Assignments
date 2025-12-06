import json
import os

nb_path = "/Users/namazbekbekzhanov/AntigravityProjects/KBTU_ML/KBTU_ML_Assignments/Assignment_6/Titanic.ipynb"

# Read notebook
with open(nb_path, 'r') as f:
    nb = json.load(f)

# The target line relative to the warning
target_code = "sns.barplot(x='sex', y='survived', data=df, palette='pastel')"
# The new code recommended by warning
new_code = "sns.barplot(x='sex', y='survived', data=df, hue='sex', legend=False, palette='pastel')"

found = False
for cell in nb['cells']:
    if cell['cell_type'] == 'code':
        new_source = []
        changed_cell = False
        for line in cell['source']:
            if target_code in line:
                # Replace the line
                new_line = line.replace(target_code, new_code)
                new_source.append(new_line)
                changed_cell = True
                found = True
            else:
                new_source.append(line)
        
        if changed_cell:
            cell['source'] = new_source

if found:
    with open(nb_path, 'w') as f:
        json.dump(nb, f, indent=1)
    print("Notebook patched: Seaborn warning fixed.")
else:
    print("Target code line not found.")
