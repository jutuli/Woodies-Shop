import About_Bowl from '../../assets/img/About_Bowl.png';

const About = () => {
  return (
    <section className="font-[Nunito] max-h-screen mx-25 my-40 flex flex-col gap-20">
      <div className="flex justify-between items-center gap-2 font-bold ">
        <h2 className="text-4xl">Who we are</h2>
        <div className="h-0.25 bg-gray-600 flex-grow"></div>
        <h1 className="text-7xl uppercase text-gray-300">About Us</h1>
      </div>
      <div className="flex gap-20 justify-between items-center">
        <img src={About_Bowl} alt="Salad Bowl" />
        <div className="max-w-200 ">
          <p className="text-5xl leading-18">
            <span className="font-bold">WOODIES </span> is the{' '}
            <span className="font-bold"> home of modern wooden furniture</span>
          </p>
          <p className="text-3xl leading-10">
            the answer to your need for furniture with shapes, sizes and colors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
