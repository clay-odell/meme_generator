const userURL = document.getElementById('imageURL');//retrieves the image URL by id
const topText = document.getElementById('topText');//retrieves the top text by id
const bottomText = document.getElementById('bottomText');//retrieves the bottom text by id
const generateButton = document.getElementById('memeGenerate');//retrieves the generate meme button by id to make an event listener.
const newMemeDiv = document.getElementById('newMeme');//retrieves the new meme div element by id.
const form = document.getElementById('form'); //retrieves the form element by id.
  
generateButton.addEventListener('click', function(event) 
{
    event.preventDefault();//prevents the page from refreshing.
    const valid = form.reportValidity();//checks if the form is valid.
        if(!valid){
            e.preventDefault();//prevents the form from refreshing all of the required fields are filled out.
        }
    const newDiv = document.createElement('div');//creates a new div element.
    newDiv.className ='meme';//sets the class name to meme.
    newMemeDiv.appendChild(newDiv);//adds the new div element to the new meme div element.
    const newImg = document.createElement('img');//creates a new image element.
    newImg.src = userURL.value;//sets the image URL to the user input value.
    userURL.value = '';//clears the user input value.
    const newTopText = document.createElement('p')//creates a new text element.
    newTopText.classList.add('topText');//adds the class name to topText.
    newTopText.innerText = topText.value.toUpperCase();//sets the top text to the user input value and makes it uppercase.
    topText.value = '';//clears the user input value.
    const newBottomText = document.createElement('p')//creates a new text element.
    newBottomText.classList.add('bottomText');//adds the class name to bottomText.
    newBottomText.innerText = bottomText.value.toUpperCase();//sets the bottom text to the user input value and makes it uppercase.
    bottomText.value = '';//clears the user input value.
    const removeButton = document.createElement('button');//creates a new remove button element.
    removeButton.classList.add('removeButton');//adds the class name to removeButton.
    removeButton.innerText = 'REMOVE MEME';//sets the remove button text to 'Remove Meme'.
    newDiv.appendChild(newTopText);//adds the new text element to the new div element.
    newDiv.appendChild(newImg);//adds the new image element to the new div element.
    newDiv.appendChild(newBottomText);//adds the new text element to the new div element.
    newDiv.appendChild(removeButton);//adds the new button element to the new div element.
    removeButton.addEventListener('click', function(event) 
    {
        event.preventDefault();//prevents the page from refreshing.
        newDiv.remove();//removes the new div element.
    });
});
