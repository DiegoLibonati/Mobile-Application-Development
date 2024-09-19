# Mobile Application Development

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a website about mobile application development, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Typescript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Mobile-Application-Development`](https://www.diegolibonati.com.ar/#/project/Mobile-Application-Development)

## Video

https://user-images.githubusercontent.com/99032604/199623994-ce002915-6313-4f20-abf1-37ac1f8fb84e.mp4

## Documentation

With these two functions we are going to handle the sidebar to open and close it:

```
const openNav = (): void => {
  containerNav.classList.add("show-nav");
  containerNavOpacity.classList.add("show-bg-opacity");
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
};

const closeNav = (): void => {
  containerNav.classList.remove("show-nav");
  containerNavOpacity.classList.remove("show-bg-opacity");
  document.body.style.height = "";
  document.body.style.overflowY = "";
};
```

With this function `showGalery()` let's show the photo gallery:

```
const showGalery = (e: Event): void => {
  const target = e.currentTarget as HTMLImageElement;

  galeryContainerSection.style.display = "none";
  galerySlider.style.display = "flex";
  mobileState.galery.currentImgIndex = mobileState.galery.arrayImgs.findIndex(
    (img) => img.src === target.src
  );
  galerySliderImgDefault.setAttribute(
    "src",
    `${mobileState.galery.arrayImgs[mobileState.galery.currentImgIndex].src}`
  );

  setTimeout(() => {
    galerySliderImgDefault.classList.add("show-opacityImg");
    galerySliderCount.innerHTML = `${mobileState.galery.currentImgIndex}/${
      mobileState.galery.arrayImgs.length - 1
    }`;
  }, 100);
};
```

With the `closeGalery()` function we are going to close the gallery:

```
const closeGalery = (): void => {
  galeryContainerSection.style.display = "flex";
  galerySlider.style.display = "none";
  galerySliderImgDefault.classList.remove("show-opacityImg");
};
```

With the following functions we will be able to manage the images that are shown in the gallery, to go forward and backward:

```
const showPrevImg = (): void => {
  if (mobileState.galery.currentImgIndex <= 0) {
    mobileState.galery.currentImgIndex =
      mobileState.galery.arrayImgs.length - 1;
    galerySliderImgDefault.setAttribute(
      "src",
      `${mobileState.galery.arrayImgs[mobileState.galery.currentImgIndex].src}`
    );
    galerySliderCount.innerHTML = `${mobileState.galery.currentImgIndex}/${
      mobileState.galery.arrayImgs.length - 1
    }`;
  } else {
    mobileState.galery.currentImgIndex--;
    galerySliderImgDefault.setAttribute(
      "src",
      `${mobileState.galery.arrayImgs[mobileState.galery.currentImgIndex].src}`
    );
    galerySliderCount.innerHTML = `${mobileState.galery.currentImgIndex}/${
      mobileState.galery.arrayImgs.length - 1
    }`;
  }
};

const showNextImg = (): void => {
  if (
    mobileState.galery.currentImgIndex >=
    mobileState.galery.arrayImgs.length - 1
  ) {
    mobileState.galery.currentImgIndex = 0;
    galerySliderImgDefault.setAttribute(
      "src",
      `${mobileState.galery.arrayImgs[mobileState.galery.currentImgIndex].src}`
    );
    galerySliderCount.innerHTML = `${mobileState.galery.currentImgIndex}/${
      mobileState.galery.arrayImgs.length - 1
    }`;
  } else {
    mobileState.galery.currentImgIndex++;
    galerySliderImgDefault.setAttribute(
      "src",
      `${mobileState.galery.arrayImgs[mobileState.galery.currentImgIndex].src}`
    );
    galerySliderCount.innerHTML = `${mobileState.galery.currentImgIndex}/${
      mobileState.galery.arrayImgs.length - 1
    }`;
  }
};
```

With the following functions we will be able to manage the reviews that are shown in the review section, to go forward and backward:

```
const showPrevReview = (): void => {
  const actualReview = allReviews[
    mobileState.reviews.currentReviewIndex
  ] as HTMLElement;
  actualReview.classList.remove("review-show");
  actualReview.style.transform =
    mobileState.reviews.currentReviewIndex <= 0
      ? "translateX(-200%)"
      : "translateX(200%)";

  mobileState.reviews.currentReviewIndex <= 0
    ? (mobileState.reviews.currentReviewIndex = allReviews.length - 1)
    : mobileState.reviews.currentReviewIndex--;

  const review = allReviews[
    mobileState.reviews.currentReviewIndex
  ] as HTMLElement;

  review.classList.add("review-show");
  review.style.transform = "translateX(0%)";
};

btnPrevReview.addEventListener("click", showPrevReview);

const showNextReview = (): void => {
  const actualReview = allReviews[
    mobileState.reviews.currentReviewIndex
  ] as HTMLElement;
  actualReview.classList.remove("review-show");
  actualReview.style.transform =
    mobileState.reviews.currentReviewIndex >= allReviews.length - 1
      ? "translateX(200%)"
      : "translateX(-200%)";

  mobileState.reviews.currentReviewIndex >= allReviews.length - 1
    ? (mobileState.reviews.currentReviewIndex = 0)
    : mobileState.reviews.currentReviewIndex++;

  const review = allReviews[
    mobileState.reviews.currentReviewIndex
  ] as HTMLElement;

  review.classList.add("review-show");
  review.style.transform = "translateX(0%)";
};

btnNextReview.addEventListener("click", showNextReview);
```
