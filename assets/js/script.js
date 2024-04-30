let title = document.getElementsByClassName('alt-title');
let titleStorage;

title[0].addEventListener('mouseover', () => {
    titleStorage = title[0].textContent;
    title[0].innerText = "home";
    title[0].style.fontStyle = "italic";
});

title[0].addEventListener('mouseout', () => {
    title[0].innerText = titleStorage;
    title[0].style.fontStyle = "normal";
});

title[0].addEventListener('click', () => {
    window.location = "index.html";
});