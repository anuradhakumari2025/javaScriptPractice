let itemContainerElement = document.querySelector(".itemsContainer");

displayItemOnHomePage();

let bagItems = [];

function addToBag(itemId) {
  bagItems.push(itemId);
}

function displayItemOnHomePage() {
  let innerHtml = "";
  items.forEach((item) => {
    //items from items.js
    innerHtml += `
 <div class="itemsContainer">
        <div class="itemsContainer">
          <img class="itemImage" src="${item.image}" alt="item Image" />
          <div class="rating">${item.rating.stars}★ | ${item.rating.count}</div>
          <div class="companyName">${item.company}</div>
          <div class="itemName">${item.item_name}</div>
          <div class="price">
            <span class="currentPrice">Rs ${item.current_price}</span>
            <span class="originalPrice">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% off)</span>
          </div>
          <button class="btnAddBag" onClick="addToBag('${item.id}')">Add To Bag</button>
        </div>
      </div>
`;
  });

  let item = {
    image: "images/1.jpg",
    rating: {
      stars: 4.5,
      count: 1400,
    },
    company: "Carlton London",
    item_name: "Rhodium Plated CZ Floral Studs",
    current_price: "606",
    original_price: "1045",
    discount_percentage: 42,
  };

  itemContainerElement.innerHTML = innerHtml;
}
