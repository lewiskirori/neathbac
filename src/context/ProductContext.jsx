import React, { useState, useEffect, useContext } from "react";
import {
  doc,
  onSnapshot,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../components/auth";

export const ProductContext = React.createContext();
export const useProducts = () => {
  return useContext(ProductContext);
};

const productsFromLocalStorage = JSON.parse(
  localStorage.getItem("products") || "[]"
);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsFromLocalStorage);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataList = querySnapshot.docs.map(
      (doc) =>
        setProducts((currentList) => {
          // console.log(currentList);
          if (currentList.length > 0) {
            // console.log(currentList.find((item) => item.id === doc.id) );
            if (!currentList.find((item) => item.id === doc.id)) {
              const newlist = [...currentList, { id: doc.id, ...doc.data() }];
              localStorage.setItem("products", JSON.stringify(newlist));
              return [...currentList, { id: doc.id, ...doc.data() }];
            }
          } else {
            const newlist = [...currentList, { id: doc.id, ...doc.data() }];
            localStorage.setItem("products", JSON.stringify(newlist));
            return [...currentList, { id: doc.id, ...doc.data() }];
          }
          if (currentList === undefined) {
            // console.log("duh");
            localStorage.setItem("products", "");
          } else {
            localStorage.setItem("products", JSON.stringify(currentList));
          }
          return currentList;
        })
      // {
      //   id: doc.id,
      //   ...doc.data(),
      // }
    );
    // console.log(dataList);
    //     setProducts((currentProducts) => {

    // const concatArr = currentProducts.concat(dataList)
    // const result = concatArr.filter((item, idx) => concatArr.indexOf(item) === idx)

    // currentProducts.find(item =>console.log(item.id))

    // // console.log(result);
    //       // console.log([...new Set([...currentProducts,...dataList])]);
    //       return[...new Set([...currentProducts, ...dataList])];
    //       // if (currentProducts.find(item =>item.id === doc.id) === null) {
    //       //   return [...currentProducts,{id:doc.id,...doc.data}]
    //       // }
    //     });
    // console.log(products);
  };

  const createProduct =async (id)=>{
    try {
        const q = query(collection(db, "products"), where("id", "==", id));
        const querySnapshot = await getDocs(q);

      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        console.log(doc.data());
        // setUser((prevdata) => {
        //   return { ...prevdata, ...doc.data() };
        // });
      });
        

  }catch(error){
            
  }
}

  // getData();

  useEffect(() => {
    if (products.length <= 0) {
      getData();
    }
    // localStorage.setItem('products',JSON.stringify(products))
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
