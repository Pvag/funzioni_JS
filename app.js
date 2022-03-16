// function contatore() {
//   let n = 0
//   n += 1

//   return n
// }
//
// stampa 1, 1, 1, 1
//
// console.log(contatore())
// console.log(contatore())
// console.log(contatore())
// console.log(contatore())


/// clojure


function esterna() {
  let numero = 10

  return function() {
    numero += 1
    console.log(numero)
  }
}

// stampa 11, 12, 13, 14
//
const interna = esterna()
interna()
interna()
interna()
interna()

// stampa 11, 11, 11, 11
//
// esterna()()
// esterna()()
// esterna()()
// esterna()()