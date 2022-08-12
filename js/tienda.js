//STOCK//
const productos = [
    { id: '0', tipo: "branca y coca cola", modelo: "Fernet Branca 750ml + Coca Cola 2.25lts", precio: 1450, img: "assets/fernet-unacoca.png" },
    { id: '1', tipo: "branca y coca cola", modelo: "Fernet Branca 750ml + Dos Coca Colas 2.25lts", precio: 1700, img: "assets/fernet-2-cocas.jpg" },
    { id: '2', tipo: "branca y coca cola", modelo: "Dos Fernet Branca 750ml + tres Coca Colas 2.25lts", precio: 3150, img: "assets/dosfernet-trescocas.png" },
    { id: '3', tipo: "smirnoff y jugo", modelo: " Vodka Smirnoff + dos jugos ", precio: 1500, img: "assets/vodka-smirnoff-dosjugos.jpg"},
    { id: '4', tipo: "absolut y jugo", modelo: "Vodka Absolut + dos jugos", precio: 3000, img: "assets/unvodka-dosjugos.jpg"},
    { id: '5', tipo: "sky y jugo", modelo: "Vodka Sky + dos jugos", precio: 2000, img: "assets/vodka-sky-dosjugos.jpg"},
    { id: '6', tipo: "cerveza corona", modelo: "Pack 6 cercezas Corona", precio: 600, img: "assets/cerveza-corona-pack6.jpg"},
    { id: '7', tipo: "cerveza quilmes", modelo: "Pack de 7 cervezas Quilmes surtidas.", precio: 890, img: "assets/cerveza-quilmes-pack7-surtido.jpg"},
    { id: '8', tipo: "cerveza patagonia", modelo: "Pack de 8 cervezas 'Patagonia' surtidas", precio: 2000, img: "assets/cerveza-patagonia.jpg"},
  ];

  const contenedorTienda = document.getElementById('contenedorTienda');
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  const carrito = []

  for (const producto of productos) {
    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('h3');
    const botonComprar = document.createElement('button');
  //estilos
    divProducto.className = 'card';
    imgProducto.className = 'card-img-top';
    nombreProducto.className = 'nombre-producto';
    precioProducto.className = 'card-precio';
    botonComprar.className = 'btn btn-warning';
  
    //contenido + id 
    divProducto.id = producto.id;
    imgProducto.src = producto.img;
    nombreProducto.append(producto.modelo);
    precioProducto.append(`$${producto.precio}`);
    botonComprar.append('Comprar');
    botonComprar.id = `${producto.id}`;
  
    botonComprar.onclick = () => {
      const productoComprado = productos.find(producto => producto.id === botonComprar.id);
      carrito.push({ nombre: productoComprado.modelo, precio: productoComprado.precio })
      let productoCompradoJSON = JSON.stringify(productoComprado)
      localStorage.setItem('productoComprado', productoCompradoJSON)
    }
  
    divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
    contenedorTienda.append(divProducto);
  
  }

  const mostrarCarrito = () => {
  
    for (const producto of carrito) {
      const nombreProducto = `<h4>Producto : ${producto.nombre}</h4>`
      const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
      contenedorCarrito.innerHTML += nombreProducto
      contenedorCarrito.innerHTML += precioProducto
    }
  
    const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
    contenedorCarrito.append(`Total Compra :  ${total}`)
  
  }
  
  let botonCarrito = document.getElementById("btnCarrito")
  botonCarrito.onclick = mostrarCarrito;
  const compraFinal = () => Swal.fire(
    '¡Felicitaciones por tu compra!',
    'Te enviaremos los detalles al mail.',
    'success'
    )

  const botonComprafinal = document.getElementById("btnComprafinal")
  botonComprafinal.onclick = compraFinal;
  
  
  
  const btnbuscar = document.getElementById("btnBuscar");
  const inputBuscador = document.getElementById('buscadorInput');
  
  const buscarProducto = ()=>{
       const productoTipo = inputBuscador.value;
  
       const resultadoBusqueda = productos.filter(producto => producto.tipo === productoTipo )
       for(producto of productos){
  
        const id = producto.id;
        document.getElementById(id).style.display = "none";
  
       }
       for(producto of resultadoBusqueda){
  
          const id = producto.id;
          document.getElementById(id).style.display = "flex";
  
       }
       
  }
  
  
  btnbuscar.onclick = buscarProducto;

  const URL = 'simulador-prestamo/js/products.json'

  function renderProducts( productos) {
	productos.forEach(producto => {
		document.write(`<li>${producto.name} - precio: ${producto.price}</li>`)
	});
}
fetch( URL )
.then ( res => res.json() )
.then (data => { renderProducts(data) })