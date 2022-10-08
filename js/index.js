// !SLIDER START

$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnFocus: false,
  });
});
// !SLIDER END

// !CREAT STORE CARD FUCNTION

// !STORE ITEM CREATING FUCTION

const creatItem = (cardItem, cardItemParent) => {
  const newCardItem = cardItem
    .map((item) => {
      return `
			<div class="store__item">
				<a class="store__item-img" href="#!">
				<img src=${item.productImg} alt=${item.productName} />
				</a>
				<div class="store__item-info">
					<p class="store__item-info_title">${item.productName}</p>
					<p class="store__item-info_price">${item.productPrice}</p>
				</div>
			</div>
		`;
    })
    .join("");

  cardItemParent.innerHTML = newCardItem;
};

const createStoreCard = () => {
  // !STORE ITEMS
  const newBoard = [
    {
      productImg: "./images/content/guitar1.png",
      productName: "The Essential Les Paul",
      productPrice: "$1,299.00",
    },
    {
      productImg: "./images/content/guitar2.png",
      productName: "J-45 Standard",
      productPrice: "$1,699.00",
    },
    {
      productImg: "./images/content/guitar3.png",
      productName: "Hummingbird Standard",
      productPrice: "$2,099.00",
    },
  ];

  const topSelling = [
    {
      productImg: "./images/content/guitar4.png",
      productName: "Active Precision Bass® PH V",
      productPrice: "$4,199.00",
    },
    {
      productImg: "./images/content/guitar5.png",
      productName: "Redondo Special",
      productPrice: "$2,800.00",
    },
    {
      productImg: "./images/content/guitar6.png",
      productName: "Professional II Stratocaster®",
      productPrice: "$3,199.00",
    },
  ];
  // !STORE ITEMS END

  // !STORE ITEMS CLASSES
  const onTheBoardItems = document.querySelector(".onTheBoard");
  const topSellingItems = document.querySelector(".topSelling");

  creatItem(newBoard, onTheBoardItems);
  creatItem(topSelling, topSellingItems);
  // !STORE ITEM CREATING FUCTION END
};

// !CREAT CATEGORY FUCNTION

const creatCategories = () => {
  const categories = [
    {
      categoryImg: "./images/content/acustic.png",
      categoryName: "Acoustic",
    },
    {
      categoryImg: "./images/content/electronic.png",
      categoryName: "Electric",
    },
    {
      categoryImg: "./images/content/basses.png",
      categoryName: "Basses",
    },
    {
      categoryImg: "./images/content/collections.png",
      categoryName: "Collections",
    },
  ];

  const categoryParent = document.querySelector(".categories__items");

  const category = categories
    .map(({ categoryImg, categoryName }) => {
      return `
			<a href="#!" class="categories__item">
              <img class="categories__item-img" src=${categoryImg} alt=${categoryName}>

              <p class="categories__item-title">${categoryName}</p>
      </a>
		`;
    })
    .join("");

  categoryParent.innerHTML = category;
};

// ! CREATE RYTHM FEATURES
const createRythmItem = () => {
  const rythmFeaturesParent = document.querySelector(".rythm__info-items");

  const rythmFeatures = [
    {
      featuresImg: "./images/icons/browsing-icon.svg",
      featuresName: "Smooth Browsing",
    },
    {
      featuresImg: "./images/icons/delivery-icon.svg",
      featuresName: "EASY Delivery",
    },
    {
      featuresImg: "./images/icons/wallet-icon.svg",
      featuresName: "SWIFT PAYMENTS",
    },
  ];

  const rythmFeaturesItem = rythmFeatures
    .map(({ featuresImg, featuresName }) => {
      return `
      <article class="rythm__info-item">
        <div class="rythm__info-item_img">
          <img src=${featuresImg} alt=${featuresName}>
        </div>
        <div class="rythm__info-item_content">
          <p class="item__content-title">${featuresName}</p>
          <p class="item__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </article>
    `;
    })
    .join("");

  rythmFeaturesParent.innerHTML = rythmFeaturesItem;
};

// !trigger that call all functions
const globalFunctionality = () => {
  // !CATEGORY CREATING FUNCTION
  creatCategories();
  // !STORE ITEM CREATING FUNCTION
  createStoreCard();

  // !RYTHM FEATURES CREATING FUNCTION
  createRythmItem();
};

globalFunctionality();
