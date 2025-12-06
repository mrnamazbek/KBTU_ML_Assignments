#!/usr/bin/env python3
"""
Export Jupyter Notebook to PDF via HTML with proper margins and formatting.
This approach avoids LaTeX issues by using HTML as an intermediate format.
"""

import nbformat
from nbconvert import HTMLExporter
import subprocess
import sys
import os
from pathlib import Path

def export_notebook_to_pdf_via_html(notebook_path, output_path=None):
    """
    Export a Jupyter notebook to PDF via HTML with custom CSS for proper margins.
    
    Args:
        notebook_path: Path to the .ipynb file
        output_path: Optional output PDF path (defaults to same name as notebook)
    """
    # Read the notebook
    with open(notebook_path, 'r', encoding='utf-8') as f:
        notebook = nbformat.read(f, as_version=4)
    
    # Create HTML exporter
    html_exporter = HTMLExporter()
    html_exporter.template_name = 'classic'
    
    # Custom CSS for better PDF output with proper margins
    custom_css = """
    <style>
    @media print {
        @page {
            size: A4;
            margin: 2.5cm;
        }
        body {
            margin: 0;
            padding: 0;
        }
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        font-size: 11pt;
        line-height: 1.6;
        max-width: 100%;
        padding: 0;
        margin: 0;
    }
    .container {
        max-width: 100%;
        padding: 0;
    }
    .cell {
        page-break-inside: avoid;
        margin-bottom: 1em;
    }
    .output_png, .output_jpeg {
        max-width: 100%;
        height: auto;
    }
    pre, code {
        font-family: "SF Mono", Monaco, "Courier New", monospace;
        font-size: 10pt;
        background-color: #f6f8fa;
        border-radius: 3px;
        padding: 0.2em 0.4em;
    }
    pre {
        padding: 1em;
        overflow-x: auto;
    }
    h1 { font-size: 24pt; margin-top: 1em; margin-bottom: 0.5em; }
    h2 { font-size: 20pt; margin-top: 0.8em; margin-bottom: 0.4em; }
    h3 { font-size: 16pt; margin-top: 0.6em; margin-bottom: 0.3em; }
    table {
        border-collapse: collapse;
        width: 100%;
        margin: 1em 0;
    }
    table, th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }
    </style>
    """
    
    # Export to HTML
    print(f"Converting {notebook_path} to HTML...")
    (body, resources) = html_exporter.from_notebook_node(notebook)
    
    # Insert custom CSS before </head>
    body = body.replace('</head>', f'{custom_css}</head>')
    
    # Save HTML to temporary file
    html_path = Path(notebook_path).with_suffix('.html')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(body)
    
    print(f"✓ HTML created: {html_path}")
    
    # Determine output path
    if output_path is None:
        output_path = Path(notebook_path).with_suffix('.pdf')
    
    # Convert HTML to PDF using wkhtmltopdf or weasyprint
    # Try wkhtmltopdf first
    try:
        print(f"Converting HTML to PDF using wkhtmltopdf...")
        cmd = [
            'wkhtmltopdf',
            '--enable-local-file-access',
            '--page-size', 'A4',
            '--margin-top', '25mm',
            '--margin-bottom', '25mm',
            '--margin-left', '25mm',
            '--margin-right', '25mm',
            '--print-media-type',
            str(html_path),
            str(output_path)
        ]
        subprocess.run(cmd, check=True, capture_output=True)
        print(f"✓ PDF successfully created: {output_path}")
        
        # Get file size
        file_size = os.path.getsize(output_path)
        print(f"  File size: {file_size / 1024:.1f} KB")
        
        # Clean up HTML file
        html_path.unlink()
        
        return output_path
        
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"wkhtmltopdf not available or failed: {e}")
        print("Trying alternative method with weasyprint...")
        
        try:
            from weasyprint import HTML, CSS
            
            # Custom CSS for margins
            margin_css = CSS(string='''
                @page {
                    size: A4;
                    margin: 2.5cm;
                }
            ''')
            
            HTML(filename=str(html_path)).write_pdf(
                str(output_path),
                stylesheets=[margin_css]
            )
            
            print(f"✓ PDF successfully created: {output_path}")
            file_size = os.path.getsize(output_path)
            print(f"  File size: {file_size / 1024:.1f} KB")
            
            # Clean up HTML file
            html_path.unlink()
            
            return output_path
            
        except ImportError:
            print("ERROR: Neither wkhtmltopdf nor weasyprint is available.")
            print("Please install one of them:")
            print("  - wkhtmltopdf: brew install wkhtmltopdf")
            print("  - weasyprint: pip install weasyprint")
            print(f"\nHTML file saved at: {html_path}")
            print("You can manually convert it to PDF using your browser's Print to PDF feature.")
            return None

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python export_via_html.py <notebook.ipynb> [output.pdf]")
        sys.exit(1)
    
    notebook_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None
    
    if not os.path.exists(notebook_path):
        print(f"Error: Notebook file not found: {notebook_path}")
        sys.exit(1)
    
    try:
        result = export_notebook_to_pdf_via_html(notebook_path, output_path)
        if result is None:
            sys.exit(1)
    except Exception as e:
        print(f"Error during export: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
