#!/usr/bin/env node
// Encrypt your private admin notes into a blob safe to commit.
//
// Usage:
//   ADMIN_PASSWORD="yourpassword" npm run encrypt-admin
//
// Reads:   admin-src/data.md   (gitignored — never committed)
// Writes:  public/admin/data.enc   (encrypted, committed)
//
// Crypto: AES-256-GCM with a PBKDF2-SHA256 derived key (250k iterations).
// The password never leaves this script; it must be re-supplied to decrypt
// in the browser at /admin/.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { webcrypto } from 'node:crypto';

const SRC = 'admin-src/data.md';
const OUT_DIR = 'public/admin';
const OUT = `${OUT_DIR}/data.enc`;
const ITER = 250_000;

const password = process.env.ADMIN_PASSWORD;
if (!password) {
  console.error('error: set ADMIN_PASSWORD environment variable.');
  console.error('  example: ADMIN_PASSWORD="yourpassword" npm run encrypt-admin');
  process.exit(1);
}
if (!existsSync(SRC)) {
  console.error(`error: source not found: ${SRC}`);
  console.error('  create the file with your notes, then re-run.');
  process.exit(1);
}

const plaintext = readFileSync(SRC, 'utf8');
const enc = new TextEncoder();
const salt = webcrypto.getRandomValues(new Uint8Array(16));
const iv = webcrypto.getRandomValues(new Uint8Array(12));
const baseKey = await webcrypto.subtle.importKey(
  'raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveKey'],
);
const key = await webcrypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' },
  baseKey,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt'],
);
const ct = await webcrypto.subtle.encrypt(
  { name: 'AES-GCM', iv }, key, enc.encode(plaintext),
);

const b64 = (u8) => Buffer.from(u8).toString('base64');
const out = {
  v: 1,
  iter: ITER,
  salt: b64(salt),
  iv: b64(iv),
  ct: b64(new Uint8Array(ct)),
};

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT, JSON.stringify(out));
console.log(`encrypted ${plaintext.length} bytes → ${OUT}`);
console.log('commit & push to deploy:');
console.log(`  git add ${OUT} && git commit -m "Update admin" && git push`);
