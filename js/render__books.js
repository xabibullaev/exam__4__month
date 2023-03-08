function renderProducts(array) {
  array.slice(0, 20).forEach((items) => {
    const newProduct = elTopTemplate.content.cloneNode(true);

    const elTitle = findElement(".products__name", newProduct);
    const elAuthor = findElement(".products__author", newProduct);
    const elYear = findElement(".products__year", newProduct);
    const elImg = findElement(".products__img", newProduct);

    elImg.src = items.image;
    elTitle.textContent = items.title;
    elAuthor.textContent = items.authors;
    elYear.textContent = items.publishedDate;
    elTopProducts.appendChild(newProduct);
  });
}
