function sum(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || !Number.isInteger(arr[i])) {
            return "dữ liệu không hợp lệ";
        }
        total += arr[i];
    }

    return total;
}
console.log(sum([2, 6]));          
console.log(sum([3, "text"]));     
console.log(sum([7, -7]));         
console.log(sum([4.5, 3]));        
