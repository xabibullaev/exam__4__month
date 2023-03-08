"use strict";
let elTemplate = document.querySelector("#template").content;
let elSearchForm = document.querySelector("header__form");
let elSearchInput = document.querySelector("#search");
let elBooksList = document.querySelector("products__list");
let errorTemplate = document.querySelector("#errorTemplate").content;
let spinner = document.querySelector(".spinner");

//  PAGINATION
let elPagItem = document.querySelector(".pagination__page-rs");
let pageButtons = document.querySelectorAll(".pagination__btns-pg");
let page = 1;

// BOOKS ARRAY
let bookArr = [];

// RENDER BOOKS
let renderBooks = (books) => {
  elBooksList.innerHTML = null;
  let elTemplateFragment = document.createDocumentFragment();
  books.forEach((volumeInfo) => {
    let newTemplate = elTemplate.cloneNode(true);
    let templateItemClone = newTemplate.querySelector(".products__item");

    templateItemClone.querySelector(".products__img").src = volumeInfo.image;
    templateItemClone.querySelector(".products__name").textContent =
      volumeInfo.title;
    templateItemClone.querySelector(".products__author").textContent =
      volumeInfo.authors;
    templateItemClone.querySelector(".products__year").textContent =
      volumeInfo.publishedDate;
    elTemplateFragment.append(templateItemClone);
  });
  elBooksList.append(elTemplateFragment);
};

// ERROR FUNCTION
let errorFunction = (err) => {
  elBooksList.innerHTML = null;
  let elFragmentError = document.createDocumentFragment();
  let errorMovie = errorTemplate.cloneNode(true);
  errorMovie.querySelector(".js-errot-text").textContent = err;
  elFragmentError.append(errorMovie);
  elBooksList.appendChild(elFragmentError);
};

// FETCH SEARCHING MOVIES || SPINNER
const searchBooks = async (books = "") => {
  try {
    const responce = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${books}search+terms`
    );

    let data = await responce.json();
    bookArr = data.Search;

    renderBooks(data.Search);
  } catch (err) {
    errorFunction("Kiritgan kitobingiz topilmadi");
  } finally {
    spinner.classList.add("d-none");
  }
};
let searchValue = "Hulk";
let selectValue = "movie";
searchMovies(booksData, searchValue, selectValue, page);
renderBooks(data, elBooksList);
