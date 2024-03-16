function Navbar() {
  return (
    <div className="px-10 pt-10">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-green-400">GEORGE</a>
        </div>
        <div className="flex-2">
          <ul className="menu menu-horizontal px-10">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
