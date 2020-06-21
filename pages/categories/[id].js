import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import ProductList from "../../components/HomePage/ProductList";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import ProductCategories from "../../components/HomePage/ProductCategories";
import EmptyProduct from "../../components/Dashboard/EmptyProduct";
import { baseUrl } from "../../utils/variables";

const Product = ({ products, categories }) => {
  const router = useRouter();

  return (
    <DefaultLayout>
      <div className="container mt-5 pt-5">
        <div className="row mt-4">
          <div className="col-md-12"></div>

          <div className="col-md-3">
            <h4 className="text-muted font-weight-bold mb-4">Categories</h4>

            <ProductCategories
              activeLinkId={router.query.id}
              categories={categories}
              color="white"
            />
          </div>
          <div className="col-md-9">
            <h4 className="text-muted font-weight-bold mb-4">Products</h4>
            <div className="row mb-5">
              {products.map((product) => (
                <ProductList key={product.id} {...product} />
              ))}

              {products.length === 0 && (
                <div className="col-md-12">
                  <div className="card border rounded-0">
                    <div className="card-body">
                      <div className="d-flex flex-column justify-content-center align-items-center zero-state-products">
                        <div className="">
                          <EmptyProduct />
                        </div>
                        <h6>No products</h6>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

Product.getInitialProps = async ({ query }) => {
  const { id } = query;
  const url = `${baseUrl}/products/categories/${id}`;
  const categoriesUrl = `${baseUrl}/products/main/categories`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const productCat = await fetch(categoriesUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const {
      data: { categories },
    } = await productCat.json();

    let { data } = await response.json();

    if (data) {
      const { products } = data;
      return { products, categories, query };
    }

    return { products: [], categories, query };
  } catch (error) {}
};

export default Product;
