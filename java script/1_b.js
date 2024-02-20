let array = [];

function displayMenu() {
    console.log("1. Insert an element at specified position");
    console.log("2. Display the array");
    console.log("3. Exit");
}

function insertElement() {
    let element = parseInt(prompt("Enter the element to insert: "));
    let position = parseInt(prompt("Enter the position to insert the element: "));

    if (position < 0 || position > array.length) {
        console.log("Invalid position. Element not inserted.");
    } else {
        array.splice(position, 0, element);
        console.log("Element inserted successfully.");
    }
}

function displayArray() {
    console.log("Array: " + array.join(", "));
}

let choice;
do {
    displayMenu();
    choice = parseInt(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            insertElement();
            break;
        case 2:
            displayArray();
            break;
        case 3:
            console.log("Exiting the program.");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
} while (choice !== 3);
