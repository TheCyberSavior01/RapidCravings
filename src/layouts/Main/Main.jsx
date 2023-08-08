import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useStateValue } from "../../provider/StateProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../../firebase/firebase.config";
import { actionType } from "../../provider/reducer";
import Header from "../../components/Header";

const auth = getAuth(firebaseApp);

const Main = () => {
  const [{ user, displayCart }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if (loggedUser) {
        dispatch({
          type: actionType.SET_USER,
          user: {
            displayName: loggedUser.displayName,
            email: loggedUser.email,
          },
        });
      } else {
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
