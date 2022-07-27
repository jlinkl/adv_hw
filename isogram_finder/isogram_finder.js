const IsogramFinder = function (word) {
    this.word = word.split('')
}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.every((n, i) => this.word.indexOf(n) === i);
};

module.exports = IsogramFinder;
