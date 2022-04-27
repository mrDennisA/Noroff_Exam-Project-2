import styled from "styled-components";

export const Form = styled.form`
  display: grid;

  gap: 2rem;
`;

export const Label = styled.label`
  display: grid;

  font-size: 16px;
  font-weight: 300;
`;

export const Input = styled.input`
  font-size: 1rem;
  line-height: 20px;
  background-color: var(--white);
  padding: 6px 8px;

  box-shadow: 0 0 0 1px var(--warmGray1C50), 0 0 0 4px transparent;
  border-radius: var(--radius);
  transition: box-shadow var(--timer) ease;

  :focus {
    box-shadow: 0 0 0 1px var(--lightBrown), 0 0 0 4px var(--warmGray1C50);
  }
`;

export const Textarea = styled.textarea`
  font-size: 1rem;
  line-height: 20px;
  background-color: var(--white);
  padding: 6px 8px;

  box-shadow: 0 0 0 1px var(--warmGray1C50), 0 0 0 4px transparent;
  border-radius: var(--radius);
  transition: box-shadow var(--timer) ease;
  resize: vertical;

  :focus {
    box-shadow: 0 0 0 1px var(--lightBrown), 0 0 0 4px var(--warmGray1C50);
  }
`;
