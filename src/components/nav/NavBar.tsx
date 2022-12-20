import { Link } from "react-router-dom"


const NavBar = () => {


    return(
        <header className="header">
            <div className="header-container">
                <div className="nav-container">
                    <Link className='nav-items' to='/'>
                        Home
                    </Link>
                    <Link className='nav-items' to='/facts'>
                        Facts
                    </Link>
                    <Link className='nav-items' to='/support'>
                        Support
                    </Link>


                </div>


            </div>
        </header>
    )

}

export default NavBar
