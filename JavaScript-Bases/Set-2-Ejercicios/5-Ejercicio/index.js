const personas = [

    { nombre: 'Juan', edad: 18 },

    { nombre: 'María', edad: 16 },

    { nombre: 'Pedro', edad: 20 },

    { nombre: 'Pablo', edad: 15 },

    { nombre: 'Laura', edad: 19 },

];

numeroSmall=personas[0]
numeroBig=personas[0]

function calcularMayoriaDeEdad() {
    i=0
    while (i<personas.length){
        if (personas[i].edad < numeroSmall.edad) {
            numeroSmall=personas[i]
        }
        if (personas[i].edad > numeroBig.edad) {
            numeroBig=personas[i]
        }
        if (personas[i].edad >=18) {
            console.log(personas[i].nombre +" "+"es mayor de edad")
        }
        else {
            console.log(personas[i].nombre +" "+"es menor de edad")
        }
        i++
    }
    console.log("La persona mas joven es:"+numeroSmall.nombre)
    console.log("La persona mas mayor es:"+numeroBig.nombre)
}

calcularMayoriaDeEdad()