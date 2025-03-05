import Home_Table from '../../assets/img/Home_Table.png';

const Home = () => {
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
      </div>
      <button className="p-3 bg-[#DAA520] rounded-md text-white cursor-pointer">
        Explore Categories
      </button>
      <img
        src={Home_Table}
        alt="Coffee Table"
        className="absolute right-10 top-50"
      />
    </section>
  );
};

export default Home;
