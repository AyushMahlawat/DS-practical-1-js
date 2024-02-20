function reverseArray(arr) {
    return arr.reverse();
}

function displayMenu() {
    console.log("Menu:");
    console.log("1. Reverse the array");
    console.log("2. Exit");
}

function main() {
    let array = [];

    while (true) {
        displayMenu();
        const choice = prompt("Enter your choice: ");

        switch (parseInt(choice)) {
            case 1:
                array = reverseArray(array);
                console.log("Array reversed successfully:", array);
                break;
            case 2:
                console.log("Exiting the program.");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

main();
