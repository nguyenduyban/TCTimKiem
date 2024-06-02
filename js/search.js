function searchProducts() {
    var keyword = document.getElementById('l').value.toLowerCase(); // Lấy giá trị từ ô input
    var productBoxes = document.getElementsByClassName('product_box'); // Lấy tất cả các box chứa sản phẩm

    // Kiểm tra nếu từ khóa là rỗng
    if (keyword.trim() === '') {
        // Hiển thị thông báo khi không có từ khóa
        alert('Tìm kiếm với từ khóa trống. Vui lòng nhập từ khóa để tìm kiếm sản phẩm.');
        return; // Kết thúc hàm
    }

    // Kiểm tra nếu từ khóa chứa ký tự đặc biệt như '@' hoặc '$'
    if (/[!@#$%^&*(),.?":{}|<>]/.test(keyword)) {
        // Hiển thị thông báo khi từ khóa chứa ký tự đặc biệt
        alert('Tìm kiếm với từ khóa chứa ký tự đặc biệt. Vui lòng nhập từ khóa hợp lệ.');
        return; // Kết thúc hàm
    }

    // Biến đếm số sản phẩm phù hợp
    var matchCount = 0;

    // Lặp qua từng box sản phẩm
    for (var i = 0; i < productBoxes.length; i++) {
        var productName = productBoxes[i].getElementsByClassName('pro_title')[0].innerText.toLowerCase(); // Lấy tên sản phẩm

        // Kiểm tra nếu tên sản phẩm chứa keyword
        if (productName.includes(keyword)) {
            productBoxes[i].style.display = 'block'; // Hiển thị sản phẩm
            matchCount++; // Tăng số sản phẩm phù hợp
        } else {
            productBoxes[i].style.display = 'none'; // Ẩn sản phẩm không khớp
        }
    }

    // Kiểm tra nếu không tìm thấy sản phẩm phù hợp
    if (matchCount === 0) {
        alert('Không tìm thấy sản phẩm nào phù hợp với từ khóa "' + keyword + '".');
    }
}
