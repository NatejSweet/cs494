import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { auth } from "../app/firebase";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";

import { db } from "../app/firebase";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";

import { UserData } from "../types/userData";

const userContext = createContext<{ user: User | null } | undefined>({ user: null });
const userDataContext = createContext<{ userData: UserData | null, updateUserData: (userData: UserData | null) => Promise<void>, resetUserData: ()=> void, setOccupation: (occupation: string) => void | undefined, setOrganization: (organization: string) => void | undefined, setLinkedIn: (linkedIn: string) => void | undefined, setGithub: (github: string) => void | undefined }>({ userData: null, updateUserData: async () => {}, setOccupation: () => {}, setOrganization: () => {}, setLinkedIn: () => {}, setGithub: () => {} });

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return unsubscribe;
  }, []);


  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
}

export function UserDataContextProvider({ children }: { children: ReactNode }) {
  const [occupation, setOccupation] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [linkedIn, setLinkedIn] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [userData, setUserData] = useState<UserData>({
    occupation: occupation,
    organization: organization,
    linkedIn: linkedIn,
    github: github,
  });
  const user = useUserContext();
  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef).then(async (docSnap) => {
        if (docSnap.exists()) {
          var data: UserData = docSnap.data() as UserData;
          setOccupation(data.occupation);
          setOrganization(data.organization);
          setLinkedIn(data.linkedIn);
          setGithub(data.github);
          setUserData(data);//probably unneccessary
        } else {
          let userObj: UserData = {
            occupation: "",
            organization: "",
            linkedIn: "",
            github: "",
          };
          setUserData(userObj);

          setDoc(docRef, userObj);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    setUserData({
      occupation: occupation,
      organization: organization,
      linkedIn: linkedIn,
      github: github,
    });
  }, [occupation, organization, linkedIn, github]);

  const updateUserData: (userData: UserData | null) => Promise<void> = async (userData) => {
    if (userData){
      if (!user?.uid) {
        console.error("User not logged in");
        return;
      }
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData);
      setUserData(userData);
    }
  }

  const resetUserData = () => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then(async (docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data() as UserData);
          } else {
            let userObj: UserData = {
              occupation: "",
              organization: "",
              linkedIn: "",
              github: "",
            };
            setUserData(userObj);
            setDoc(docRef, userObj);
          }
        }
      );
    }
  }


  return (
    <userDataContext.Provider value={{ userData, updateUserData, resetUserData, setOccupation, setOrganization, setLinkedIn, setGithub }}>
      {children}
    </userDataContext.Provider>
  );
}

export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error during sign in", error);
  }
};

export const logOut = () => {
  signOut(auth);
};

export function useUserContext() {
  const context = useContext(userContext);
  return context?.user;
}
export function useUserDataContext(){
  const context = useContext(userDataContext);
  return context;
}

