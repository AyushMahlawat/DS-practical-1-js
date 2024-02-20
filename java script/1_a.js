let arr = [];

function linearSearch(element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; // Element found, return index
        }
    }
    return -1; // Element not found
}

function displayMenu() {
    console.log("1. Input Array");
    console.log("2. Linear Search");
    console.log("3. Exit");
}

function inputArray() {
    arr = []; // Reset array
    let size = parseInt(prompt("Enter the size of the array:"));
    for (let i = 0; i < size; i++) {
        arr.push(parseInt(prompt(`Enter element at index ${i}:`)));
    }
    console.log("Array has been inputted successfully.");
}

function main() {
    let choice;
    do {
        displayMenu();
        choice = parseInt(prompt("Enter your choice:"));
        switch (choice) {
            case 1:
                inputArray();
                break;
            case 2:
                let searchElement = parseInt(prompt("Enter the element to search:"));
                let result = linearSearch(searchElement);
                if (result !== -1) {
                    console.log(`Element found at index ${result}.`);
                } else {
                    console.log("Element not found in the array.");
                }
                break;
            case 3:
                console.log("Exiting program. Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please enter a valid option.");
        }
    } while (choice !== 3);
}

main();
