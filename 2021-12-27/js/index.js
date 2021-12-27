let content = document.querySelector('.box');
content.onmouseover = function () {
    let child = this.children;
    for (let i = 1; i < child.length; i++) {
        child[i].style.transition = `all 0.5s ${i * 0.1}s`;
        child[i].style.transform = 'translateX(300px)';
    }
}
content.onmouseout = function () {
    let child = this.children;
    for (let i = 1; i < child.length; i++) {
        child[i].style.transform = 'translateX(0px)';
        child[i].style.transition = `all 0.5s ${i * 0.1}s`;
    }
}