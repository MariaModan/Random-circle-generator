const colors= ['red', 'pink', 'green', 'blue'];

class Circle {
    constructor(){
        this.size = `${((Math.random()*100) + 50).toFixed()}px`;
        this.color = colors[Math.floor(Math.random()* colors.length)];
        this.x = `${Math.random()*1000}px`;
        this.y = `${Math.random()*1000}px`;
    }
}

let btn = document.getElementById('btn');
let rst = document.getElementById('rst');
let container = document.getElementById('container');

function addCircles(){
    let nb = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';

    if (nb < 1 || nb > 999){
        alert("You must enter a number between 1 and 999");
        return 1;
    }
    

    while(nb >= 1){
        let circle = new Circle();
        let newDiv = document.createElement('div');
        newDiv.classList.add('circle');
        newDiv.style.backgroundColor = circle.color;
        newDiv.style.width = circle.size;
        newDiv.style.height = circle.size;
        newDiv.style.left = circle.x;
        newDiv.style.top = circle.y;
        console.log(circle.x, circle.y);
        container.appendChild(newDiv);
        nb --;

    }    
}

btn.addEventListener('click', addCircles);

window.addEventListener('keydown',function(ev){
    if (ev.keyCode === 13){
        ev.preventDefault();
        addCircles();
    }
})

rst.addEventListener('click', function(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
})