// BEGIN
const isPrime = (namber) => {
    if (namber < 2) {
        return false;
    }
    if (namber === 2) {
        return true;
    }
    if (namber % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(namber); i+= 2) {
        if (namber % i === 0) {
            return false;
        } 
    }
    return true;
}

export const sayPrimeOrNot = (nam) => {
    console.log(isPrime(nam) ? 'yes' : 'no');
}

export default sayPrimeOrNot;
// END