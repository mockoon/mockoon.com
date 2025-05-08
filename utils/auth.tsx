import { useQueryClient } from '@tanstack/react-query';
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  MultiFactorError,
  TotpMultiFactorGenerator,
  TotpSecret,
  User,
  applyActionCode,
  createUserWithEmailAndPassword,
  getAuth,
  getMultiFactorResolver,
  multiFactor,
  reauthenticateWithCredential,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';

export const authProviderNames = {
  password: 'Email and password',
  'google.com': 'Google'
};

const useAuth = () => {
  const queryClient = useQueryClient();
  // user is set when user is authenticated but email is not necessarily verified
  const [user, setUser] = useState<User>(null);
  // is auth set when user is authenticated and email is verified
  const [isAuth, setIsAuth] = useState(false);
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const logout = async () => {
    await auth.signOut();
    queryClient.invalidateQueries({ queryKey: ['currentUser'] });
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

  const signInEmail = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const emailVerification = async () => {
    return await sendEmailVerification(auth.currentUser);
  };

  const applyEmailLinkActionCode = async (code: string) => {
    await applyActionCode(auth, code);
  };

  const reAuthenticate = async (password: string) => {
    await reauthenticateWithCredential(
      auth.currentUser,
      EmailAuthProvider.credential(user.email, password)
    );
  };

  const changePassword = async (newPassword: string) => {
    await updatePassword(auth.currentUser, newPassword);
  };

  const getTfaSecret = async () => {
    const mfaSession = await multiFactor(auth.currentUser).getSession();
    return await TotpMultiFactorGenerator.generateSecret(mfaSession);
  };

  const finalizeTfaEnrollment = async (
    totpSecret: TotpSecret,
    code: string
  ) => {
    const multiFactorAssertion =
      TotpMultiFactorGenerator.assertionForEnrollment(totpSecret, code);
    await multiFactor(auth.currentUser).enroll(
      multiFactorAssertion,
      'TOTP application'
    );
  };

  const unenrollTfa = async (id: string) => {
    await multiFactor(auth.currentUser).unenroll(id);
  };

  const verifyTfaCode = async (error: MultiFactorError, code: string) => {
    const mfaResolver = getMultiFactorResolver(auth, error);
    const multiFactorAssertion = TotpMultiFactorGenerator.assertionForSignIn(
      mfaResolver?.hints?.[0]?.uid,
      code
    );

    await mfaResolver.resolveSignIn(multiFactorAssertion);
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
    signInEmail,
    signInGoogle,
    signUp,
    emailVerification,
    applyEmailLinkActionCode,
    changePassword,
    getTfaSecret,
    finalizeTfaEnrollment,
    reAuthenticate,
    unenrollTfa,
    verifyTfaCode
  };
};

export { useAuth };
