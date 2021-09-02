const searchBook = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  if (isNaN(searchText) === false) {
    alert("please enter a book name");
    searchField.value = "";
  } else {
    const url = `http://openlibrary.org/search.json?q=${searchText}
    `;
    // console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data));
    searchField.value = "";
  }
};

// ===========================  display search result  =======================================================

const displaySearchResult = (data) => {
  document.getElementById(
    "result"
  ).innerText = `about ${data.numFound} result for this keyword`;
  // console.log(books);
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  const books = data.docs;
  if (books.length === 0) {
    document.getElementById("result").innerText = "no result found";
  }
  books.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `   
           <div class="card h-100">        
               <img src="https://covers.openlibrary.org/b/id/${
                 book.cover_i
               }-M.jpg" class="card-img-top" alt="...">
               <div class="card-body">
                   <h5 class="card-title">${book.title}</h5>
                    <p class="card-title">Author Name: ${
                      book.author_name ? book.author_name[0] : "not found"
                    }</p>
                   <p class="card-title">publisher: ${
                     book.publisher ? book.publisher[0] : "not found"
                   }</p>
                  <p class="card-title">First Publish Year: ${
                    book.first_publish_year
                      ? book.first_publish_year
                      : "not found"
                  }</p>                  
                  
               </div>
           </div>
           `;
    searchResult.appendChild(div);
  });
};
