function searchProducts() {
    var keyword = document.getElementById('l').value.toLowerCase(); // Lấy giá trị từ ô input
    var productBoxes = document.getElementsByClassName('product_box'); // Lấy tất cả các box chứa sản phẩm

    // Lặp qua từng box sản phẩm
    for (var i = 0; i < productBoxes.length; i++) {
        var productName = productBoxes[i].getElementsByClassName('pro_title')[0].innerText.toLowerCase(); // Lấy tên sản phẩm

        // Kiểm tra nếu tên sản phẩm chứa keyword
        if (productName.indexOf(keyword) !== -1) {
            productBoxes[i].style.display = 'block'; // Hiển thị sản phẩm
        } else {
            productBoxes[i].style.display = 'none'; // Ẩn sản phẩm không khớp
        }
    }
}