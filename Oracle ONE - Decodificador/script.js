

function crip(text) {

    cripted = text.replaceAll("e", "enter")
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat')

    return cripted
}

document.getElementById("cript").addEventListener("click", function () {
    let text = document.getElementsByClassName("input-text")[0].value

    let cripted = crip(text)
    // console.log(cripted)
    let input = document.getElementsByClassName("input-text");

    let img = document.getElementById("img")
    img = img.hidden = true

    let secondText = document.getElementsByClassName("text-response-second")

    secondText[0].hidden = true

    document.getElementById("text-response").innerHTML = cripted
    
    let copyButton = document.getElementsByClassName("copy");
    
    copyButton[0].hidden = false;


    input[0].value = cripted



})


function descript(text) {

        descripted = text.replaceAll("enter", "e")
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u')
    
        return descripted
}

document.getElementById("descript").addEventListener("click", function () {
    let text = document.getElementsByClassName("input-text")[0].value

    let img = document.getElementById("img")
    img = img.hidden = true

    let secondText = document.getElementsByClassName("text-response-second")

    secondText[0].hidden = true

    let descripted = descript(text)
    // console.log(descripted)
    let input = document.getElementsByClassName("input-text");

    document.getElementById("text-response").innerHTML = descripted

    input[0].value = descripted
})


    const copy = document.getElementById("copy").addEventListener("click", function () {
   
       let input = document.getElementsByClassName("input-text");
   
       input[0].select()
       navigator.clipboard.writeText(input[0].value);

       input[0].value = ""
   
   })


    