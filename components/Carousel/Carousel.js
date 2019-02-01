class Carousel {
    constructor(atr){
        this.btn = atr;
        this.btn.addEventListener('click', () => this.update() );
    }
    update(){
        //console.log('this');
    }
}

let carousel = document.querySelector('.carousel');

let carouselBtn = carousel.querySelectorAll('div');

carouselBtn.forEach( btn => new Carousel(btn));

const carouselImg = [];

Array.from(carousel.querySelectorAll('img')).forEach(img => carouselImg.push([((img.style.display === "flex")? true: false), img]));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/