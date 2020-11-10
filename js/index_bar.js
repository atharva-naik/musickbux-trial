const sidebar = document.querySelector('#nav');
const mainContent = document.querySelector('#main');
document.querySelector('button').onclick = function () {
    // sidebar.classList.toggle('nav_small');
    sidebar.id = "nav_small"; //.replace('nav','nav_small');

}

const title = document.querySelector('#header');
title.onclick = function () {
    sidebar.id = "nav";
}
