function loadContent(page) {
    var contentContainer = document.getElementById('content-container');

    // Use fetch to load the content of the specified page
    fetch(page)
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Initial load (you can change this to load a default page)
loadContent('navigation.html');
