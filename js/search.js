function searchProducts() {
    var keyword = document.getElementById('l').value.toLowerCase(); 
    var productBoxes = document.getElementsByClassName('product_box');

  
    if (keyword.trim() === '') {
       
        alert('Tìm kiếm với từ khóa trống. Vui lòng nhập từ khóa để tìm kiếm sản phẩm.');
        return; 
    }
 // if (/[!@#$%^&*(),.?":{}|<>]/.test(keyword))
    if (/[!@#$%^&*(),.?":{}|<>]/.test(keyword)) {
        alert('Tìm kiếm với từ khóa chứa ký tự đặc biệt. Vui lòng nhập từ khóa hợp lệ.');
        return; 
    }

    var matchCount = 0;

    for (var i = 0; i < productBoxes.length; i++) {
        var productName = productBoxes[i].getElementsByClassName('pro_title')[0].innerText.toLowerCase(); 

        if (productName.includes(keyword)) {
            productBoxes[i].style.display = 'block';
            matchCount++; // Tăng số sản phẩm phù hợp
        } else {
            productBoxes[i].style.display = 'none'; 
        }
    }

    if (matchCount === 0) {
        alert('Không tìm thấy sản phẩm nào phù hợp với từ khóa "' + keyword + '".');
    }
}
