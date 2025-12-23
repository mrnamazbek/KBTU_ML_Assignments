#!/bin/bash

# Navigate to the quiz folder where index.html and app.js reside
# shellcheck disable=SC2164
cd Quiz_and_midterm_tests

echo "🚀 Starting ML Coach Hub on http://localhost:3000"
# Run the server from within that directory
python3 -m http.server 3000