# Test Credentials
# Agent writes here when creating/modifying auth credentials (admin accounts, test users).
# Testing agent reads this before auth tests. Fork/continuation agents read on startup.

## Auth method
Emergent-managed Google OAuth (no app-managed passwords). Sign-in button in navbar redirects to
https://auth.emergentagent.com and returns with #session_id, exchanged via POST /api/auth/session.
Sessions live in `user_sessions` collection (7-day httpOnly cookie `session_token`).

## Test identities
- Any Google account can sign in (no domain allowlist configured).
- For automated tests: seed a user + session via mongosh per /app/auth_testing.md, then call
  GET /api/auth/me with header `Authorization: Bearer <session_token>` or set the `session_token`
  cookie in the browser. Do NOT store Google passwords here.
- Test data seeded during verification was cleaned up (test.user.* emails removed).
