
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <>
        <nav className=" w-full h-12 flex items-center gap-5 flex-row justify-center bg-purple-700">
            <h3 className="font-bold text-white"><Link to="/">Home</Link></h3>
            <h3 className="font-bold text-white"><Link to="/produtos">Produtos</Link></h3>
            <h3 className="font-bold text-white"><Link to="/contato">Contact</Link></h3>
            <h3 className="font-bold text-white"><Link to="/sobre">Sobre</Link></h3>
      </nav>
        </>
    )
}

export default NavBar