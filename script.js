
// function to handle button events
function selectOption(option){
    if (option === "yes"){
        document.getElementById('question').style.display = 'none';
        var myMessage = document.getElementById("myMessage");
        myMessage.innerText = "dear kyle, i really miss you.  ";
    }
    else if(option === "no"){
        document.getElementById('no-button').innerText = 'u sure bitch???'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    }
    else{
        alert("invalid option!");

    }
}