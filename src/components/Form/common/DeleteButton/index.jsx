import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

export default function DeleteButton(props) {
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();
  const http = useAxios();

  const url = `/hair-extenstions-collections/${props.id}`;

  async function handleDelete() {
    try {
      await http.delete(url);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setServerError(error);
    }
  }

  return (
    <button type="button" className="delete" onClick={handleDelete}>
      {serverError ? "Error" : "Delete"}
    </button>
  );
}
