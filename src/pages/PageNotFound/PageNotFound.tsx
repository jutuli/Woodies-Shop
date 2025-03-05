const PageNotFound = () => {
  return (
    <section className="font-[Nunito] max-h-screen mx-25 my-40 flex flex-col gap-20">
      <div className="flex flex-col min-h-80 items-center justify-center gap-2 font-bold">
        <h2 className="text-4xl text-gray-700">Uuuuuups 😢</h2>
        <h1 className="text-3xl  text-gray-700">
          The page you are looking for does not exist.
        </h1>
      </div>
    </section>
  );
};

export default PageNotFound;
