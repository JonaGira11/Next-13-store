import ProductImage from "@/components/ProductImage";

type Props = {
    params: {
        id: string;

    };
};

async function ProductPage({params: {id}}:Props)  {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json()
  return (
    <div><ProductImage product={product} /></div>
  )
}

export default ProductPage