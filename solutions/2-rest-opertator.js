import _ from 'lodash';

// BEGIN
export const arithmeticMean = (...numbers) => {
    if (numbers.length === 0) return null;
    let sum = _.sum(numbers);
    let result = sum / numbers.length;
    return result;
}

export default arithmeticMean;
// END