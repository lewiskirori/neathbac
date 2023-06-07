import React, { useState, useEffect } from "react";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app, provider } from "../firebase-config";
import { auth } from "../firebase-config";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// import { useUser } from "./UserContext";
// import { useNavigate } from "react-router-dom";

const db = getFirestore(app);
export const AuthContext = React.createContext();

const dummyData = { uid: "", firstname: "", lastname: "", phone: "" };

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(dummyData);
  const [userDetails, setUserDetails] = useState(dummyData);
  // const { clearOnLogout } = useUser();
  // const navigate = useNavigate();
  const getUserDetails = async (uid) => {
    try {
      const docRef = doc(db, "staff", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails((prevdata) => docSnap.data());
        console.log("Document data:", docSnap.data());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // console.log(auth.currentUser.uid);
      // if (currentUser.uid != "") {
        getUserDetails(auth.currentUser.uid);
        // console.log(userDetails);
      // }
    }, 800);
  }, []);

  const dbUser = async (
    uid,
    email,
    firstname = "",
    lastname = "",
    role = "",
    gender = "",
    phone = ""
  ) => {
    try {
      const docRef = doc(db, "staff", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        await setDoc(docRef, {
          email: email,
          firstname: firstname,
          lastname: lastname,
          role: role,
          gender: gender,
          phone: phone,
          created: new Date(),
        });
        // console.log("No such document!");
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  const signin = async (email, password) => {
    // async(email,password)=>{
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // <AuthContext.Provider value={result}/>
      // console.log(result);
      // try {
      const q = query(collection(db, "staff"), where("email", "==", email));

      // var docRef = db.collection("staff").where("email", "==", email);

      // docRef
      //   .get()
      //   .then(function (doc) {
      //     if (!doc.empty) {
      //       console.log("Document data:", doc[0].data());
      //     } else {
      //       console.log("No such document!");
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log("Error getting document:", error);
      //   });

      const querySnapshot = await getDocs(q);

      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        console.log(doc.data());
        // setUser((prevdata) => {
        //   return { ...prevdata, ...doc.data() };
        // });
      });

      dbUser(result.user.uid, result.user.email);
      return { success: true, data: result.user.uid };
      // } catch (error) {

      // }
    } catch (error) {
      console.log(error.message);
      if (error.message == "Firebase: Error (auth/user-not-found).") {
        return { success: false, data: "User not found" };
      } else if (error.message == "Firebase: Error (auth/wrong-password).") {
        return { success: false, data: "Wrong email or password" };
      }
      // return error.message;
    }
    // }
  };

  // const register = async (
  //   firstname,
  //   lastname,
  //   email,
  //   phone,
  //   password,
  //   gender,
  //   role
  // ) => {
  const register = async (array) => {
    // async(email,password)=>{
    console.log(array);
    // array;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        array[2],
        // password,
        array[4]
        // array[]
      );
      // <AuthContext.Provider value={result}/>

      dbUser(
        result.user.uid,
        result.user.email,
        array[0],
        array[1],
        array[5],
        array[6],
        array[3]
      );
      // console.log(result.user.uid);
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
    // }
  };

  const logout = () => {
    try {
      console.log("logged out");
      auth.signOut();
      clearOnLogout();
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
    // return <Navigate replace to="/shop" />;
    // navigate("/shop")
  };

  const triggerResetEmail = async (email) => {
    try {
      // console.log(email);
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      // console.log(error.message);
      return false;
    }
    // console.log("Password reset email sent");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userDetails,
        register,
        signin,
        logout,
        triggerResetEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
