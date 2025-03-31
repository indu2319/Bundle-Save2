let selectedPrice = 345;
        
function selectBox(id) {
    document.querySelectorAll('.box').forEach(box => {
        box.classList.remove('selected');
    });
    document.getElementById('box-' + id).classList.add('selected');
    
    document.getElementById('bundle' + id).checked = true;
    
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById('content-' + id).style.display = 'block';
    
    if (id === 1) updateTotal(195);
    else if (id === 2) updateTotal(345);
    else if (id === 3) updateTotal(528);
}

function updateTotal(price) {
    selectedPrice = price;
    document.getElementById('total').innerText = `Total: DKK ${(selectedPrice + 15).toFixed(2)}`;
}

function addToCart() {
    if (selectedPrice === 0) {
        alert("Please select a bundle before adding to cart!");
    } else {
        alert("Item added to cart! Total: DKK " + (selectedPrice + 15).toFixed(2));
    }
}
