import { Container } from "./index.styled";

export default function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.data.totalItems / props.data.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => props.data.paginate(number)} className={props.data.currentPage === number ? "active" : ""}>
              <span>{number}</span>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
