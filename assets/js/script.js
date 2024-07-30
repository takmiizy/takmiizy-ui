function toggleDrawer(drawerId) {
    const drawerCheckbox = document.querySelector(`[data-drawer-id="${drawerId}"]`);
    if (drawerCheckbox) {
        drawerCheckbox.checked = !drawerCheckbox.checked;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'b') {
        event.preventDefault();
        window.scrollTo(0,0);
        toggleDrawer('my-drawer'); // Adjust this ID if you have multiple drawers
    } else if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        const searchInput = document.querySelector('[data-search-id="search-input"]');
        if (searchInput) {
            searchInput.focus();
        }
    }
});