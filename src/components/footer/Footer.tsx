import Logo from '../../assets/img/Logo.png';
import FooterDesk from '../../assets/img/Footer_Desk.png';

const Footer = () => {
  return (
    <footer className="relative font-[Nunito] text-gray-800 bg-[#F1F1F1] flex justify-between items-center">
      <article className="pl-20 border-t-1 border-gray-300 w-2/3 py-6">
        <img src={Logo} alt="Woodies Logo" />
        <p>(012) 8967453</p>
        <p>woodies@gmail.com</p>
        <p>Jakarta, Indonesia</p>
      </article>
      <p className="absolute bottom-6 left-1/2">© 2020 WOODIES</p>
      <img src={FooterDesk} alt="Desk" />
    </footer>
  );
};

export default Footer;
