// BEGIN
export const dateConvert = (...arrs) => {
    if (arrs.length === 0) return [];
    let result = [];
    for (let arr of arrs) {
        const date = new Date(...arr);
        result.push(date.toDateString()); 
    }
    return result;
}

export default dateConvert;
// END