import {
  allReviews,
  btnCloseNav,
  btnNextReview,
  btnOpenNav,
  btnPrevReview,
  containerNav,
  containerNavOpacity,
  galeryContainerSection,
  galerySlider,
  galerySliderCloseBtn,
  galerySliderCount,
  galerySliderImgDefault,
  imgsContainerSectionGalery,
  nextBtnSlider,
  prevBtnSlider,
} from "./helpers/elements";
import { mobileState } from "./states/mobileState";

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

// Add event listeners
btnOpenNav.addEventListener("click", openNav);
btnCloseNav.addEventListener("click", closeNav);

// Galery IMGS

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

imgsContainerSectionGalery.forEach(function (imgBtn) {
  imgBtn.addEventListener("click", (e) => showGalery(e));
  mobileState.galery.arrayImgs.push(imgBtn as HTMLImageElement);
});

const closeGalery = (): void => {
  galeryContainerSection.style.display = "flex";
  galerySlider.style.display = "none";
  galerySliderImgDefault.classList.remove("show-opacityImg");
};

galerySliderCloseBtn.addEventListener("click", closeGalery);

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

prevBtnSlider.addEventListener("click", showPrevImg);
nextBtnSlider.addEventListener("click", showNextImg);

// Review Section

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
