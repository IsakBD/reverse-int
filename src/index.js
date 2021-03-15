module.exports = function reverse (n) {
        n = n + '';
        let arr = n.split('');
        arr = arr.reverse();
        n = parseInt(arr.join(''));
        return n;
}
