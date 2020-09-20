
		function validate()
		{
			//lấy giá trị
			var hoten = document.getElementById('hoten').value;
			var socancuoc = document.getElementById('socancuoc').value;
			var ngaydat = document.getElementById('ngaydat').value;
			var ngaytra = document.getElementById('ngaytra').value;

			//kiểm tra các giá trị
			if (hoten == "") {
				alert ("Họ tên không được bỏ trống!");
				return false;
			}
			if (socancuoc == "") {
				alert ("Số căn cước không được bỏ trống!");
				return false;
			}
			if (ngaydat <= ngaytra) {
				alert ("Ngày trả phải sau ngày nhập!");
			return false;
			}
		//	var tienphong = (ngaytra - ngaydat)*1300000;
			return true;
		}
