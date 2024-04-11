let longurl = document.querySelector(".input");

async function short() {
    let value = longurl.value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${value}`);
    const data = await response.text();
    
    longurl.style.border = ""; // Clear the red border if input has a value
    
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("link-container");
    
    const unshortedInput = document.createElement("input");
    unshortedInput.classList.add("unshorted-url");
    unshortedInput.type = "text";
    unshortedInput.value = longurl.value;
    linkContainer.appendChild(unshortedInput);
    
    const shortPart = document.createElement("span");
    shortPart.classList.add("short-part");
    
    const shortLink = document.createElement("a");
    shortLink.classList.add("shorted-url");
    shortLink.href = data;
    shortLink.textContent = data;
    shortPart.appendChild(shortLink);
    
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");
    copyButton.textContent = "Copy";
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(data).then(() => {
            copyButton.textContent = "Copied!";
            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
    
    shortPart.appendChild(copyButton);
    linkContainer.appendChild(shortPart);
    shortcontainer.appendChild(linkContainer);
}


let btn = document.querySelector(".shorter-btn");
let shortcontainer = document.querySelector(".short-links");
let inputBox = document.querySelector(".input-box");

btn.addEventListener('click', () => {
    if (longurl.value.trim() !== "") {
        short();
    }
    else {
        if (!document.querySelector('.error-message')) {
            longurl.style.border = "2px solid red";
            let errorMessage = document.createElement('span');
            console.log(errorMessage)
            // errorMessage.classList.add("error");
            errorMessage.className = 'error';
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Please add a link';
            inputBox.appendChild(errorMessage);
            setTimeout(() => {
                longurl.style.border = "";
                inputBox.removeChild(errorMessage);
            }, 1000);
        }
    }
});


let menubar=document.querySelector(".menu-bar")
menu.addEventListener('click',()=>{
    console.log("hello")
    menubar.classList.toggle('hide')
})