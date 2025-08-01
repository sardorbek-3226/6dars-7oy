import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/config";
import toast from "react-hot-toast";
import { login } from "../app/features/userSlice";
import { addDoc, collection} from "firebase/firestore";

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const signup = async (userName, email, password) => {
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(email, password)
      if (!res.user) throw new Error("Authentication failed");

      const avatarURL = `https://api.dicebear.com/9.x/initials/svg?seed=${userName}`;

      await updateProfile(res.user, {
        displayName: userName,
        photoURL: avatarURL,
      });

      await addDoc(collection(db, "users"), {
        online: true,
        displayName: userName,
        photoURL: avatarURL,
        uid: res.user.uid,
      });

      const token = await res.user.getIdToken();
      console.log("User Token:", token);

      dispatch(
        login({
          displayName: userName,
          photoURL: avatarURL,
          uid: res.user.uid,
          email: res.user.email,
        })
      );

      toast.success(`Welcome, ${userName}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { signup, isPending };
};
