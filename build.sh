#!/bin/bash

# Create dist directory
mkdir -p dist

# Copy the main HTML file as index.html
cp test.html dist/index.html

# Copy public directory contents
cp -r public dist/

# Copy any other necessary files
cp *.js dist/ 2>/dev/null || true
cp *.css dist/ 2>/dev/null || true

echo "Build completed successfully!" 