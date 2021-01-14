const EshopNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand font-weight-bold" href="/">Mon e-shop</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Search" />
                </form>
            </div>
        </nav>
    )
}

export default EshopNavbar;