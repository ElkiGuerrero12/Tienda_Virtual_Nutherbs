import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore } from "../../firebase/firebase";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [llegoPromesa, setLlegoPromesa] = useState(false);
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const DataBase = getFirestore();

    const itemProducts = DataBase.collection("items");

    itemProducts
      .get()
      .then((querySnapshot) => {
        categoryId
          ? setArrayDeProductos(
              querySnapshot.docs
                .filter((item) => item.data().category === `${categoryId}`)
                .map((doc) => {
                  return { id: doc.id, ...doc.data() };
                })
            )
          : setArrayDeProductos(
              querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        setLlegoPromesa(true);
      })
      .catch((error) => {
        setLlegoPromesa(true);
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      <div className="main">
        <h1>Los mejores productos naturales</h1>

        {llegoPromesa ? (
          <div className="listaProductos">
            <ItemList arrayDeProductos={arrayDeProductos} />
          </div>
        ) : (
          <p style={{ fontSize: "18px", textAlign: "center" }}>Loading... </p>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
