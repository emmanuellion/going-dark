window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach(el => {
        el.style.transform = 'translateY(0)';
    });
    document.querySelector('#p').style.transform = 'translateY(0)';
    document.querySelector('#p').style.color = "white";
});

document.querySelectorAll('.card').forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.dataset)
        switch(el.dataset.section){
            case 'serpent':
                window.location.href = 'plu.html';
                break;
            case 'schefflera':
                window.location.href = 'pld.html';
                break;
            case 'elephant':
                window.location.href = 'plt.html';
                break;
            default:
                break;
        }
    });
})
document.querySelector('#home').addEventListener('click', () => {
    window.location.href = 'index.html';
});