
window.onload = () => {
    const listButton = document.getElementById('run-for-loop');
    let count = 1;

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        for (let i = 0; i <= 5; i++) {
            console.log("Blast off in ", i);
            elfCode.appendToList(myList, "Blast off in "+ count++);

        }
       
        // END LOOP
    }

}
