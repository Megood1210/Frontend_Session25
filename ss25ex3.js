function checkEven(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    let evenNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumber.push(arr[i]);
        }
    }
    if (evenNumber.length > 0) {
        return evenNumber;
    } else {
        return "Mảng không chứa số chẵn";
    }
}
console.log(checkEven([11, 4, 65, 6]));  
console.log(checkEven([1, 3, 5, 7, 17]));
console.log(checkEven("text"));  


       
