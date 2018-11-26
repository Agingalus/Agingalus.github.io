window.onload = () => {
    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        // if (value.toLowerCase() === 'language') {
        //     showChoice(value);
        // } else if (value.toLowerCase() === "rank") {
        //     showChoice(value)

        // } else if (value.toLowerCase() === "status") {
        //     showChoice(value)

        // } else if (value.toLowerCase() === "category") {
        //     showChoice(value)

        // } else if (value.toLowerCase() === "downloads") {
        //     showChoice(value)

        // } else {
        //     showChoice("Its alright we will wait for you...");
        // }
        switch (value.toLowerCase()) {
            case "rank":
            case "status":
            case "downloads":
            case "category":
            case "language":
                showChoice(value);
                break;
            default:
                showChoice("Its alright we will wait for you...");
                break;

        }
    });

}

function showChoice(value) {
    const showIt = document.getElementById("user-choice");
    showIt.textContent = value;

}