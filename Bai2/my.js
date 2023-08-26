/*Viết hàm tryRemoveFromArray() nhận vào tham số là một mảng và một số nguyên index, 
trả về mảng ban đầu đã được loại bỏ phần tử tại vị trí index nếu index hợp lệ. Nếu index không hợp lệ, trả về mảng ban đầu. 
(không dùng hàm có sẵn để xóa mảng)
Khai báo được hàm tryRemoveFromArray(), bao gồm cả tham số
Dùng vòng lặp để duyệt được mảng
Trả về mảng đúng yêu cầu
Viết mã sạch
*/

function tryRemoveFromArray(array, index) {
    if (index >= 0 && index < array.length) {
        let newArray = []; //tạo mảng mới để k ảnh hưởng mảng cũ

        for (let i = 0; i < array.length; i++) {
            if (i !== index) {
                newArray.push(array[i]);
            }
        }

        return newArray;
    } else {
        return array;
    }
}

let array = [1, 4, 3, 8, 7];
let indexRemove = 3;
let newArray = tryRemoveFromArray(array, indexRemove);

console.log("Mảng ban đầu:", array);
console.log("Mảng mới sau khi xóa phần tử ở vị trí " + indexRemove + " : " + newArray);
