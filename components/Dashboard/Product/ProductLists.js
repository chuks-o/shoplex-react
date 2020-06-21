import React from "react";
import ProductList from "./ProductList";
import EmptyProduct from "../EmptyProduct";

export default function ProductLists({ products }) {
  return (
    <div className="p-md-4 p-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="col-md-10" key={product.id}>
            <ProductList {...product} />
          </div>
        ))
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center zero-state-products">
          <div className="">
            <EmptyProduct />
          </div>
          <h6>No products</h6>
        </div>
      )}

      <style jsx>{`
        .zero-state-products {
          min-height: 55vh;
        }
      `}</style>
    </div>
  );
}
