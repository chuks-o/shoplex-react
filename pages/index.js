import fetch from "isomorphic-unfetch";
import SearchProduct from "../components/HomePage/SearchProduct";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProductList from "../components/HomePage/ProductList";
import ProductCategories from "../components/HomePage/ProductCategories";
import { baseUrl } from "../utils/variables";

const Home = ({ products, categories }) => {
  return (
    <DefaultLayout>
      <div className="homepage--container">
        <SearchProduct />

        <div className="container index--body bg-white">
          <div className="row">
            <div className="col-md-12">
              <div className="card border mb-3">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <h5 className="font-weight-bold mb-2 mb-md-0">
                      Trade with total confidence on Shoplex
                    </h5>
                    <a
                      className="text-secondary font-weight-bold ml-auto "
                      href="#"
                    >
                      Learn how{" "}
                      <span className="fas fa-long-arrow-alt-right fa-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-3 col-md-4 mb-5">
                  <div className="rounded mb-2 p-3 bg-primary">
                    <h5 className="m-0 font-weight-bold text-white">
                      Categories
                    </h5>
                  </div>
                  <ProductCategories categories={categories} />
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="row mb-2">
                    <div className="col-md-12">
                      <h5 className="font-weight-bold text-muted">Trending</h5>
                    </div>
                  </div>
                  <div className="row">
                    {products.map((product) => (
                      <ProductList key={product.id} {...product} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .homepage--container {
            margin-top: 75px;
          }
        `}</style>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Open Sans", Helvetica, Arial, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </DefaultLayout>
  );
};

Home.getInitialProps = async (ctx) => {
  const url = `${baseUrl}/products`;
  const categoriesUrl = `${baseUrl}/products/main/categories`;

  try {
    const newProds = await fetch(url);
    const productCat = await fetch(categoriesUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const {
      data: { categories },
    } = await productCat.json();
    const {
      data: { products },
    } = await newProds.json();

    return { products, categories };
  } catch (error) {}
};

export default Home;
