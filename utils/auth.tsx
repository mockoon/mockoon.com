import {
  EmailAuthProvider,
  User,
  applyActionCode,
  createUserWithEmailAndPassword,
  getAuth,
  reauthenticateWithCredential,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updatePassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
  // user is set when user is authenticated but email is not necessarily verified
  const [user, setUser] = useState<User>(null);
  // is auth set when user is authenticated and email is verified
  const [isAuth, setIsAuth] = useState(false);
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    await auth.signOut();
  };

  const getIdToken = async (force = false) => {
    if (!auth.currentUser) {
      return null;
    }

    return await auth.currentUser.getIdToken(force);
  };

  const reload = async () => {
    await auth.currentUser.reload();
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const emailVerification = async () => {
    return await sendEmailVerification(auth.currentUser);
  };

  const applyEmailVerificationCode = async (code: string) => {
    await applyActionCode(auth, code);
  };

  const changePassword = async (params: {
    currentPassword: string;
    newPassword: string;
  }) => {
    await reauthenticateWithCredential(
      user,
      EmailAuthProvider.credential(user.email, params.currentPassword)
    );
    await updatePassword(auth.currentUser, params.newPassword);
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      if (user) {
        setUser(user);

        if (user.emailVerified) {
          setIsAuth(true);
        }
      } else {
        setUser(null);
        setIsAuth(false);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    authInstance: auth,
    isLoading,
    user,
    isAuth,
    logout,
    getIdToken,
    reload,
    signIn,
    signUp,
    emailVerification,
    applyEmailVerificationCode,
    changePassword
  };
};

export { useAuth };
