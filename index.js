let celdas = document.querySelectorAll('.col-4')
let flag = true
let arreglo = [null, null, null, null, null, null, null, null, null]
let posibilidad1 = document.querySelectorAll('.posibilidad1')
let posibilidad2 = document.querySelectorAll('.posibilidad2')
let posibilidad3 = document.querySelectorAll('.posibilidad3')
let posibilidad4 = document.querySelectorAll('.posibilidad4')
let posibilidad5 = document.querySelectorAll('.posibilidad5')
let posibilidad6 = document.querySelectorAll('.posibilidad6')
let posibilidad7 = document.querySelectorAll('.posibilidad7')
let posibilidad8 = document.querySelectorAll('.posibilidad8')
let btnReiniciar = document.querySelector('#btnReiniciar')
let puntajeReiniciar = document.querySelector('#puntajeReiniciar')
let pantalla1 = document.querySelector('#pantalla1')
let pantalla2 = document.querySelector('#pantalla2')
let contador1 = 0
let contador2 = 0

const validarGanador = () => {

    if ((arreglo[0] != null && arreglo[1] != null) &&
        (arreglo[0] == arreglo[1]) && (arreglo[1] == arreglo[2])) {

        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1

        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        primerCaso()
    }
    else if ((arreglo[3] != null && arreglo[4] != null) &&
        (arreglo[3] == arreglo[4]) && (arreglo[4] == arreglo[5])) {
        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1
        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        segundoCaso()

    }
    else if ((arreglo[6] != null && arreglo[7] != null) &&
        (arreglo[6] == arreglo[7]) && (arreglo[7] == arreglo[8])) {
        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1
        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        tercerCaso()

    }
    else if ((arreglo[0] != null && arreglo[3] != null) &&
        (arreglo[0] == arreglo[3]) && (arreglo[3] == arreglo[6])) {
        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1
        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        cuartoCaso()

    }
    else if ((arreglo[1] != null && arreglo[4] != null) &&
        (arreglo[1] == arreglo[4]) && (arreglo[4] == arreglo[7])) {
        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1
        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        quintoCaso()
    }
    else if ((arreglo[2] != null && arreglo[5] != null) &&
        (arreglo[2] == arreglo[5]) && (arreglo[5] == arreglo[8])) {
        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1
        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        sextoCaso()

    } else if ((arreglo[0] != null && arreglo[4] != null) &&//
        (arreglo[0] == arreglo[4]) && (arreglo[4] == arreglo[8])) {
        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1
        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        septimoCaso()
    }
    else if ((arreglo[2] != null && arreglo[4] != null) &&
        (arreglo[2] == arreglo[4]) && (arreglo[4] == arreglo[6])) {
        if (flag == false) {
            alert('jugador uno ganaste! (X)')
            contador1++
            pantalla1.value = contador1
        } else if (flag == true) {
            alert('jugador dos ganaste! (0)')
            contador2++
            pantalla2.value = contador2
        }
        octavoCaso()
    }
    else {
        let filter = arreglo.filter((item) => item == null)
        if (filter.length == 0) {
            alert('empate')

        }
    }

}

const primerCaso = () => {
    posibilidad1.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}

const segundoCaso = () => {
    posibilidad2.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}

const tercerCaso = () => {
    posibilidad3.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}
const cuartoCaso = () => {
    posibilidad4.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}
const quintoCaso = () => {
    posibilidad5.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}
const sextoCaso = () => {
    posibilidad6.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}
const septimoCaso = () => {
    posibilidad7.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}
const octavoCaso = () => {
    posibilidad8.forEach((item) => {
        item.classList.toggle('bg-danger')
    })
}



celdas.forEach((celda) => {
    btnReiniciar.addEventListener('click', () => {
        celda.textContent = '';
        arreglo = [null, null, null, null, null, null, null, null, null]
        flag = true
        celda.classList.remove('bg-danger')
    })

})

const bloquearCasilla = (coordenada) => {
    if (arreglo[coordenada] != null) {
        return true
    }
    return false
}

const marcar = (celda) => {
    let isBlock = bloquearCasilla(celda.target.id)
    if (isBlock) {
        alert('ya marcaron ahi, intente en otra casilla')
    } else {
        if (flag) {
            celda.target.innerText = 'X'
            arreglo[celda.target.id] = 'X'
            flag = !flag

        } else {
            celda.target.innerText = '0'
            arreglo[celda.target.id] = '0'
            flag = !flag

        }

        validarGanador()
    }

}

celdas.forEach((celda) => {
    celda.addEventListener('click', marcar)
})

puntajeReiniciar.addEventListener('click', () => {
    contador1 = 0
    contador2 = 0
    pantalla1.value = ''
    pantalla2.value = ''
})