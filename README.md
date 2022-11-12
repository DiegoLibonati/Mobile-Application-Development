# Mobile-Application-Development-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a website about mobile application development, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Javascript
3. HTML5

## Galery

![Dev-mobile](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/devmobile-0.jpg)

![Dev-mobile](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/devmobile-1.jpg)

![Dev-mobile](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/devmobile-2.jpg)

![Dev-mobile](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/devmobile-3.jpg)

![Dev-mobile](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/devmobile-4.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Mobile%20application%20development%20page`

## Video

https://user-images.githubusercontent.com/99032604/199623994-ce002915-6313-4f20-abf1-37ac1f8fb84e.mp4

## Documentation

With these two functions we are going to handle the sidebar to open and close it:

```
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
```

With this function `showGalery()` let's show the photo gallery:

```
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
```

With the `closeGalery()` function we are going to close the gallery:

```
const closeGalery = () => {

    galeryContainerSection.style.display = "flex";
    galerySlider.style.display = "none";
    galerySliderImgDefault.classList.remove("show-opacityImg");

}
```

With the following functions we will be able to manage the images that are shown in the gallery, to go forward and backward:

```
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
```

With the following functions we will be able to manage the reviews that are shown in the review section, to go forward and backward:

```
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

const showNextReview = () => {

    nextBtnReview = true;
    let iPositionInArray = getIPositioninReviewArray();

    increaseValueOfIInReview(iPositionInArray, allReviews);

}
```
