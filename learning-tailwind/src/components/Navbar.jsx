function Navbar() {
  return (
    <div className="px-10 pt-10  text-blue-300">
      <div className="navbar bg-base-100">
        <div className="flex-1 pl-20">
          <a className=" btn btn-ghost text-xl font-mono">George Gesite</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-xl ">
            <li className="px-10">
              <a>About</a>
            </li>
            <li className="px-10">
              <a>Project</a>
            </li>
            <li className="pl-10 pr-32">
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
