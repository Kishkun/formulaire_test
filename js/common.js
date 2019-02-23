let selectMenuEl = document.querySelectorAll('.select_menu');

function openDropDownMenuClick(e) {
    let dropMenuEl = e.currentTarget.parentNode.querySelector('.drop_down-menu');
    let arrowEl = e.currentTarget.parentNode.querySelector('.select_arrow');
    dropMenuEl.classList.toggle('drop_down-menu-active');
    arrowEl.classList.toggle('select_arrow-active');
    getElementDropMenu(e);
}

function getElementDropMenu(e) {
    let liMenuEl = e.currentTarget.parentNode.querySelectorAll('.drop_down-li');
    liMenuEl.forEach((itemLi) => {
        itemLi.addEventListener('click', changeValueDropMenu);
    })
}

function changeValueDropMenu(e) {
    let currentValue = e.currentTarget.innerHTML;
    let divValueEl = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.select_menu');
    divValueEl.innerHTML = currentValue;
}

selectMenuEl.forEach((item) => {
    item.addEventListener('click', openDropDownMenuClick);
});