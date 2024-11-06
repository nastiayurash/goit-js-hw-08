const categoriesList = document.querySelector("#categories");
const itemsList = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${itemsList.length}`);

itemsList.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("ul li").length;
    console.log('Category:', categoryTitle);
  console.log('Elements:', categoryElements);
})

