// thid is module pattern
// also called an IIFE
// an Immediately Invoked Function Expression

(() => {
    // this is a JavaScript comment
    console.log('fired1 javascript is working!');
    
    // Step 1: go and find the elements on the page that you want the user to interact with

    // querySelector take a CSS selector and uses that to find a match in the HTML file

    // let theBadge = document.querySelector('#png'),
    //     theVector =document.querySelector('#vector');

    // querySelectorALL finds ALL elements that match the selector
    // and returns back an array-like object called a node list
    let theBadge = document.querySelectorAll('img');

    function logMyId() {
        debugger; // pauses code execution at this line

        //log the element's ID to the console window
        console.log(this.id);
        // 'this' refers to the element that you're interacting with at the moment
    }

    // figure out how you want the user to interact with the badhge graphic - a click, mouseover, mouseout, double click etc
    // theBadge.addEventListener('click', logMyId);
    // theVector.addEventListener('click', logMyId);

    //for each badge in  our collection. add an event hamdler
    // arrow function are just shorthand function declarations
    theBadge.forEach(badge => badge.addEventListener('click', logMyId));
} )();