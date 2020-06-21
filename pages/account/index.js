import fetch from "isomorphic-unfetch";
import { auth, withAuthSync } from "../../utils/Auth";
import Overview from "../../components/Dashboard/Overview";
import AccountLayout from "../../components/layouts/AccountLayout";
import { baseUrl } from "../../utils/variables";

const AccountHome = (props) => {
  return (
    <AccountLayout {...props}>
      <div>
        <Overview {...props} />
      </div>
    </AccountLayout>
  );
};

AccountHome.getInitialProps = async (ctx) => {
  const { token, accountId } = auth(ctx);
  const url = `${baseUrl}/products/user/${accountId}`;

  try {
    const product = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      data: { products },
    } = await product.json();

    return { products };
  } catch (error) {}
};

export default withAuthSync(AccountHome);
