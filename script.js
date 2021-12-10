
let botao = document.querySelector("#botao")

let texto = document.querySelector("#mensagem")

let passoCodigo = document.querySelector("#number")

let selecaoCod = document.querySelectorAll(".coder")

let impressao = document.querySelector("#resposta")

let passoCifra = document.querySelector("#passoCifra") 

let selecao = document.querySelector("#selecionar")

let subTitulo = document.querySelector(".sub-titulo")


selecao.addEventListener("change", function (){

    if(selecao.value == "cifra-de-cesar") {
        passoCodigo.style.display = "block"
        passoCifra.style.display = "block"
    }
    else {
        passoCodigo.style.display = "none"
        passoCifra.style.display = "none"
    }
}) 

function cifraCesar (array, chave){

 var arrayNovo = [""]
   
 for(i = 0;  i < array.length; i++) {
    let msgNova = array[i].charCodeAt()
     if(msgNova >= 65 && msgNova <= 90){
         arrayNovo.push(String.fromCharCode(((msgNova -65 + chave) %26)+65)) 
     } else if ( msgNova>= 97 && msgNova <= 122){
        arrayNovo.push(String.fromCharCode(((msgNova -97 + chave)%26)+97))
          } else{
               arrayNovo.push(array[i])
          }
 }
 return arrayNovo.join("")

}


function decodificarCesar(array, chave){

    var arrayNovo = []

    for(let i = 0;  i < array.length; i++) {
        let msgNova = array[i].charCodeAt()


        if(msgNova >= 65 && msgNova <= 90){
            arrayNovo.push(String.fromCharCode(((msgNova -90 - chave) % 26) + 90)) 


        } else if ( msgNova>= 97 && msgNova <= 122){
            arrayNovo.push(String.fromCharCode(((msgNova -122 - chave) % 26) + 122))

        } else if(msgNova == 32){
            arrayNovo.push(" ")
        }
        
        else{
             arrayNovo.push(array[i])
        }
    }
    
    return arrayNovo.join("")
    
}

botao.addEventListener("click", ()=>{
    var msg = texto.value.split("")
    var passo = +passoCodigo.value
    if( selecao.value == "cifra-de-cesar" && selecaoCod[0].checked) {
        impressao.innerText = cifraCesar(msg , passo)
        subTitulo.style.display = "block"
        impressao.style.display = "block"

    } else{
        impressao.innerText = decodificarCesar(msg, passo)
        subTitulo.style.display = "block"
        subTitulo.innerHTML = " Mensagem decodificada:"
        impressao.style.display = "inline-block"
    }

})

function base64Codifica (){

    let msgNova = mensagem.value
   return btoa (msgNova);
}

function base64Decodifica (){

    let msgNova = mensagem.value
   return atob(msgNova);
}


botao.addEventListener("click", function (){

    if(selecao.value == "base64" && selecaoCod[0].checked) {
        impressao.innerText = base64Codifica()
        subTitulo.style.display = "block"
       
    }else if (selecao.value == "base64" && selecaoCod[1]) {
        impressao.innerText = base64Decodifica()
        subTitulo.style.display = "block"
        subTitulo.innerHTML = " Mensagem decodificada:"
    }
})







