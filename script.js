// Get to DOM elements 

const gameContainer = document.querySelector('.container')
let userResult    = document.querySelector(".user_result img")
let cpuResult     = document.querySelector(".cpu_result img")
let result        = document.querySelector('.result')
let optionImages  = document.querySelectorAll(".option_image")

optionImages.forEach((image,index)=> {
    image.addEventListener('click', (e)=>{
        image.classList.add('active')

        // Loop through each option image again 
        optionImages.forEach((image2,index2) => {
            // If the current index doesn't match the clicked index, remove the "active" class from the other option images
           if(index !== index2) {
            image2.classList.remove('active')
           }
         
        })
        
        imageActions(e)

        // Generate a Random Number between 0 and 2 
        let randomNumber = Math.floor(Math.random() *3)
        
        // Create an Array of CPU image options 
        let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"]

        // Set the cpu image to a random option from the array
        cpuResult.src = cpuImages[randomNumber]

        let cpuValue = ["R","P","S"][randomNumber]

        let userValue = ["R","P","S"][index]

        console.log(cpuValue)
        console.log(userValue)
        
        // Create an object with all possible outcomes 
        let outcomes = {
            RR: "Draw",
            RP: "CPU",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "CPU",
            SS: "Draw",
            SR: "Cpu",
            SP: "User"


        }
        // Look up the outcome value based on user and CPU options 
        let outComeValue = outcomes[userValue + cpuValue]

        console.log(outcomes)
        
        // Display Result
        displayResult(outComeValue,userValue,cpuValue)

        
    })
})
function displayResult(outComeValue,userValue,cpuValue) {

    if(userValue === cpuValue) {
        result.textContent = "Match Draw"
    } else {
        result.textContent = `${outComeValue}`
    }

}


 function imageActions(e) {
     // Get the source of the clicked option image 
    let imageSrc = e.target.querySelector("img").src
    // Set the user image to the clicked option image
    userResult.src = imageSrc
 }