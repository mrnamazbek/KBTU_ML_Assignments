#!/usr/bin/env python3
"""
Export Jupyter Notebook to PDF with proper margins and formatting.
"""

import nbformat
from nbconvert import PDFExporter
from traitlets.config import Config
import sys
import os

def export_notebook_to_pdf(notebook_path, output_path=None):
    """
    Export a Jupyter notebook to PDF with custom LaTeX settings for proper margins.
    
    Args:
        notebook_path: Path to the .ipynb file
        output_path: Optional output PDF path (defaults to same name as notebook)
    """
    # Read the notebook
    with open(notebook_path, 'r', encoding='utf-8') as f:
        notebook = nbformat.read(f, as_version=4)
    
    # Configure the PDF exporter with custom LaTeX settings
    c = Config()
    
    # Use the correct template for PDF
    c.PDFExporter.template_name = 'lab'
    
    # Custom LaTeX commands for better formatting
    c.PDFExporter.extra_template_basedirs = []
    c.PDFExporter.extra_template_paths = []
    
    # Add custom geometry settings via preprocessor
    c.PDFExporter.preprocessors = [
        'nbconvert.preprocessors.TagRemovePreprocessor',
        'nbconvert.preprocessors.RegexRemovePreprocessor',
        'nbconvert.preprocessors.SVG2PDFPreprocessor',
        'nbconvert.preprocessors.LatexPreprocessor',
    ]
    
    # Custom LaTeX preamble for proper margins
    latex_preamble = r'''
% Custom page geometry with proper margins (2.5cm all around)
\usepackage[
    top=2.5cm,
    bottom=2.5cm,
    left=2.5cm,
    right=2.5cm,
    headheight=14pt,
    includeheadfoot
]{geometry}

% Better spacing
\usepackage{setspace}
\setstretch{1.15}

% Prevent overfull boxes
\setlength{\emergencystretch}{3em}
\tolerance=2000
\hbadness=10000

% Better figure placement
\usepackage{float}
\floatplacement{figure}{H}

% Better code block handling
\usepackage{fancyvrb}
\RecustomVerbatimEnvironment{Verbatim}{Verbatim}{fontsize=\small}
'''
    
    # Set the preamble
    c.LatexPreprocessor.preamble = latex_preamble
    
    # Use xelatex for better Unicode support
    c.PDFExporter.latex_command = ['xelatex', '{filename}']
    c.PDFExporter.latex_count = 2  # Run LaTeX twice for proper references
    
    # Create the exporter
    pdf_exporter = PDFExporter(config=c)
    
    # Export the notebook
    print(f"Exporting {notebook_path} to PDF...")
    print(f"Using template: {pdf_exporter.template_name}")
    
    (body, resources) = pdf_exporter.from_notebook_node(notebook)
    
    # Determine output path
    if output_path is None:
        output_path = os.path.splitext(notebook_path)[0] + '.pdf'
    
    # Write the PDF
    with open(output_path, 'wb') as f:
        f.write(body)
    
    print(f"✓ PDF successfully created: {output_path}")
    print(f"  File size: {len(body) / 1024:.1f} KB")
    
    return output_path

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python export_to_pdf.py <notebook.ipynb> [output.pdf]")
        sys.exit(1)
    
    notebook_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None
    
    if not os.path.exists(notebook_path):
        print(f"Error: Notebook file not found: {notebook_path}")
        sys.exit(1)
    
    try:
        export_notebook_to_pdf(notebook_path, output_path)
    except Exception as e:
        print(f"Error during export: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
