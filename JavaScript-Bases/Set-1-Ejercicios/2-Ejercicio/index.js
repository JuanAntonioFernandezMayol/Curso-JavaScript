const lenguajesFavoritos =  ["HTML", "CSS", "JS"] 

const presentacion = {
    nombre: "Juan Antonio",
    edad: 25,
    mayorDeEdad: true,
    direccion: { calle:"Cabo formentor", numero: 17 },
    coloresFavoritos:["negro", "naranja", "verde"],
    lenguajesFavoritos,
    mejorLenguaje: lenguajesFavoritos [0],
    peorLenguaje: lenguajesFavoritos [2],
}

console.log(presentacion);