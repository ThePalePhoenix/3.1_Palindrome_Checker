//Elias Kinard

//The intial "do" loop that will allow the user to check any number of palindromes until they decide to stop
do {

    //Calls the "checkPalindrome" function and passes in what the user types into the prompt
    checkPalindrome(prompt("Enter a string to see if it is a palindrome."));

    //After "checkPalindrome" finishes, we need to have a way to break the loop
    //This is that way; ask the user if they'd like to continue
    askConfirm = confirm("Would you like to check another string?");

    //This was a check initially used to make sure that "askConfirm" is changed to the right value.
    //console.log(askConfirm);

} while (askConfirm == true);
//The above "while" statement links to "askConfirm", leaving it up to the user to break the loop

//This is the magic function that ensures the entered string is a palindrome
function checkPalindrome(palindrome) {
    //First, we need to take in the value as a string.
    //Then it's split into individual characters, turning it into an array
    //Then that array is reversed
    //And finally it is joined together into a final string
    let pal = palindrome.split('').reverse().join('');

    //A check used to make sure that "pal" was properly manipulated.
    //console.log(pal);

    //The if-else that checks if the string's a palindrome.
    //If checks if the split-reverse-joined array is equal (case insensitive) to the initial string.
    if (pal.toLowerCase() == palindrome.toLowerCase()) {

        //If so, it will tell the user they have a palindrome.
        alert("It's a palindrome!");

    }
    
    else {

        //Otherwise, the statement wouldn't be a palindrome, and this alerts the user of that.
        alert("Not a palindrome!");
        
    }
}