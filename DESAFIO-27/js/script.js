function preencher(){
    let nome = document.getElementById("nome")
    let sobrenome = document.getElementById("sobrenome")
    let email = document.getElementById("email")


    validar(nome, "#808080", "#ff0000")
    validar(sobrenome, "#808080", "#ff0000")
    validar(email, "#808080", "#ff0000")
}

    

function validar(input, cor_1, cor_2) {

    if (!input.checkValidity()) {
        return input.style.border = `2px solid ${cor_1}`
        
    } else {
        return input.style.border = `2px solid ${cor_2}`
    }

}