#!/usr/bin/env python3
"""
Clean Jupyter Notebook metadata and export to PDF with proper margins.
"""

import nbformat
import json
import sys

def clean_notebook_metadata(notebook_path):
    """Remove invalid metadata from notebook cells."""
    with open(notebook_path, 'r', encoding='utf-8') as f:
        notebook = nbformat.read(f, as_version=4)
    
    # Clean up invalid metadata
    for cell in notebook.cells:
        if 'outputs' in cell:
            for output in cell['outputs']:
                # Remove jetTransient metadata which is not standard
                if 'jetTransient' in output:
                    del output['jetTransient']
    
    # Write cleaned notebook
    with open(notebook_path, 'w', encoding='utf-8') as f:
        nbformat.write(notebook, f)
    
    print(f"✓ Cleaned metadata from {notebook_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python clean_notebook.py <notebook.ipynb>")
        sys.exit(1)
    
    clean_notebook_metadata(sys.argv[1])
