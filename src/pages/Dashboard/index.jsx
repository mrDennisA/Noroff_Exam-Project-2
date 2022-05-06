import { Link } from "react-router-dom";

// Components
import Heading from "../../components/Heading";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="wrapper">
        <Heading>Admin</Heading>
        <Link to="add-product">Add Product</Link>
        <Link to="edit-product">Edit Product</Link>
      </div>
    </div>
  );
}
