import Button from '../../components/button/Button';
import { products } from '../../data/products';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const navigate = useNavigate();

  // Redirect falls das Produkt nicht gefunden wurde
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  return (
    <section className="font-[Nunito] max-h-screen mx-25 my-40 flex flex-col gap-20">
      <div className="flex justify-between items-center gap-2 font-bold ">
        <h2 className="text-4xl">{product?.name}</h2>
        <div className="h-0.25 bg-gray-600 flex-grow"></div>
        <h1 className="text-7xl uppercase text-gray-300">
          {product?.category}
        </h1>
      </div>
      <div className="flex gap-20 justify-between items-center">
        <img src={product?.img} alt={product?.name} />
        <div className="max-w-200 ">
          <p className="text-2xl leading-10">{product?.description}</p>
        </div>
      </div>
      <div className="flex justify-end cursor-pointer">
        <Button text="Back to Products" onClick={() => navigate('/products')} />
      </div>
    </section>
  );
};

export default ProductDetail;
