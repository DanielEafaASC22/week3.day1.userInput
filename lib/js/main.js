//Daniel, Sean, Marz


let inputTitle = document.getElementById("title_input");
let inputNoun = document.getElementById("noun");
let inputVerb = document.getElementById("verb");
let inputAdjective = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let mainTitle = document.getElementById("main_title");


inputTitle.onkeyup = function(){

    mainTitle.innerHTML = inputTitle.value;

}


submitButton.onclick = function(event){
    console.log(event);
    event.preventDefault();

    let noun = inputNoun.value;
    let verb = inputVerb.value;
    let adjective = inputAdjective.value;
    let storyResult = document.getElementById("story_result");

    storyResult.innerHTML = "Last night I ate a" + noun + " , and today I just had to " + verb + " . What a" + adjective + " day!";

}






