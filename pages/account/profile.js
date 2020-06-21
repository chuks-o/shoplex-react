import AccountLayout from "../../components/layouts/AccountLayout";
import { withAuthSync } from "../../utils/Auth";

const Profile = (props) => {
  return (
    <AccountLayout {...props}>
      <div>
        <div>something light</div>
      </div>
    </AccountLayout>
  );
};

export default withAuthSync(Profile);
