const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    const uppers = this.words.map( n => n.toUpperCase());
    return uppers;
}

module.exports = UpperCaser;
