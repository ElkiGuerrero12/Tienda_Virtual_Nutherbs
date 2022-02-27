import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../firebase/firebase";

function ItemDetailContainer() {
  const [llegoPromesa, setLlegoPromesa] = useState(false);
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setLlegoPromesa(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(itemId);
    item
      .get()
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      })
      
      .catch((error) => {
        setLlegoPromesa(true);
        console.log(error);
      });
  }, [itemId]);

  

  return (
    <>
      {llegoPromesa ? (
        <div>
          <ItemDetail product={product} />
        </div>
      ) : (
        <p style={{ fontSize: "18px", textAlign: "center" }}>Loading... </p>
      )}
    </>
  );
}

export default ItemDetailContainer;
