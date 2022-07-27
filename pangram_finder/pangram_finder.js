const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  const alphabet = this.alphabet.map((n) => n.toUpperCase())
  const phrase = this.phrase.map((n) => n.toUpperCase())
  return alphabet.every((n) => phrase.includes(n));
}

module.exports = PangramFinder;
