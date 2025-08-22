#!/bin/bash

echo "Pushing to GitHub..."
echo "Make sure you've created the repository at:"
echo "https://github.com/agistaffersllc/agistaffers-admin"
echo ""
echo "If you get authentication errors, you may need to:"
echo "1. Use a Personal Access Token instead of password"
echo "2. Or use GitHub Desktop to push"
echo ""

# Try to push
git remote set-url origin https://github.com/agistaffersllc/agistaffers-admin.git
git push -u origin main

echo ""
echo "If this failed, you can also:"
echo "1. Open GitHub Desktop"
echo "2. Add this repository: /Users/irawatkins/agistaffers-admin"
echo "3. Push through GitHub Desktop"