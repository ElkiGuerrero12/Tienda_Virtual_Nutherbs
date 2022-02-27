import Item from "./Item";
import "./Item.css";

const ItemList = ({ arrayDeProductos }) => {
  return (
    <>
      {arrayDeProductos.map((product) => {
        return <Item data={product} key={product.id} />;
      })}
    </>
  );
};

export default ItemList;
