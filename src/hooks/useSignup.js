import { useState } from "react"
import { useDispatch } from "react-redux" 
import {auth} from "../firebase/config"
import { login } from "../app/features/userSlice"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import toast from "react-hot-toast"
export const useSignup = ()=>{
    const [isPending, setIsPending] = useState(false);
    const dispatch = useDispatch()

    const signup =async (displayName, email, password) =>{
        setIsPending(true)
        try{
            const req = await createUserWithEmailAndPassword(auth, email, password);

            if(!req.user){
                throw new Error("authentication filed")
            }

            await updateProfile(auth.currentUser, {
                displayName,
                photoURL:"https://api.dicebear.com/9.x/initials/svg?seed="+displayName,
            })

            dispatch(login(req.user))
            toast.success(`Welcome, ${auth.currentUser.displayName}`)
        }catch(error){
            toast.error(error.message)
        }finally{
            setIsPending(false)
        }
    };

    return { signup, isPending}
}