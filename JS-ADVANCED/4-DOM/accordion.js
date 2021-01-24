function toggle() {
    const button = document.querySelector('.button');
    const extra = document.querySelector('#extra');
    button.textContent = button.textContent === 'Less' ? 'More' : 'Less';
    extra.style.display = (extra.style.display === 'none' ||
                            extra.style.display === '') ? 
                            'block' : 'none';
}

// 100/100