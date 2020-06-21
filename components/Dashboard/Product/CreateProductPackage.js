import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { baseUrl } from "../../../utils/variables";
import { moneyFormat } from "../../../utils/filters";

const CreateProductPackage = (props) => {
  const {
    packages,
    product,
    user,
    payload: { token },
  } = props;

  // page 2
  const [subPackage, setSubPackage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscription = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(product, subPackage);

    const subPayload = {
      userId: user.id,
      packageId: subPackage,
      productId: product.id,
    };

    console.log(subPayload);
    try {
      const url = `${baseUrl}/subscriptions/create`;
      const sub = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(subPayload),
      });

      const {
        data: { subscription },
      } = await sub.json();

      console.log(subscription);

      // Go to product review
      props.onSubscribe();
    } catch (error) {}
    setIsLoading(false);
  };

  return (
    <div className="payment-product-form">
      <div className="mb-3">
        <h5 className="mb-4">Select a package for this product</h5>
      </div>
      <form onSubmit={handleSubscription}>
        <div className="row">
          {packages.map(({ id, name, amount, description }) => (
            <div className="col-md-6" key={id}>
              <div className="form-group">
                <label>
                  <input
                    type="radio"
                    name="input-package"
                    value={id}
                    className="card-input-element d-none"
                    onChange={(e) => setSubPackage(e.target.value)}
                    id={`input-${id}`}
                  />
                  <div className="card bg-white d-flex flex-row justify-content-between align-items-center">
                    <div className="card-body">
                      <h6 className="text-dark mb-3">{name}</h6>
                      <h5 className="mb-4">{moneyFormat(amount)}</h5>
                      <small className="text-muted">{description}</small>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          ))}
          <div className="col-12">
            <div className="form-group">
              <button
                className="btn btn-primary font-weight-bold"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Please wait" : "Proceed"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <style jsx>{`
        /* radio styling */
        label {
          width: 100%;
          font-size: 1rem;
        }

        .card-input-element + .card {
          -webkit-box-shadow: none;
          box-shadow: none;
          border: 2px solid #e4e8ec;
          border-radius: 4px;
        }

        .card-input-element + .card:hover {
          cursor: pointer;
        }

        .card-input-element:checked + .card {
          border: 2px solid var(--primary);
          -webkit-transition: border 0.3s;
          -o-transition: border 0.3s;
          transition: border 0.3s;
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default CreateProductPackage;
