let array = [];

function updateArray() {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array[i] += 5;
        } else {
            array[i] *= 2;
        }
    }
}

function displayArray() {
    console.log("Array: " + array.join(", "));
}

function main() {
    let choice;
    do {
        console.log("\nMenu:");
        console.log("1. Input 1D array");
        console.log("2. Update array");
        console.log("3. Display array");
        console.log("4. Exit");
        
        choice = parseInt(prompt("Enter your choice:"));

        switch (choice) {
            case 1:
                let size = parseInt(prompt("Enter the size of the array:"));
                array = [];
                for (let i = 0; i < size; i++) {
                    array.push(parseInt(prompt("Enter element at index " + i + ":")));
                }
                break;
            case 2:
                updateArray();
                console.log("Array updated.");
                break;
            case 3:
                displayArray();
                break;
            case 4:
                console.log("Exiting the program.");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 4);
}

main();
