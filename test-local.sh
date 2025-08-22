#!/bin/bash

echo "Testing AGI Staffers Admin locally..."

# Build the app
echo "Building Next.js app..."
npm run build

# Start the app
echo "Starting Next.js app on port 3000..."
npm start &
APP_PID=$!

# Wait for app to start
echo "Waiting for app to start..."
sleep 5

# Test the app
echo "Testing health endpoint..."
curl -f http://localhost:3000/api/health || echo "Health check failed"

echo "Testing main page..."
curl -f http://localhost:3000 || echo "Main page failed"

# Kill the app
kill $APP_PID

echo "Test complete"