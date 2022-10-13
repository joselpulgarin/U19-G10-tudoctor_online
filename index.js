const obj={nombre:"Jabón", cantidad:10}
obj.id="123"

const miPrimeraPromesa=new Promise((resolve,reject) => {
    const texto = "Hola desde el backend"
    if (texto.match("Hola")) {
        resolve()
        
    }

})
miPrimeraPromesa.then( )
console.log( obj.cantidad)
console.log(obj.id);