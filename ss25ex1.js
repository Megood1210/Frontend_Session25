function findMinValue(arr) {
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ"; // Kiểm tra nếu không phải là mảng
    }
    if (arr.length === 0) {
        return "Mảng không chứa phần tử"; // Kiểm tra mảng rỗng
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return `Phần tử nhỏ nhất trong mảng là ${min}`;
}
console.log(findMinValue([2, 4, 8, 1, 9])); 
console.log(findMinValue([]));
console.log(findMinValue("abc")); 
console.log(findMinValue([5, 2, 7, 5, 4])); 
