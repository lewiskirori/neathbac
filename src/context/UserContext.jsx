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

export const UserContext = React.createContext();
export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const dataList = querySnapshot.docs.map((doc) =>
      setUsers((currentList) => {
        let docData = doc.data();

        if (currentList.length > 0) {
          if (!currentList.find((item) => item.id === doc.id)) {
            return [
              ...currentList,
              {
                id: doc.id,
                username: docData.firstname + " " + docData.lastname,
                email: docData.email,
                dob: docData.dob,
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
                username: docData.firstname + " " + docData.lastname,
                age: docData.dob,
                email: docData.email,
                status: docData.status,
            //   ...doc.data(),
            },
          ];
        }
        console.log(currentList);
        return currentList;
      })
    );
  };

  const createUser = async (array) => {
    try {
      const docRef = doc(db, "users", id);

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

  const getSingleUser = (id) => {
    let returnUser;
    users.map((user, index) => {
      if (user.id == id) {
        returnUser = user;
      }
    });
    return returnUser;
  };

  const deleteUser = async (id) => {
    try {
      const docRef = doc(db, "users", id);

      const docSnap = await deleteDoc(docRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (users.length <= 0) {
      fetchUsers();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        fetchUsers,
        getSingleUser,
        createUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
