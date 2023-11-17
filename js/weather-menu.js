// Function to create the main menu
function createMainMenu() {
    const menu = document.getElementById('weather-menu');
    menu.innerHTML = ''; // Clear the menu

    const categories = ['Sun', 'Rain', 'Snow', 'Fog'];
    
    categories.forEach((category, index) => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.classList.add(category.toLowerCase())

        const text = document.createElement('div');
        text.className = 'menu-item-text';
        text.textContent = category;
        item.appendChild(text);

        // Set the transform based on the quadrant
        const position = getPosition(index);
        item.style.transform = `translate(${position.x}%, ${position.y}%)`;

        // Append item to the menu
        menu.appendChild(item);

        // Add click event listener for each item to show subcategories
        item.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from affecting the parent
            console.log(category + ' category was clicked'); // Print the clicked category
            displaySubcategories(category);
        });
    });
}

// Function to display subcategories for a given category
function displaySubcategories(category) {
    const menu = document.getElementById('weather-menu');
    menu.innerHTML = ''; // Clear the menu

    const subcategories = subOptions[category.toLowerCase()];
    subcategories.forEach((subcategory, index) => {
        const subItem = document.createElement('div');
        subItem.className = 'menu-item';
        subItem.setAttribute('data-category', subcategory.toLowerCase()); // Set data attribute for unique styling
        
        const text = document.createElement('div');
        text.className = 'menu-item-text';
        text.textContent = subcategory;
        subItem.appendChild(text);

        // Adjust the positioning based on index
        const position = getPosition(index);
        subItem.style.transform = `translate(${position.x}%, ${position.y}%)`;

        // Append sub-item to the menu
        menu.appendChild(subItem);

        // Add click event listener for each sub-item to return to the main menu
        subItem.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from affecting the parent
            console.log(subcategory + ' subcategory was clicked'); // Print the clicked subcategory
            createMainMenu(); // Return to the main menu
        });
    });
}

// Function to get the position of a menu item based on its index
function getPosition(index) {
    switch(index % 4) {
        case 0: return { x: -100, y: -100 };
        case 1: return { x: 0, y: -100 };
        case 2: return { x: -100, y: 0 };
        case 3: return { x: 0, y: 0 };
        default: return { x: 0, y: 0 };
    }
}

// This is the global object containing subcategory arrays.
const subOptions = {
    sun: ['Sunny', 'Clear', 'Overcast', 'Cloudy'],
    rain: ['Neutral', 'Clearing', 'Rain', 'Thunder'],
    snow: ['Light Snow', 'Snow', 'Blizzard', 'XMas'],
    fog: ['Smog', 'Fog']
};

// Initialize the main menu when the script loads
createMainMenu();
