function checkSymmetry(arr) {
        let reversed ="";
        for (let i= arr.length - 1; i >= 0; i--){
            reversed += arr[i];
        }   
        if(reversed === arr){
            return "Là chuỗi đối xứng";
        }else{
            return "Không phải chuỗi đối xứng";
        }
    }
console.log(checkSymmetry("hello"));  
console.log(checkSymmetry("aloola"));  
console.log(checkSymmetry("12345"));  

