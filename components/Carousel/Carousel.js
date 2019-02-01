class CarouselBtn {
    constructor(atr){
        this.btn = atr;
        this.btn.addEventListener('click', () => this.update() );
    }
    update(){
        
        //console.log(current);
        //console.log('this');
    }
}

class Carousel {
    constructor(atr){
        this.carouselImg = atr;
        this.current = atr.style.display;
        console.log('this');
    }
}

let carouselSelect = document.querySelector('.carousel');

let carouselImg =  carouselSelect.querySelectorAll('img');

let carousel = new Carousel(carouselImg);

let carouselBtn = carouselSelect.querySelectorAll('div');

carouselBtn.forEach( btn => new CarouselBtn(btn));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/