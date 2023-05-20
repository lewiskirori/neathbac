import React, { useState, useEffect, useContext } from "react";
import {
  doc,
  onSnapshot,
  collection,
  getDocs,
  query,
  getFirestore,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../firebase-config";

const db = getFirestore(app);

export const ProductContext = React.createContext();
export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataList = querySnapshot.docs.map((doc) =>
      setProducts((currentList) => {
        let docData = doc.data();

        if (currentList.length > 0) {
          if (!currentList.find((item) => item.id === doc.id)) {
            return [
              ...currentList,
              {
                id: doc.id,
                productname: docData.name,
                img: docData.main_image,
                price: docData.price,
                count: docData.count,
                category: docData.category,
                status: docData.status,
                // ...doc.data(),
              },
            ];
          }
        } else {
          return [
            ...currentList,
            {
              id: doc.id,
              productname: docData.name,
              img: docData.main_image,
              price: docData.price,
              count: docData.count,
              category: docData.category,
              status: docData.status,
            //   ...doc.data(),
            },
          ];
        }
        return currentList;
      })
    );
  };

  const createProduct = async (array) => {
    try {
      const docRef = doc(db, "products", id);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return;
      } else {
        await setDoc(docRef, {
          id: array[0],
          name: array[1],
          price: array[2],
          description: array[3],
          quantity: array[4],
          active: array[5],
          images: array[6],
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSingleProduct = (id) => {
    let returnProduct;
    products.map((product, index) => {
      if (product.id == id) {
        returnProduct = product;
      }
    });
    return returnProduct;
  };

  const deleteProduct = async (id) => {
    try {
      const docRef = doc(db, "products", id);

      const docSnap = await deleteDoc(docRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (products.length <= 0) {
      fetchProducts();
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        getSingleProduct,
        createProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
