import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout"

const Navbar = () => {
  const {isPending, logout} = useLogout();
  const {user} = useSelector((store)=>store.user)
  return (
    <div className="flex items-center justify-between">
      Navbar - {user.displayName}
      <img src={user.photoURL} alt="" width={100} className="rounded-full"/>
      <button onClick={logout} className="btn btn-ghost">Logout</button>
      {isPending &&  <button  className="btn btn-ghost disabled" disabled >Logout</button>}
    </div>
  )
}

export default Navbar
