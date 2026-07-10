

const Header = () => {
  return (
    <>

  <header className="site-nav">
  &nbsp;&nbsp;
  <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#" className="brand">
      Belly<span className="dot">Bliss</span>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <nav className="nav-links d-none d-md-flex">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#categories">Categories</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Recipes</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">About</a>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input
      type="text"
      className="nav-search"
      placeholder="Search a dish…"
      aria-label="Search"
    />
    &nbsp;&nbsp;
  </div>
</header>

</>

  )
}

export default Header