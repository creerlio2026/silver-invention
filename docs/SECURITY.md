# Security

This repository includes a GitHub Actions workflow that scans for secrets on pull requests and pushes to `main` using `gitleaks`.

Guidance:
- Never commit production secrets into the repo. Use `.env` locally (which is ignored) and use secrets in your cloud provider or GitHub Secrets.
- If a secret is accidentally exposed, rotate it immediately and remove it from the repository's history.
