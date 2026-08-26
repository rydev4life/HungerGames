import { ELITES, setSession, getSession, db, ref, set, get } from './firebase.js';

// Redirect if already logged in
const session = getSession();
if (session) { window.location.href = 'delegate.html'; }

window.attemptLogin = async function () {
  const eliteId = document.getElementById('loginSelect').value;
  const password = document.getElementById('loginPassword').value.trim();
  const errorEl = document.getElementById('loginError');
  const btn = document.querySelector('.login-btn');

  errorEl.style.display = 'none';

  if (!eliteId) {
    errorEl.textContent = 'Please select your Capitol identity.';
    errorEl.style.display = 'block';
    return;
  }

  const elite = ELITES[eliteId];
  if (!elite) {
    errorEl.textContent = 'Identity not recognized.';
    errorEl.style.display = 'block';
    return;
  }

  if (password !== elite.password) {
    errorEl.textContent = 'Incorrect access code. Contact crisis staff.';
    errorEl.style.display = 'block';
    return;
  }

  btn.textContent = 'Verifying...';
  btn.disabled = true;

  try {
    const sessionSnap = await get(ref(db, `activeSessions/${eliteId}`));
    if (sessionSnap.exists()) {
      const sessionData = sessionSnap.val();
      if (sessionData.ts && (Date.now() - sessionData.ts) < 30 * 60 * 1000) {
        errorEl.innerHTML = `<strong>Sorry, this Elite is already in session!</strong><br>${elite.name} is currently logged in. Contact crisis staff if this is an error.`;
        errorEl.style.display = 'block';
        btn.innerHTML = '<i class="ti ti-key"></i> ENTER THE CAPITOL';
        btn.disabled = false;
        return;
      }
    }

    await set(ref(db, `activeSessions/${eliteId}`), {
      name: elite.name, ts: Date.now(), active: true
    });

    setSession(eliteId);
    window.location.href = 'delegate.html';

  } catch (err) {
    console.warn('Session check failed, proceeding:', err);
    setSession(eliteId);
    window.location.href = 'delegate.html';
  }
};

document.getElementById('loginPassword').addEventListener('keydown', e => {
  if (e.key === 'Enter') window.attemptLogin();
});
