window.onload = () => {
    const myForm = document.getElementById('sort-type');
    //const valueSet = document.getElementById('user-choice');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        //valueSet.textContent = value;


        // if (value.toLowerCase() === "wait") {
        //     showChoice("Its alright we will wait for you...");
        // } else {
        //     showChoice(value);
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