import { useEffect, useState } from "react";
import { baseUrl } from "../../../utils/variables";
import ProductCondition from "./ProductCondition";
import { moneyFormat } from "../../../utils/filters";

export default function CreateProductReview(props) {
  const { payload, product } = props;

  const [completeProduct, setCompleteProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateProductStatus = async () => {
    setIsLoading(true);
    const url = `${baseUrl}/products/update/${product.id}`;
    const updateData = {
      status: "pending",
    };

    try {
      const update = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${payload.token}`,
        },
        body: JSON.stringify(updateData),
      });

      if (update) {
        alert("Product sent for review");
      }
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const url = `${baseUrl}/products/${product.id}`;
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token}`,
          },
        });
        const {
          data: { product: prod },
        } = await response.json();
        setCompleteProduct(prod);
      } catch (error) {}
    };

    getProduct();
  }, []);
  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="d-flex align-items-center">
              <div>
                <span className="text-muted">Title</span>
                <h5>{completeProduct.title}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <span className="text-muted">Description</span>
            <p>{completeProduct.description}</p>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <span className="text-muted">Price</span>
                <h5 className="text-primary font-weight-bold">
                  {moneyFormat(completeProduct.price)}
                </h5>
              </div>
              <div className="col-md-4 mb-3">
                <span className="text-muted">Category</span>
                <h5>{completeProduct.mainCategory.title}</h5>
              </div>
              <div className="col-md-4 mb-3">
                <span className="text-muted">Sub Category</span>
                <h5>{completeProduct.subCategory.name}</h5>
              </div>
            </div>
          </div>

          <div className="col-md-12 py-3">Product Images</div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <span className="text-muted">State</span>
                <h5>{completeProduct.state.name}</h5>
              </div>
              <div className="col-md-4 mb-3">
                <span className="text-muted">Local Government</span>
                <h5>{completeProduct.lga.name}</h5>
              </div>
              <div className="col-md-4 mb-3">
                <span className="text-muted">Condition</span>
                <p>
                  <ProductCondition condition={completeProduct.condition} />
                </p>
              </div>
            </div>
          </div>
          <div className="row border-top">
            <div className="col-md-12"></div>
          </div>

          <div className="col-md-12 mt-4">
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-primary"
                onClick={(e) => updateProductStatus(e)}
                disabled={isLoading}
              >
                Send Product for review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
