function factoriel(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factoriel(n - 1);
}

// Exemple
console.log(factoriel(5)); 
