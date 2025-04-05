const run = (text) => {
    // BEGIN
    const takeLast = (str, n) => {
        if (str.length < n) return null;
        let result = '';
        for (let i = 0; i < n; i++) {
            result += str[str.length - 1 - i];
        }
        return result;
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;