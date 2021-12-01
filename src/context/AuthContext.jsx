import React, {createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContent = createContext(null);

export const AuthContentProvider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState('');

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  return (
    <AuthContent.Provider value={{user, userRole,setUser, setUserRole, initializing}}>
      {children}
    </AuthContent.Provider>
  );
};
