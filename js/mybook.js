const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  searchText.value = "";
  const url = ` http://openlibrary.org/search.json?q=${searchText}
  `;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.docs));
};
// searchFood();

// ===========================  from data get meals now display korbo  ==========================================================================

const displaySearchResult = (books) => {
  // console.log(books);
  const searchResult = document.getElementById("search-result");
  books.forEach((book) => {
    // console.log(book);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
           <div class="card h-100">
               <img src="https://covers.openlibrary.org/b/id/${
                 book.cover_i
               }-M.jpg" class="card-img-top" alt="...">
               <div class="card-body">
                   <h5 class="card-title">${"Name= " + book.title}</h5>
                    <p class="card-title">${
                      "Author Name= " + book.author_name[0]
                    }</p>
                   <p class="card-title">${
                     "publisher= " + book.publisher[0]
                   }</p>
                  <p class="card-title">${
                    "date= " + book.publish_date[0]
                  }</p>                  
                  
               </div>
           </div>
           `;
    searchResult.appendChild(div);
  });
};
