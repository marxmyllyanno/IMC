
function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function recebeEvento (evento) {
        evento.preventDefault()

        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')

        const pesoformatado = Number(peso.value)
        const alturaformatada = Number(altura.value)

        console.log(typeof(pesoformatado))
        console.log(typeof(alturaformatada))

        imc = pesoformatado / (alturaformatada * alturaformatada)

        console.log(imc)
        if (imc < 18.5) {
            resultado.innerHTML = (`Seu imc é de ${Math.round(imc).toFixed(2)} (Magreza)`)
        }
        else if (imc >= 18.5 && imc < 25) {
            resultado.innerHTML = (`Seu imc é de ${Math.round(imc).toFixed(2)} (Normal)`)
        }
        else if (imc >= 25 && imc < 30) {
            resultado.innerHTML = (`Seu imc é de ${Math.round(imc).toFixed(2)} (Sobrepeso)`)
        }
        else if (imc >= 30 && imc < 40) {
            resultado.innerHTML = (`Seu imc é de ${Math.round(imc).toFixed(2)} (Obesidade)`)
        }
        else if (imc > 40) {
            resultado.innerHTML = (`Seu imc é de ${Math.round(imc).toFixed(2)} (Obesidade GRAVE)`)
        }
        else if (imc === 0 && imc === NaN) {
            resultado.innerHTML = (`insira um resultado válido`)
        }
        else {
            resultado.innerHTML = ('insira um resultado válido')
        }
    }

    form.addEventListener('submit', recebeEvento)
}

meuEscopo()

/* 
MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III

IMC = Peso ÷ (Altura × Altura)

*/
