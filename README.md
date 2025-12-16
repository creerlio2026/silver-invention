# silver-invention

Creerlio — project workspace for the Creerlio platform.

This repository contains a scaffolded `creerlio-platform/` directory with backend, frontend, infra, and docs to get started.

Project layout (top-level):

creerlio-platform/
├── app/                 # Core backend/frontend code
├── backend/             # Backend source (Python, API, models)
│   ├── main.py
│   ├── ai_service.py
│   ├── models.py
│   ├── pdf_generator.py
│   └── ...
├── frontend/            # Frontend source (React/Vue/Other)
│   └── src/
├── infra/               # Infrastructure as code, deployment scripts
│   ├── azure-deploy.sh
│   ├── azure-deploy-simple.sh
├── docs/                # Documentation
│   ├── MAP_FEATURES_WORKING.md
│   ├── MAP_IMPLEMENTATION_COMPLETE.md
│   ├── MAP_INTELLIGENCE_IMPLEMENTATION.md
│   ├── MAP_SETUP_GUIDE.md
│   ├── AZURE_DEPLOYMENT_SETUP.md
│   ├── AZURE_SECRETS_SETUP.md
│   └── ...
├── requirements.txt     # Python dependencies
├── package.json         # Node.js/Frontend dependencies
└── README.md

---

Next steps: fill in application logic under `backend/` and `frontend/src/`, complete docs in `docs/`, and implement deployment logic in `infra/`.
