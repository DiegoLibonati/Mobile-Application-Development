const btnOpenNav = document.querySelector(".nav_container_logo button");
const btnCloseNav = document.querySelector(".nav_container_nav button");
const containerNav = document.querySelector(".nav_container_nav");
const containerNavOpacity = document.querySelector(".nav_container_nav_opacity");

const openNav = () => {

    containerNav.classList.add("show-nav");
    containerNavOpacity.classList.add("show-bg-opacity");
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";

}

const closeNav = () => {

    containerNav.classList.remove("show-nav");
    containerNavOpacity.classList.remove("show-bg-opacity")
    document.body.style.height = "";
    document.body.style.overflowY = "";
    
}

// Add event listeners
btnOpenNav.addEventListener("click", openNav);
btnCloseNav.addEventListener("click", closeNav);

const imgsContainerSectionGalery = document.querySelectorAll(".galery_container_information img");
const galeryContainerSection = document.querySelector(".galery_container");
const galerySlider = document.querySelector(".galery_slider");
const galerySliderCloseBtn = document.querySelector(".galery_slider_header button");
const galerySliderCount = document.querySelector(".galery_slider_header p");
const galerySliderImgDefault = document.querySelector(".imgGalerySlider"); 
const prevBtnSlider = document.getElementById("prevImg");
const nextBtnSlider = document.getElementById("nextImg");
let arrayImgs = [];

const showGalery = (e) => {

    galeryContainerSection.style.display = "none";
    galerySlider.style.display = "flex";

    for (let i = 0; i < arrayImgs.length; i++){

        if (arrayImgs[i].src === e.currentTarget.src){
            galerySliderImgDefault.setAttribute("src", `${arrayImgs[i].src}`);
            setTimeout(()=>{
                galerySliderImgDefault.classList.add("show-opacityImg");
                galerySliderCount.innerHTML = `${i}/${arrayImgs.length - 1}`;
            }, 100);
        }

    }

}

imgsContainerSectionGalery.forEach(function(imgBtn){

    imgBtn.addEventListener("click", showGalery);
    arrayImgs.push(imgBtn);

});

const closeGalery = () => {

    galeryContainerSection.style.display = "flex";
    galerySlider.style.display = "none";
    galerySliderImgDefault.classList.remove("show-opacityImg");

}

galerySliderCloseBtn.addEventListener("click", closeGalery);

const getIPositionInImgArray = (array, imgDefault) => {

    for (let i = 0; i < array.length; i++){

        if (array[i].src === imgDefault.src){
            return i;
        }

    }

}

const decreaseValueOfIInGalery = (i, array) => {

    if (i <= 0){
        i = array.length - 1;
        galerySliderImgDefault.setAttribute("src", `${array[i].src}`);
        galerySliderCount.innerHTML = `${i}/${array.length - 1}`;
    } else {
        i--
        galerySliderImgDefault.setAttribute("src", `${array[i].src}`);
        galerySliderCount.innerHTML = `${i}/${array.length - 1}`;
    }

}

const increaseValueOfIInGalery = (i, array) => {

    if (i >= array.length - 1){
        i = 0;
        galerySliderImgDefault.setAttribute("src", `${array[i].src}`);
        galerySliderCount.innerHTML = `${i}/${array.length - 1}`;
    } else {
        i++
        galerySliderImgDefault.setAttribute("src", `${array[i].src}`);
        galerySliderCount.innerHTML = `${i}/${array.length - 1}`;
    }

}

const showPrevImg = () => {

    let iPositionInArray = getIPositionInImgArray(arrayImgs, galerySliderImgDefault);

    decreaseValueOfIInGalery(iPositionInArray, arrayImgs);

}

const showNextImg = () => {

    let iPositionInArray = getIPositionInImgArray(arrayImgs, galerySliderImgDefault);

    increaseValueOfIInGalery(iPositionInArray, arrayImgs);

}


prevBtnSlider.addEventListener("click", showPrevImg);
nextBtnSlider.addEventListener("click", showNextImg);


// Review Section
const btnPrevReview = document.getElementById("prevReview");
const btnNextReview = document.getElementById("nextReview");
const allReviews = document.querySelectorAll(".review");
let prevBtnReview = false;
let nextBtnReview = false;

const getIPositioninReviewArray = () =>{

    for(let i = 0; i < allReviews.length; i++){
        if (allReviews[i].classList.contains("review-show")){
            allReviews[i].classList.remove("review-show");

            if (prevBtnReview == true && nextBtnReview == false){

                if (i <= 0){
                    allReviews[i].style.transform = "translateX(-200%)"
                } else {
                    allReviews[i].style.transform = "translateX(200%)"
                }

                prevBtnReview = false;

            }

            if (prevBtnReview == false && nextBtnReview == true){

                if (i >= allReviews.length - 1){
                    allReviews[i].style.transform = "translateX(200%)"
                } else {
                    allReviews[i].style.transform = "translateX(-200%)"
                }

                nextBtnReview = false;

            }

            return i;
        }
    }

}

const increaseValueOfIInReview = (i, array) => {

    if (i >= array.length - 1){
        i = 0
        array[i].classList.add("review-show");
        array[i].style.transform = "translateX(0%)";
    } else {
        i++
        array[i].classList.add("review-show");
        array[i].style.transform = "translateX(0%)";
    }

}

const decreaseValueOfIInReview = (i, array) => {

    if (i <= 0){
        i = array.length - 1
        array[i].classList.add("review-show");
        array[i].style.transform = "translateX(0%)";
    } else {
        i--
        array[i].classList.add("review-show");
        array[i].style.transform = "translateX(0%)";
    }

}

const showPrevReview = () => {

    prevBtnReview = true;
    let iPositionInArray = getIPositioninReviewArray();

    decreaseValueOfIInReview(iPositionInArray, allReviews);

}

btnPrevReview.addEventListener("click", showPrevReview);

const showNextReview = () => {

    nextBtnReview = true;
    let iPositionInArray = getIPositioninReviewArray();

    increaseValueOfIInReview(iPositionInArray, allReviews);

}

btnNextReview.addEventListener("click", showNextReview);


