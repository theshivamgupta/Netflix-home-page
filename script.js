const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

const selectItem = function(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const id = `${this.id}-content`;
    const tableItems = document.querySelector('#' + id);
    tableItems.classList.add('show');
}

const removeBorder = function(e) {
    tabItem.forEach(item => item.classList.remove('tab-border'));
}

const removeShow = function(e) {
    tabContentItem.forEach(item => item.classList.remove('show'));
}

tabItem.forEach(item => item.addEventListener('click', selectItem));
