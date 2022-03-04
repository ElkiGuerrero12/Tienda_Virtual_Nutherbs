import react, { useContext, useEffect, useState, useRef } from "react";
import { cartContext } from "../../context/CartProvider";
import { getFirestore } from "../../firebase/firebase";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import "./TerminarCompra.css";

function TerminarCompra() {
  const { cart, clearCart, precioTotal } = useContext(cartContext);
  const [orderId, setOrderId] = useState("");
  const [total, setTotal] = useState(0);
 
 

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();

  useEffect(() => {
    
    setTotal(precioTotal());
  }, [precioTotal]);

 

  const finalizarCompra = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const orders = db.collection("orders");

    const miOrden = {
      buyer: {
        name: nameRef.current.value,
        mobile: mobileRef.current.value,
        email: emailRef.current.value,
        address: addressRef.current.value,
        city: cityRef.current.value,
      },
      items: cart,
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    orders
      .add(miOrden)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });

      

    let desapareceFormulario =
      document.querySelectorAll(".formularioCompra")[0];
    desapareceFormulario.style.display = "none";

    let apareceMensajeCompraExitosa =
      document.querySelectorAll(".compraExitosa")[0];
    apareceMensajeCompraExitosa.style.display = "block";  
    
   
    
  };

 

  return (
    <>
      <div>
        <form action="" onSubmit={finalizarCompra} id="formulario">
          <div className="formularioCompra">
            <div className="datosPersonales">
              <h2>Complete el formulario para continuar</h2>

              <input
                id="usuario"
                type="text"
                name="nombre"
                ref={nameRef}
                placeholder="Nombre y Apellidos"
                className=""
                required="required"
              />

              <input
                type="number"
                name="celular"
                ref={mobileRef}
                placeholder="Número Celular"
                className=""
                required="required"
              />

              <input
                type="email"
                name="correo"
                ref={emailRef}
                placeholder="Email"
                className=""
                required="required"
              />
              <input
                type="text"
                name="direccion"
                ref={addressRef}
                placeholder="Dirección"
                className=""
                required="required"
              />

              <input
                type="text"
                name="Ciudad"
                ref={cityRef}
                placeholder="Ciudad"
                className=""
                required="required"
              />
            </div>
            <button type="submit" className="botonComprar">
              Comprar
            </button>
          </div>
        </form>

        <div className="compraExitosa">
          <h2>
            Felicidades su compra fue exitosa, su número de orden es: <span>{orderId}</span>
          </h2>
          <div className="mensajeCartVacio">          
          <Link to="/" onClick={() => clearCart()}>Ir al inicio</Link>
        </div>
          
        </div>
      </div>
    </>
  );
}

export default TerminarCompra;
