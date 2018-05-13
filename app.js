const body = document.querySelector('body');

createCircle = () => {
    let randColour1 = Math.floor((Math.random() * 255) + 1);
    let randColour2 = Math.floor((Math.random() * 255) + 1);
    let randColour3 = Math.floor((Math.random() * 255) + 1);

    let randSize = Math.floor((Math.random() * 250) + 1);
    let randPos = Math.floor((Math.random() * 100) + 1);
    let randPos2 = Math.floor((Math.random() * 100) + 1);

    let item = document.createElement('div');
    item.className = 'circle';
    item.style.width = `${randSize}px`
    item.style.height = `${randSize}px`
    item.style.background = `rgb(${randColour1}, ${randColour2}, ${randColour3})`;
    item.style.left = `${randPos}%`;
    item.style.top = `${randPos2}vh`;
    body.appendChild(item);
}

window.addEventListener("click", createCircle);

