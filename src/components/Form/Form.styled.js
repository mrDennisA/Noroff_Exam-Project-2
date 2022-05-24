import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 400px;
  gap: 2rem;

  fieldset {
    display: grid;
    gap: 2rem;

    & > div:not(:last-child) {
      display: grid;
      gap: 1rem;

      @media only screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  &.register {
    @media only screen and (min-width: 576px) {
      max-width: 600px;
    }
  }
`;

export const Label = styled.label`
  display: grid;
  grid-template-rows: 1rem auto 1fr;
  font-size: 16px;
  font-weight: 300;
  color: var(--darkBrown);
`;

export const Input = styled.input`
  font-size: 1rem;

  line-height: 20px;
  background-color: var(--white);
  padding: 10px 8px;
  margin-top: 2px;
  box-shadow: 0 0 0 1px var(--warmGray1C50);
  border-radius: var(--radius);
  transition: box-shadow var(--timer) ease;

  :hover {
    box-shadow: 0 0 0 1px var(--lightBrown);
  }

  :focus {
    box-shadow: 0 0 0 1px var(--pink);
  }
`;

export const Textarea = styled.textarea`
  font-size: 1rem;
  line-height: 20px;
  background-color: var(--white);
  padding: 6px 8px;
  margin-top: 2px;
  box-shadow: 0 0 0 1px var(--warmGray1C50);
  border-radius: var(--radius);
  transition: box-shadow var(--timer) ease;
  resize: vertical;

  :hover {
    box-shadow: 0 0 0 1px var(--lightBrown);
  }

  :focus {
    box-shadow: 0 0 0 1px var(--pink);
  }
`;

export const Select = styled.select`
  padding: 10px 8px;
  margin-top: 2px;
  background-color: var(--white);
  line-height: 20px;
  font-size: 1rem;
  box-shadow: 0 0 0 1px var(--warmGray1C50);
  border-radius: var(--radius);
  transition: box-shadow var(--timer) ease;
  width: 100%;

  :hover {
    box-shadow: 0 0 0 1px var(--lightBrown);
  }

  :focus {
    box-shadow: 0 0 0 1px var(--pink);
  }
`;

export const Option = styled.option`
  font-size: 1rem;
`;
