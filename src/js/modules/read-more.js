const readMore = () => {
  const btnReadMore = document.querySelector(".card__content-btn");
  const textOverflow = document.querySelector(".card__text--text-overflow");

  btnReadMore.addEventListener("click", () => {
    if(textOverflow.style.whiteSpace === 'nowrap'){
        textOverflow.style.whiteSpace = 'unset'
    } else {
        textOverflow.style.whiteSpace = 'nowrap'
    }
  });
};

export default readMore;
