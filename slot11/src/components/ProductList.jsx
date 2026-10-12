import React from "react";
import { products } from "../data.";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ProductList() {
  const router = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button onClick={() => router(`/products/${product.id}`)}>
            Detail
          </button>
        </div>
      ))}
    </div>
  );
}
