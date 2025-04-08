const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) return 1;

    const iter = (divisible, divider) => {
        if (divisible === divider || divisible % divider === 0) {
            return divider;
        }
        return iter(divisible, divider + 1);
    }

    return iter(num, 2);
    // END
  };
  
export default smallestDivisor;
  