/*Cho danh sách các điểm thi ở trong một mảng
Hãy viết hàm tìm được điểm thi cao thứ 3 với đầu vào là một mảng điểm. (không dùng hàm có sẵn để sắp xếp).*/

function findMax(arr) {
    let max1 = arr[0];
    let max2 = -Infinity;
    let max3 = -Infinity;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max3 = max2;
            max2 = arr[i];
        } else if (arr[i] > max3) {
            max3 = arr[i];
        }
    }
    
    return max3;
}

let arr = [7, 5, 6, 10];
let x = findMax(arr);
console.log('Gía trị lớn thứ 3 là: ' + x);