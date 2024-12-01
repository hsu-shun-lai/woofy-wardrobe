document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    
    const sizes = [];
    if (document.getElementById('sizeSmall').checked) {
        sizes.push(document.getElementById('sizeSmall').value);
    }
    if (document.getElementById('sizeMedium').checked) {
        sizes.push(document.getElementById('sizeMedium').value);
    }
    if (document.getElementById('sizeLarge').checked) {
        sizes.push(document.getElementById('sizeLarge').value);
    }
    
    const category = document.querySelector('input[name="category"]:checked').value;
    
    const productColor = document.getElementById('productColor').value;
    const productAccessory = document.getElementById('productAccessory').value;
    const productPrice = document.getElementById('productPrice').value;
    
    console.log('Product Name: ' + productName);
    console.log('Description: ' + productDescription);
    console.log('Sizes: ' + sizes.join(', '));
    console.log('Category: ' + category);
    console.log('Color: ' + productColor);
    console.log('Accessory: ' + productAccessory);
    console.log('Price: ₹' + productPrice);
});