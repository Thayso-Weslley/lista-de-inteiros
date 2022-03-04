let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number.parseInt(n) >= 1 && Number.parseInt(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number.parseInt(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number.parseInt(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.legth == 0) {
        alert('adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < pos)
            menor = valores[pos]
        }

        média = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>- Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>- O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>- O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>- Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>- A média de todos os números é ${média}</p>`
    }
}