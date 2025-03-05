import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center py-4 px-20 bg-transparent text-gray-800 ">
      <img src={Logo} alt="Woodies Logo" />
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
};

export default Nav;
