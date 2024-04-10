let longurl = document.querySelector(".input");
// let unshorted = document.querySelector(".unshorted-url");
// let shorted = document.querySelector(".shorted-url");
let btn = document.querySelector(".shorter-btn");
let shortcontainer = document.querySelector(".short-links");
let btn2 = document.querySelector(".copy-button");

async function short() {
    let value = longurl.value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${value}`);
    const data = await response.text(); //.json() is not working
    // console.log(data);
    // unshorted.value=longurl.value
    // shorted.innerHTML=data
    
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("link-container");
    
    
    const unshortedInput = document.createElement("input");
    unshortedInput.classList.add("unshorted-url");
    unshortedInput.type = "text";
    unshortedInput.value = longurl.value;
    linkContainer.appendChild(unshortedInput);
    if(unshortedInput.value=== "" ){
        longurl.style.border=`2px solid red`
        shortcontainer.appendChild('');
        const massege=document.createElement("p")
        massege.innerText=`Please add a link`
        linkContainer.appendChild(massege);
    }
    else{
    
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
    // console.log('hellp')
}
}
btn.addEventListener('click', short);



let menubar=document.querySelector(".menu-bar")
menu.addEventListener('click',()=>{
    console.log("hello")
    menubar.classList.toggle('hide')
})

