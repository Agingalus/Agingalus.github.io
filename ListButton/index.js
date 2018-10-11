window.onload = () => {
    // part 1
    const userInput = document.getElementById('list-data');
    const setTextButton = document.getElementById('set-text');
    const listButton = document.getElementById('add-to-list');  
    
    // part 2
    setTextButton.onclick = () => {
        userInput.value = 'The first item for my list';
        listButton.onclick = () => {
            const myList = document.getElementById('my-list');
            elfCode.appendToList(myList, userInput.value);
        }
            
     }
     
    }
    //part 3
    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
}