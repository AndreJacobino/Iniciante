const num = document.getElementById("numero")
const envia = document.getElementById("enviar")
const resultado = document.getElementById("resul")

envia.addEventListener("click", function (){
    let numero = parseInt(num.value)
    for (let i = 1; i <= 10; i++) {

        let  resultado = numero *i 

        const linha = document.createElement("p")
        

        linha.textContent = `${numero} x ${i} = ${resultado} `
       
        resul.appendChild(linha)  
    } 
})
