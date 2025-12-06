# Configuration file for jupyter-nbconvert.

c = get_config()  # noqa

# PDF Exporter configuration
c.PDFExporter.latex_count = 2
c.PDFExporter.latex_command = ['xelatex', '{filename}']

# Custom LaTeX preamble for proper margins
c.LatexPreprocessor.preamble = r'''
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
