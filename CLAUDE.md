# AGI Staffers Admin Dashboard - CLAUDE.md

## Deployment Requirements

### MANDATORY RULES FOR DEPLOYMENT:
1. **NO PM2 DEPLOYMENTS** - Use Coolify container orchestration only
2. **COOLIFY IS THE ONLY DEPLOYMENT METHOD** - No exceptions
3. **SSH ACCESS ALLOWED** for debugging container issues only

### Coolify Configuration

#### Port Mappings
- **Web Port**: 3006:3000
- **SSH Port**: 2205:22
- **Health Check**: http://localhost:3000/api/health

#### Environment Variables
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
```

#### Build System
- **Framework**: Next.js 14 with App Router
- **Build Tool**: Next.js standalone output
- **Package Manager**: npm
- **Node Version**: 20-alpine

### Project Structure
```
agistaffers-admin/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── health/       # Health check endpoint
│   ├── components/       # React components
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── public/              # Static assets
├── Dockerfile          # Production Docker configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

### Quick Commands
```bash
# Development
npm run dev

# Build
npm run build

# Production Start
npm start

# Docker Build (for testing)
docker build -t agistaffers-admin .
docker run -p 3000:3000 agistaffers-admin
```

### Deployment Process
1. Push changes to GitHub repository
2. Coolify automatically detects changes
3. Builds Docker image using Dockerfile
4. Deploys to configured domain: admin.agistaffers.com
5. Health check monitors /api/health endpoint

### Troubleshooting
- **502 Bad Gateway**: Check container logs in Coolify
- **Port conflicts**: Ensure ports 3006/2205 are available
- **Build failures**: Verify Next.js standalone output is configured
- **Health check failures**: Verify /api/health returns 200 OK

### NEVER DO:
- Do not use PM2
- Do not deploy outside Coolify
- Do not change port mappings without updating Coolify
- Do not remove health check endpoint