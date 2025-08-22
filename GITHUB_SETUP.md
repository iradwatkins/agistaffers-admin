# GitHub Repository Setup

## Create the repository on GitHub:

1. Go to https://github.com/agistaffersllc
2. Click "New repository"
3. Name: `agistaffers-admin`
4. Description: "Admin Dashboard for AGI Staffers"
5. Make it Public
6. Click "Create repository"

## Then run these commands:

```bash
cd /Users/irawatkins/agistaffers-admin
git remote add origin https://github.com/agistaffersllc/agistaffers-admin.git
git branch -M main
git push -u origin main
```

## After pushing, in Coolify:

1. Go back to the resource creation dialog
2. Click "Update Repositories" in the GitHub App
3. Select `agistaffersllc/agistaffers-admin`
4. Configure with port mappings: `3003:3000,2203:22`