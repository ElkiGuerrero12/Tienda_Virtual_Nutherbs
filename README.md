# Tienda virtual con REACT.
el proyecto es una tienda virtual de venta de productos naturales nutherbs.com.

# tecnologías-usadas
React
HTML
CSS
Firebase
Fontawesome
Javascript


# Distribución del proyecto

El proyecto está dividido en 3 grandes carpetas, COMPONENTS, CONTEXT Y FIREBASE. Además, del componente App.js que es la que consolida todos los componentes y el componente index.js quien es el que renderiza toda la aplicación al front mediante el componente APP

## CARPETA COMPONENTS
Se ha divido en 3 carpetas, FOOTER, HEADER Y MAIN cada una con sus respectivos componentes y hojas de estilos, Components a la vez está dentro de SRC.
# CARPETA FOOTER.
que contiene el compoente footer.jsx que solo está rendererizando el pié de la página y el fichero footer.css que le está dando los estilos.
# CARPETA HEADER
la misma que contiene 5 compentes con sus respectivas hojas de estilo
  # componente NavBar.jsx
  Que contiene al logo de la página, las categorías de producto y al  componente CartWidjet que es el ícono del carrito el mismo que refleja la cantidad de productos que se ha comprado, navBar setea la función total unidades y se usa cartContext y CartProvider
  # componente Cartwidjet.jsx
  Contiene el ícno del carrito
  # componente Cart.jsx
  Que setea el cart, la función eliminar carrito y la functión precio total usando el cartContext y CartProvider, para posteriormente realizar una verificación del cart si está vacío manda mensaje al front con carrito vació y un link para ir a comprar al index, si está lleno envía el producto como párametro al componente CartItem.
  # componente CartItem.jsx
  Recibe el producto del cart y lo renderiza en el front, además, setea la función deleteItem usando el cartContext y CartProvider
  # componente TerminarCompra.jsx
  Es el compomente que crea el obejto orden de compra que contiene datos del producto y datos del comprador y los envía a Firebase
  aqui usamos useContext, useEffect, Usestate y useRef, este último para acceder a los dstos del cliente en el formulario, además usamos Getfirebase para conectar con nuesta base de datos con su colleción orders, usamos la función .add para enviar nuestra orden a la base de datos, asimismo, usamos la función .then para capturar el Id de nuestra orden ya en la base y renderizarla en el front con un mensaje al cliente. aqui también hemos renderizado el formulario para que el cliente llene sus datos y está validado con el método onSubmit y la funcción finalizarCompra que ejecuta un prevent defaul, el formulario tiene que tener la etiqueta Required.

# CARPETA MAIN
la misma que contiene 6 compentes con sus respectivas hojas de estilo
 # componente ItemListContainer.JSX
 Se encarga de conectar a la base de datos usando getFirestore y accede a la collección items con el método .get y .then para capturar el docs que contiene la base de datos, previamente hemos seteado una promesa, un array de productos y una categoría por ID. una vez tenemos la info 
 usamos un condicional para comprobar si lo que se va ha mostrar en el front es una categoría de producto o todos los productos, para eso usamos el método filter para comprobar que la categoría es igual a la seleccionada y usamos el método map para retornar el resultado y dicho resultado setearlo en array de productos, si no sucede lo primero se setea tambien el array de productos que pintará todos los productos en el front, miestras se espera que esto se de se renderiza en el front un mensaje de LOAding manejado por la promesa que se ha seteado inicialmente en false y renderizada en TRUE, una vez llega el resultado es enviado al componente ItemList.
 usamos useState, useEffect, useParams y getFirestore
 # componente ItemList.jsx
 recibe el array de productos y lo retorna aplicando un map y lo envía al componete Item como el producto en si y una llave por defecto el id.
 # componente Item.jsx
 recibe la data que viene de ItemList y la renderiza en el Front, además se usa un Link para mostrar el detalle del producto según su ID.
 # componente ItemDetailContainer.jsx
 Se encarga de conectar a la base de datos usando getFirestore y accede a la collección items con el método .get y .then para capturar según su ID el producto y retornar el detalle del mismo, enviándolo a  ItemDetail para que lo muestre en el Front.
 # componente ItemDetail.jsx
 Recibe el producto y muestra el detalle del mismo, también renderiza el componente ItemCount para poder agregar el producto al carrito. Aqui se usa el cartContext y CartProvider para hacer uso de la función addToCart. se setea en TRU para que se muestre el mostrarItemcount para poder agregar al carrito y luego con la función onAdd se setea en false mostrarItemcpunt para que según la condicion del return se deje de mostrar el ItenCpount y se muestre el Link con mensaje "Tienes productos en carrito, Ir a Carrito" que redirecciona al Cart
 # ItemCount.jsx
 Este componente es el que tiene la lógica de sumar o restar y agregar productos al carrito.
 recibe 2 argumentos, el stock del producto y la función onAdd.

 ## CARPETA CONTEXT
 Esta carpeta contiene el componente CartProvider
  # componente cartProvider
  En este componente seteamos el Cart con cartContex y creamos la función de agregar al carrito que recibe 2 parámetros, y ejecuta una función isIncart para verificar por ID si el producto ya existe, si existe, se recorre el cart con findIndex para comprar si se trata del mismo producto, si es el mismo producto se suma uno al contador(count) y se setea el cart con spread  operador para extender sus propiedades, caso contrario se solamente se setea el cart con spread  operador más el producto y su cantidad.
  Este componente va a englobar a todo el return del componete App.jsx para poder usarlo en toda la aplicación.
  Aquí también se han creado las funciones para eliminar un producto, para vaciar el carrito, par calcular el precio total del carrito y para sumar las unidades agregadas al carrito.
  y todo eso se ha enviado por el return para poder usarla donde la aplicación lo requiera.

  ## CARPETA FIREBASE
  Esta carpeta contiene el componente firebase,jsx, aquí tenemos el código para inicializar nuestra conexión con el servidor de firebase, declaramos y exportamos la función getFirebase y getFirestote para poder conectarnos desde los componenetes que lo requieran, en este caso lo hemos uado desde el componente ItemListContainer y el componente ItemDetailContainer.





 







  

