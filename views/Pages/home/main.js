$(document).ready(function() {
    const carousel = new Carousel();
    carousel.init();
});

class Carousel {
    constructor() {
        this.$carousel = $('.infinit-carousel');
        this.$cards = $('.card');
        this.cardWidth = this.$cards.first().outerWidth();
        this.carouselWidth = this.cardWidth * this.$cards.length;
        this.currentPosition = 0;
    }

    init() {
        this.adjustInputBoxWidth();
        $(window).resize(this.adjustInputBoxWidth.bind(this));
        this.$carousel.width(this.carouselWidth);
        this.updateCarousel();
        this.addEventListeners();
    }

    adjustInputBoxWidth() {
        const carouselWidth = $('.carousel-inner').width();
        $('.input-box, .wrapper').css('max-width', carouselWidth);
    }

    updateCarousel() {
        this.$carousel.css('transform', `translateX(${this.currentPosition}px)`);
        this.updateButtonVisibility();
    }

    updateButtonVisibility() {
        const $prevBtn = $('#left');
        const $nextBtn = $('#right');
        const currentCard = Math.abs(this.currentPosition / this.cardWidth);
        $prevBtn.css('visibility', currentCard === 0 ? 'hidden' : 'visible');
        $nextBtn.css('visibility', currentCard >= this.$cards.length - 4 ? 'hidden' : 'visible');
    }



    addEventListeners() {
        $('#left').click(() => {
            this.currentPosition += this.cardWidth;
            this.updateCarousel();
        });

        $('#right').click(() => {
            this.currentPosition -= this.cardWidth;
            this.updateCarousel();
        });
    }
}
