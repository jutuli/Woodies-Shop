import Button from '../../components/button/Button';
import { products } from '../../data/products';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  return (
    <section className="font-[Nunito] max-h-screen mx-25 my-40 flex flex-col gap-20">
      <div className="flex justify-between items-center gap-2 font-bold ">
        <h2 className="text-4xl">What we have</h2>
        <div className="h-0.25 bg-gray-600 flex-grow"></div>
        <h1 className="text-7xl uppercase text-gray-300">Products</h1>
      </div>
      <div className="flex gap-20 justify-between items-center">
        {products.map((product) => (
          <div className="relative">
            <img src={product.img} />
            <p className="absolute top-5 left-5 font-bold text-xl">
              {product.name}
            </p>
            <div className="absolute bottom-5 right-5">
              <Button
                text="Show Details"
                onClick={() => navigate(`/products/${product.id}`)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
