import { Link } from "react-router-dom";

import "./Item.css";

function Item({ data }) {
  return (
    <>
      <div className="productos">
        <div className="carts">
          <div>
            <img src={data.img} />
          </div>
          <h2 className="title">{data.nombre}</h2>
          <p className="description">{data.descripcion}</p>
          <p className="precio-product">
            S/.<span>{data.precio}</span>
          </p>
          <Link className="verDetalle" to={`/detalle/${data.id}`}>
            Ver detalle
          </Link>
        </div>
      </div>
    </>
  );
}

export default Item;
