
 import { createContext, useEffect, useState } from "react";
 import { app } from "../components/Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


 
 export const AuthContext = createContext(null);
 const auth = getAuth(app)
 const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
 
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();
 
     const registerUser = async (email, password) => {
         setLoading(true);
         try {
             const result = await createUserWithEmailAndPassword(auth, email, password);
             setUser(result.user);
         } catch (error) {
             console.error("Error registering user:", error);
         } finally {
             setLoading(false);
         }
     };
 
     const loginUser = async (email, password) => {
         setLoading(true);
         try {
             const result = await signInWithEmailAndPassword(auth, email, password);
             setUser(result.user);
         } catch (error) {
             console.error("Error logging in user:", error);
         } finally {
             setLoading(false);
         }
     };
 
     const googleLogin = async () => {
         setLoading(true);
         try {
             const result = await signInWithPopup(auth, googleProvider);
             setUser(result.user);
         } catch (error) {
             console.error("Error logging in with Google:", error);
         } finally {
             setLoading(false);
         }
     };
 
     const githubLogin = async () => {
         setLoading(true);
         try {
             const result = await signInWithPopup(auth, githubProvider);
             setUser(result.user);
         } catch (error) {
             console.error("Error logging in with GitHub:", error);
         } finally {
             setLoading(false);
         }
     };
 
     const logOut = async () => {
         setLoading(true);
         try {
             await signOut(auth);
             setUser(null);
         } catch (error) {
             console.error("Error logging out:", error);
         } finally {
             setLoading(false);
         }
     };
 
     const updateUserProfile = async (displayName, photoURL) => {
         if (auth.currentUser) {
             try {
                 await updateProfile(auth.currentUser, { displayName, photoURL });
                 setUser(auth.currentUser);
             } catch (error) {
                 console.error("Error updating user profile:", error);
             }
         } else {
             return Promise.reject("No user is signed in");
         }
     };
 
     useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser);
             setLoading(false);
         });
         return () => unsubscribe();
     }, []);
 
     const authInfo = {
         registerUser,
         loginUser,
         googleLogin,
         githubLogin,
         updateUserProfile,
         logOut,
         user,
         loading,
     };
 
     return (
         <AuthContext.Provider value={authInfo}>
             {children}
         </AuthContext.Provider>
     );
 };
 
 export default AuthProvider;
 