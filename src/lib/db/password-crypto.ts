const encrypto = require('crypto');

const passwordSecret = process.env.PASSWORD_SECRET;

// This function encrypts the password using the passwordSecret
// it's not possible to decrypt the password, only compare it
export function encryptPassword(password: string) {
  if (!passwordSecret) {
    throw new Error('Password secret not found');
  }
  const hash = encrypto.createHmac('sha256', passwordSecret)
    .update(password)
    .digest('hex');
  return hash;
};

// This function compares the password with the encrypted password
export function comparePassword(rawPassword: string, hashedPassword: string) {
  const passwordHash = encryptPassword(rawPassword);
  return passwordHash === hashedPassword;
};
