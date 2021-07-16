function acceptance() {
    const warehouse = document.getElementById('warehouse');
    const company = document.querySelector('input[name="shippingCompany"]');
    const product = document.querySelector('input[name="productName"]');
    const quantity = document.querySelector('input[name="productQuantity"]');
    const scrape = document.querySelector('input[name="productScrape"]');
    const button = document.querySelector('#acceptance');
    
    button.addEventListener('click', addNewProduct);
    
    function addNewProduct() {
        if (company.value && product.value && Number(quantity.value) && Number(scrape.value)) {
            let finalQuantity = Number(quantity.value) - Number(scrape.value);
            
            if (finalQuantity <= 0) {
                return;
            }
            
            const div = document.createElement('div');
            
            const p = document.createElement('p');
            p.textContent = `[${company.value}] ${product.value} - ${finalQuantity} pieces`;
            
            const btn = document.createElement('button');            
            btn.textContent = 'Out of stock';            
            btn.addEventListener('click', () => div.remove());
            
            div.appendChild(p);
            div.appendChild(btn);
            
            warehouse.appendChild(div);
        }
        
        company.value = '';
        product.value = ''; 
        quantity.value = '';
        scrape.value = '';
    }
}