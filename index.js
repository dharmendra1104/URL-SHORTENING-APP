let longurl = document.querySelector(".input");
let unshorted = document.querySelector(".unshorted-url");
let shorted = document.querySelector(".shorted-url");
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
    shortPart.appendChild(copyButton);

    linkContainer.appendChild(shortPart);

    shortcontainer.appendChild(linkContainer);

}
btn.addEventListener('click', short);




