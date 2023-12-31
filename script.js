"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            // Replace this with actual search logic
            searchResults.innerHTML = `<p>Search results for: <strong>${searchTerm}</strong></p>`;
        } else {
            searchResults.innerHTML = "<p>Please enter a search term.</p>";
        }
    });
});
