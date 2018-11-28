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
    const appearanceButton = document.getElementById('appearanceAction');
    const defaults = document.getElementById('default');
    const basic = document.getElementById('basic');
    appearanceButton.onclick = () => {


        disableStylesheet(defaults);
        enableStylesheet(basic);


    }
    const appearanceButton2 = document.getElementById('appearanceAction2');

    appearanceButton2.onclick = () => {
        disableStylesheet(basic);
        enableStylesheet(defaults);
    }

    function showChoice(value) {
        const showIt = document.getElementById("user-choice");
        showIt.textContent = value;

    }


    function enableStylesheet(node) {
        node.rel = 'stylesheet';
    }

    function disableStylesheet(node) {
        node.rel = 'alternate stylesheet';
    }

}