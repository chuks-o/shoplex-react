import fetch from "isomorphic-unfetch";
import { baseUrl } from "../../utils/variables";
import { auth, withAuthSync } from "../../utils/Auth";
import AccountLayout from "../../components/layouts/AccountLayout";
import Wishlist from "../../components/Dashboard/Product/Wishlist";

const Wishlists = (props) => {
  const { wishlists } = props;

  return (
    <AccountLayout {...props}>
      <div className="container mt-5">
        <div className="card border-0 shadow-sm my-5">
          <div className="card-body px-0 py-0">
            <div className="p-3 border-bottom">
              <h6 className="m-0">My Wishlists</h6>
            </div>
            <div className="p-lg-4 py-3">
              {wishlists.map((wishlist) => (
                <div className="col-md-10" key={wishlist.id}>
                  <Wishlist {...wishlist.product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

Wishlists.getInitialProps = async (ctx) => {
  const { token, accountId } = auth(ctx);
  const url = `${baseUrl}/wishlist/user/${accountId}`;

  try {
    const wish = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      data: { wishlists },
    } = await wish.json();

    return { wishlists };
  } catch (error) {}
};

export default withAuthSync(Wishlists);
