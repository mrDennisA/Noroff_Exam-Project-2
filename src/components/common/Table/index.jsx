import { Table, Thead, Tbody, Tr, Th, Td } from "./index.styled";

export function TableContainer(props) {
  return <Table>{props.children}</Table>;
}

export function TableHead({ data }) {
  return (
    <Thead>
      <Tr>
        {data.map((item, index) => {
          return (
            <Th key={index}>
              <span>{item}</span>
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
}

export function TableBody({ data }) {
  return (
    <Tbody>
      <Tr>
        {data.map((item, index) => {
          return (
            <Td key={index}>
              <span>{item}</span>
            </Td>
          );
        })}
      </Tr>
    </Tbody>
  );
}
