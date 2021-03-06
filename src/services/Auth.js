import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class AuthService {
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };


  handleSignIn = async (email, password) => {
    if (!email || !password) {
      return { isError: true, msg: 'All Field are required' };
    }

    if (this.validateEmail(email)) {
      if (password.length >= 8) {
        try {
          let response = await auth().signInWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            return { msg: 'Login Successful', isError: false };
          }
        } catch (e) {
          if (e.code === 'auth/network-request-failed') {
            return { msg: 'Something went wrong, Try Again!!', isError: true };
          } else if (e.code === 'auth/wrong-password') {
            return { msg: 'Password Incorrect', isError: true };
          } else if (e.code === 'auth/user-not-found') {
            return { msg: 'User not found', isError: true };
          }
        }
      } else {
        return {
          isError: true,
          msg: 'Password Too Short, must be at least 8 characters ',
        };
      }
    } else {
      return { isError: true, msg: 'Invalid Email' };
    }
  };

  handleLecturerSignUp = async (
    email,
    fname,
    lname,
    password,
    phone,
    dept
  ) => {
    if (!email || !password || !fname || !lname || !phone || !dept) {
      return { isError: true, msg: 'All Field are required' };
    }

    if (this.validateEmail(email)) {
      if (password.length >= 8) {
        try {
          let response = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            const update = {
              displayName: `${fname} ${lname}`,
            };
            await auth().currentUser.updateProfile(update);
            try {
              await firestore()
                .collection('lecturers')
                .doc(response.user.uid)
                .set({
                  fname,
                  email,
                  lname,
                  phone,
                  createdAt: firestore.FieldValue.serverTimestamp(),
                  _id: response.user.uid,
                  dept: null,
                });

            } catch (error) {
              console.log(error.message);
              return {
                isError: true,
                msg: 'Something went wrong try again ',
              };
            }
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        return {
          isError: true,
          msg: 'Password Too Short, must be at least 8 characters ',
        };
      }
    } else {
      return { isError: true, msg: 'Invalid Email' };
    }
  };

  handleStudentSignUp = async (
    email,
    fname,
    lname,
    password,
    phone,
    dept,
    level, matric_no
  ) => {
    if (!email || !password || !fname || !lname || !phone || !dept ||
      !level || !matric_no) {
      return { isError: true, msg: 'All Field are required' };
    }

    if (this.validateEmail(email)) {
      if (password.length >= 8) {
        try {
          let response = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            const update = {
              displayName: `${fname} ${lname}`,
            };
            await auth().currentUser.updateProfile(update);
            try {
              await firestore()
                .collection('students')
                .doc(response.user.uid)
                .set({
                  fname,
                  email,
                  lname,
                  phone, dept,
                  level, matric_no,
                  createdAt: firestore.FieldValue.serverTimestamp(),
                  _id: response.user.uid,
                });

            } catch (error) {
              console.log(error.message);
              return {
                isError: true,
                msg: 'Something went wrong try again ',
              };
            }
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        return {
          isError: true,
          msg: 'Password Too Short, must be at least 8 characters ',
        };
      }
    } else {
      return { isError: true, msg: 'Invalid Email' };
    }
  };


  handelLogout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
      // return {isError: true, msg: 'Invalid Email'};
    }
  };


  getStudent = async () => {
    try {
      const user = auth().currentUser?.uid;
      const docRef = firestore().collection('students').doc(user);
      const isExist = await docRef.get();
      if (isExist.exists) {
        const data = isExist.data();
        const profile = { ...data };
        return profile;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  getLecture = async () => {
    try {
      const user = auth().currentUser?.uid;
      const docRef = firestore().collection('lecturers').doc(user);
      const isExist = await docRef.get();
      if (isExist.exists) {
        const data = isExist.data();
        const profile = { ...data };
        return profile;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

}

export default new AuthService();
