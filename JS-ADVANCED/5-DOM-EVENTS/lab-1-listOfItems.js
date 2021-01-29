function addItem() {
    const text = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');
    liElement.textContent = text;
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
}