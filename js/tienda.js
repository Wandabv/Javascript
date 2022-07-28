const productos = [
    { id: '0', tipo: "ropa", modelo: "Chaleco", precio: 1500, img: "assets/chaleco.jpg" },
    { id: '1', tipo: "juguete", modelo: "Hueso de goma", precio: 800, img: "assets/huesode-goma.jpg" },
    { id: '2', tipo: "correa", modelo: "Correa extensible", precio: 1000, img: "assets/correa-extensible.jpg" },
    { id: '3', tipo: "cucha", modelo: "Cama de peluche", precio: 2500, img: "assets/cama-peluche.jpg" },
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