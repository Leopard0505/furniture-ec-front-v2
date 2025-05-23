import { Link } from "react-router";
import { PATH } from "../../constants/path";

export default function Me() {

  return (
    <div>
      <Link to={PATH.ME_ORDERS()}>Orders</Link>
      <br />
      <Link to={PATH.ME_FAVORITES()}>Favorites</Link>
    </div>
  )
}
