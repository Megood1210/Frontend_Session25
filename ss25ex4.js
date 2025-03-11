function checkPrime(a) {
    if (!Array.isArray(a)) {
        return "dữ liệu không hợp lệ";
    }
    if (a < 2) {
        return "không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return "không phải là số nguyên tố";
        }
    }
    return "là số nguyên tố";
}
console.log(checkPrime([13]));  
console.log(checkPrime([6]));  
console.log(checkPrime("text"));  
