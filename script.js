// Add JavaScript code for your web site here and call it from index.html.
// dark mode
    // TODO: Query for button with an id "theme-button"
    let themeButton = document.getElementById("theme-button");
    // TODO: Complete the toggleDarkMode function
    const toggleDarkMode = () => {
        // Write your code to manipulate the DOM here
        document.body.classList.toggle("dark-mode");
    }
    // TODO: Register a 'click' event listener for the theme button
        // Set toggleDarkMode as the callback function.
    themeButton.addEventListener("click", toggleDarkMode);



// signatures 
    let signBtn = document.getElementById("sign-now-button");

    const addSignature = (person) => {
        let submission = document.createElement("p")
        const myOuput = document.querySelector(".signatures");
        submission.textContent = "🖊️ "+person.name+' said: "'+person.message+'"';
        myOuput.appendChild(submission);
    }

    const validateForm = () => {
        let containsErrors = false;

        var petitionInputs = document.getElementById("sign-petition").elements;
        let person = {
            name: petitionInputs[0].value,
            message: petitionInputs[1].value
        }
        // TODO: Loop through all inputs
        for(let i = 0; i < petitionInputs.length; i++){
            if(petitionInputs[i].value.length < 2){ // TODO: Validate the value of each input
                containsErrors = true;
                petitionInputs[i].classList.add('error');
            }
            else{
                petitionInputs[i].classList.remove('error');
            }
        }
        // TODO: Call addSignature() and clear fields if no errors
        if(containsErrors == false){
            addSignature(person);
            toggleModal(person);
            for(let i = 0; i< petitionInputs; i++){
                petitionInputs[i].value = "";
                containsErrors = false;
            }
        }
    }

    signBtn.addEventListener('click', validateForm);

// animations
    const animation = {
        revealDistance :150,
        initialOpacity: 0,
        transitionDelay: 0,
        transitionDuration: '2s',
        transitionProperty: 'all',
        transitionTimingFunction: 'ease'
    }

    let revealableContainers = document.querySelectorAll(".revealable");
    let startingContainers = document.querySelectorAll(".start");
    const reveal = () => {
        
        for(let i = 0; i<startingContainers.length;i++){
            startingContainers[i].classList.add("active");
        }
        
        for(let i = 0; i<revealableContainers.length; i++){ //loop through all revealable containers
            let windowHeight = window.innerHeight;
            let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
            if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
                /* add the active class to the revealableContainer's classlist */
                revealableContainers[i].classList.add("active");
            } 
            else {
                /* remove the active class to the revealableContainer's classlist */
                revealableContainers[i].classList.remove("active");
            }
        }
    }
    window.addEventListener('load', reveal);
    window.addEventListener('scroll', reveal);

// modal
    const toggleModal = (person) => {
        let modal = document.getElementById("thanks-modal");
        let modalContent = document.getElementById("thanks-content-modal");
        let intervalId = setInterval(scaleImage,500);
        
        modal.style.display = "flex";
        modalContent.innerText = `Thanks for your feedback ${person.name}!`;
        setTimeout(()=>{
            modal.style.display='none';
            clearInterval(intervalId);
        }, 4000);
    }

let scaleFactor = 1;
modalImage = document.getElementById("modal-img");

const scaleImage = () => {
    scaleFactor = scaleFactor === 1 ? .8 : 1
    modalImage.style.transform = `scale(${scaleFactor})`;
};


