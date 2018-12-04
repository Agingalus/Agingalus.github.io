window.onload = () => {
    const myForm1 = document.getElementById('sort-type1');
    const valueSet1 = document.getElementById('user-choice1');

    myForm1.addEventListener('submit', (event) => {
        event.preventDefault();
        const value1 = document.querySelector('input[name="sorter1"]:checked').value;
        //valueSet1.textContent = value1;


        // if (value1.toLowerCase() === "wait") {
        //     showChoice1("Its alright we will wait for you...");
        // } else {
        //     showChoice1(value)1;
        // }
        switch (value1.toLowerCase()) {
            case "rank":
            case "status":
            case "downloads":
            case "category":
            case "language":
                showChoice1(value1);
                break;
            default:
                showChoice1("Its alright we will wait for you...");
                break;

        }


    });

    function enableStylesheet(node) {
        node.rel = 'stylesheet';
    }

    function disableStylesheet(node) {
        node.rel = 'alternate stylesheet';
    }
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

    function showChoice1(value1) {
        const showIt = document.getElementById("user-choice1");
        showIt.textContent = value1;

    }


    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;

        switch (value.toLowerCase()) {
            case "blue":
                setColor("blueBackground");
                showChoice(value);
                break;

            case "green":
                setColor("greenBackground");
                showChoice(value);
                break;

            case "red":
                setColor("redBackground");
                showChoice(value);
                break;

            case "white":
                setColor("whiteBackground");
                showChoice(value);
                break;

            case "pink":
                setColor("pinkBackground");
                showChoice(value);
                break;

            case "brown":
                setColor("brownBackground");
                showChoice(value)
                break;

            default:
                break



        }

    });

    let currentClass = null;

    const setColor = (className) => {
        console.log("SET CLASS TO", className);
        var element = document.getElementById("form-section");
        if (currentClass) {
            element.classList.remove(currentClass);
        }
        currentClass = className;
        element.classList.add(className);
    }

    function showChoice(value) {
        const showIt = document.getElementById("user-choice");
        showIt.textContent = value;
    }
}