import react, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ maximo, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  function sumar() {
    if (cantidad < maximo) setCantidad(cantidad + 1);
  }

  function restar() {
    if (cantidad > 0) setCantidad(cantidad - 1);
  }

  return (
    <>
      <div className="contenedorButton">
        <button className="buttonMasMenosIz" onClick={() => restar()}>
          -
        </button>
        <span>{cantidad} </span>
        <button className="buttonMasMenosDer" onClick={() => sumar()}>
          +
        </button>
        <br />
        <br />
        <button className="agregar" onClick={() => onAdd(cantidad)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}

export default ItemCount;
