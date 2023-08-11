import  { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:5000/products"
        );
        const data = await response.json();
        setData(data);
        console.log(data)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-black text-3xl md:text-5xl font-bold">Our Products</h1>
      </div>

      {/* card section */}
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-ball loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
