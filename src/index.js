
exports.min = array => (!array || array.length === 0) ?  0 : Math.min.apply(null, array);
exports.max = array => (!array || array.length === 0) ? 0 : Math.max.apply(null, array);
exports.avg = array => (!array || array.length === 0) ? 0 : array.reduce((sum, item) => (sum + item), 0) / array.length;
