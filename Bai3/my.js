/*Viết hàm kiểm tra xem 1 chuỗi có nằm trong chuỗi còn lại không. 
Với đầu vào là 2 chuỗi (str1,str2) trong đó sẽ kiểm tra str1 có nằm trong str2 không, 
nếu có trả về true và ngược lại false. (không được dùng hàm có sẵn để tìm)
Khai báo được, bao gồm cả tham số
Dùng thuật toán kiểm tra chuỗi str1 có nằm trong str2 không.
Trả về được kết quả kiểm tra.
Viết mã sạch
*/ 

function check(str1, str2) {
    return str2.includes(str1);
}

let str1 = "world";
let str2 = "hello world";
let result = check(str1, str2);
console.log(result);