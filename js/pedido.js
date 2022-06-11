class Hamburguesa{
    constructor(pedido){
        this.hamburguesa;
        this.tamanio = pedido.tamanio
        this.vegetales = pedido.vegetales
        this.queso = pedido.queso
    }

    entregarHamburguesa (){
        if (this.tamanio.toUpperCase() == "HAMBURGUESA SIMPLE"){
            this.hamburguesa = "hamburguesa simple"
        } else{
            this.hamburguesa = "hamburguesa doble"
        }

        if (this.vegetales == "con lechuga y tomate"){
            this.hamburguesa = "hamburguesa con lechuga y tomate"
        } else{
            this.hamburguesa = "hamburguesa sin lechuga y tomate"
        }

        if (this.queso === "queso cheddar"){
			
			return "Aqui tiene su " + this.tamanio + " " + this.vegetales + " y " + this.queso
		
		}   else {
            this.queso === "queso dambo"} {

			return "Aqui tiene su " + this.tamanio + " " + this.vegetales + " y " + this.queso
		
	    }
    }

}

let hamburguesa = new Hamburguesa ({tamanio:"",vegetales:"",queso:""})
hamburguesa ["tamanio"] = prompt("¿Hamburguesa simple o doble?")
hamburguesa.vegetales = prompt("¿Con lechuga y tomate o sin lechuga y tomate?")
hamburguesa.queso = prompt("¿Con queso cheddar o queso dambo?")

console.log(hamburguesa.entregarHamburguesa())