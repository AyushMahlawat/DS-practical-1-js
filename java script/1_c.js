const readlineSync = require('readline-sync');

function deleteElement(array, position) {
    if (position < 0 || position >= array.length) {
        console.log("Invalid position");
        return;
    }

    array.splice(position, 1);
    console.log("Element deleted successfully.");
}

function main() {
    let array = [];

    while (true) {
        console.log("\nMenu:");
        console.log("1. Input 1D array");
        console.log("2. Delete an element from specified position");
        console.log("3. Display array");
        console.log("4. Exit");

        const choice = readlineSync.question("Enter your choice: ");

        switch (choice) {
            case '1':
                const arrayString = readlineSync.question("Enter elements separated by space: ");
                array = arrayString.split(' ').map(Number);
                break;
            case '2':
                const position = parseInt(readlineSync.question("Enter position to delete: "));
                deleteElement(array, position);
                break;
            case '3':
                console.log("Array: " + array.join(', '));
                break;
            case '4':
                console.log("Exiting program. Goodbye!");
                process.exit(0);
            default:
                console.log("Invalid choice. Please enter a valid option.");
        }
    }
}

main();
