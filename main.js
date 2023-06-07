const form = document.getElementById('form-numero')
const nomes = []
const ddd = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function (e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNomeUser = document.getElementById('nome-user')
    const inputNumeroUser = document.getElementById('numero-user')
    const inputDddUser = document.getElementById('ddd-user')

    if (numeros.includes(inputNumeroUser.value)) {
        alert(`O Número de telefone: ${inputNumeroUser.value} já foi inserido`)
    } else {
        nomes.push(inputNomeUser.value)
        ddd.push(parseFloat(inputDddUser.value))
        numeros.push(parseFloat(inputNumeroUser.value))


        let linha = '<tr>'
        linha += `<td>${inputNomeUser.value}</td>`
        linha += `<td>${inputDddUser.value}</td>`
        linha += `<td>${inputNumeroUser.value}</td>`
        linha += `</td>`

        linhas += linha;
    }

    inputNomeUser.value = ''
    inputDddUser.value = ''
    inputNumeroUser.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
