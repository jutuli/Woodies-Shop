import Home_Table from '../../assets/img/Home_Table.png';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // useNavigate() gibt uns die navigate-Funktion zurück mit der wir auf andere Seiten navigieren können

  return (
    <section className="min-h-dvh flex flex-col justify-center items-start mx-20 font-[Nunito] overflow-hidden gap-6">
      <div className="absolute right-0 top-0 w-1/4 h-full bg-rose-200 -z-10"></div>
      <div className="flex flex-col items-start justify-center max-w-200 gap-6">
        <h2 className="text-5xl leading-15">
          Are you looking for
          <span className="font-bold"> wooden furniture </span>
          for your place?
        </h2>
        <h3 className="text-7xl max-w-100 leading-25 font-bold">
          This is the Right Place
        </h3>
        <Button
          text="Explore Products"
          onClick={() => {
            navigate('/products'); // Navigiert zur Seite /products
          }}
        />
      </div>
      <img
        src={Home_Table}
        alt="Coffee Table"
        className="absolute right-10 top-50"
      />
    </section>
  );
};

export default Home;
