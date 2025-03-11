function checkPositive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    if (count > 0) {
        return count;
    } else {
        return "Không có số nguyên dương trong mảng";
    }
}
console.log(checkPositive([4, 5.4, -2, 6]));  
console.log(checkPositive([1, 2, 5, 7, -8, 6]));  
console.log(checkPositive([1.2, -3, -6]));  




