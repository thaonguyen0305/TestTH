/*Hãy viết một chương trình để biểu diễn hình chữ nhật, với mô tả của lớp hình chữ nhật như sau:
Rectangle: Tên lớp
-	x: Toạ độ x
-	y: Toạ độ y
-	width: Chiều rộng
-	height: Chiều cao
-	color: Màu sắc (sử dụng mã màu hex)
+	render(canvas): Hiển thị hình chữ nhật trên một canvas
Hãy thực hiện các thao tác theo kịch bản sau:
- Tạo một hình chữ nhật có tọa độ 10,10 và kích thước rộng 200, cao 100, màu #000000
- Hiển thị hình chữ nhật trên một canvas bằng cách sử dụng phương thức render
Khai báo được lớp Rectangle
Khai báo được phương thức render của lớp Rectangle
Tạo được hình chữ nhật theo yêu cầu
Sử dụng được phương thức render để hiển thị hình chữ nhật
Viết mã sạch

*/ 
class Rectangle {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.canvas = document.getElementById('myCanvas');
      this.ctx = this.canvas.getContext('2d');
    }

    render() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  let rectangle = new Rectangle(10, 10, 200, 100, "#000000");
  rectangle.render();