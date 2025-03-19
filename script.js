function loadContent(page, containerId) {
    // The function is no longer needed since you're not dynamically loading content.
    // But if you want to keep it for future use, you can leave it as-is.
    var contentContainer = document.getElementById(containerId);

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

function loadNavigation() {
    let navigationPath;

    // Determine the correct path for navigation.html based on the current location
    const currentPath = window.location.pathname;

    if (currentPath.startsWith('/pages/')) {
        navigationPath = '../navigation.html'; // For pages in subfolders
    } else {
        navigationPath = 'navigation.html'; // For pages in the root
    }

    // Load the navigation HTML into the specified container
    loadContent(navigationPath, 'navigation-container');
}

// Initial load when the page is ready
document.addEventListener("DOMContentLoaded", function() {
    loadNavigation(); // Load navigation dynamically
});
