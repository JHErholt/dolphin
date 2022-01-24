function test() {
    // Find elements
    let headerBackground = document.querySelector('#header--background')
    let clouds = document.querySelector('#clouds');
    let birds = document.querySelector('#birds');
    
    let footerBackground = document.querySelector('#footer--background');
    let wave1 = document.querySelector('#wave1');
    let wave2 = document.querySelector('#wave2');
    
    
    let headerStars = document.querySelector('#header__star-container');
    let footerStars = document.querySelector('#footer__star-container');
    
    clouds.classList.toggle('hide');
    birds.classList.toggle('hide');
    
    wave1.classList.toggle('wave-night');
    wave2.classList.toggle('wave-night');
    
    headerBackground.classList.toggle('sky')
    footerBackground.classList.toggle('sky-light');

    headerStars.classList.toggle('hide');
    footerStars.classList.toggle('hide');


}