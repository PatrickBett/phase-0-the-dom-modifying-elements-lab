// Write your code here!
//To remove <main> node from the DOM
const removeMain = document.querySelector("#main");
removeMain.remove();
//Has a newHeader variable that points to an <h1> node;
const newHeader = document.createElement("h1");
//Declare the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id = "victory";
// the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it
newHeader.innerHTML = "YOUR-NAME is the champion";