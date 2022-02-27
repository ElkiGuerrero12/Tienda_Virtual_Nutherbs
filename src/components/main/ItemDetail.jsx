import react, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "../main/ItemDetail.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";

const ItemDetail = ({ product }) => {
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const { addToCart } = useContext(cartContext);

  function onAdd(cantidad) {
    addToCart(product, cantidad);
    setMostrarItemCount(false);
  }

  return (
    <>
      <div className="detalleProductos">
        <div className="cartsDetalle">
          <div className="imagenProducto">
            <img src={product.img} />
          </div>
          <div className="nomdespreCartGlobal">
            <div className="nomdespreCart">
              <h2 className="title">{product.nombre}</h2>
              <p className="description">{product.descripcion}</p>
              <p className="precio-product">
                S/.<span>{product.precio}</span>
              </p>
            </div>
            <h3>Descripción</h3>
            <h2>{product.descripcionGeneral}</h2>
            <div className="btnIrCarrito">
              {mostrarItemCount ? (
                <ItemCount maximo={product.Stock} onAdd={onAdd} />
              ) : (
                <Link to={"/cart"}>
                  <button className="agregar">
                    {`Tienes productos en carrito, Ir a Carrito`}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
