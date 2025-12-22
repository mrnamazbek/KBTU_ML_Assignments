#!/bin/bash
# Script to run ML Exam Trainer locally

PORT=3000
DIRECTORY="/Users/namazbekbekzhanov/AntigravityProjects/KBTU_ML/Quiz_and_midterm_tests"

echo "🚀 Starting ML Exam Trainer on http://localhost:$PORT"
cd "$DIRECTORY"
python3 -m http.server $PORT
