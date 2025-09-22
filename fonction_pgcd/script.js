function pgcd(a, b) {
  if (b === 0) {
    return a;
  }
  return pgcd(b, a % b);
}

// Exemple
console.log(pgcd(48, 18)); 