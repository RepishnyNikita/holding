const openListDown = () =>{
    const listSwiftLink = document.querySelector('.footer__mobile-swift');
    const listMediaLink = document.querySelector('.footer__mobile-media');
    const listSwiftBtn = document.querySelector('.footer__mobile-swift__title-btn');
    const listMediaBtn = document.querySelector('.footer__mobile-media__title-btn');

listSwiftBtn.addEventListener('click', () =>{
    listSwiftLink.classList.toggle('footer__mobile-swift--active')
})

listMediaBtn.addEventListener('click', () =>{
    listMediaLink.classList.toggle('footer__mobile-media--active')
})
}

export default openListDown