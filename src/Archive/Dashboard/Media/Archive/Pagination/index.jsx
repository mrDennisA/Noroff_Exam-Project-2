import { Container } from "./index.styled";

// export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
export default function Pagination({ data }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.totalItems / data.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => data.paginate(number)} className={data.currentPage === number ? "active" : ""}>
              <span>{number}</span>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
