import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0 0 0 0;
  opacity: 0;
  transform: scale(1);
  transition: opacity 0.4s ease;

  &.active {
    opacity: 1;
    transform: scale(1);
  }

  &.out {
    transition: 0.4s ease;
    transform: scale(1.1);
  }

  img {
    min-height: 400px;

    @media only screen and (min-width: 768px) {
      min-height: 500px;
    }
  }
`;

export const ButtonContainer = styled.div`
  z-index: 100;
  position: absolute;
  inset: 0 0 0 0;

  display: flex;
  flex-direction: column;

  button {
    transition: var(--timer) ease;
    opacity: 0.5;
    cursor: pointer;

    .arrow {
      width: 20px;
      height: 20px;
      fill: var(--white50);
      transition: var(--timer) ease;
    }

    &:hover .arrow {
      fill: var(--white);
    }
  }
`;

export const Arrows = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;

  button {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 2rem;
    box-shadow: 0 0 0.5rem 0.5rem var(--shadow);

    &::after {
      content: "";
      position: absolute;
      inset: 0 0 0 0;

      opacity: 0;

      transition: var(--timer) ease;
    }

    &:hover::after {
      opacity: 1;
    }
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const PrevButton = styled.button`
  background-image: linear-gradient(90deg, var(--white25), transparent);
  border-radius: 0 var(--radius) var(--radius) 0;

  &::after {
    background-image: linear-gradient(90deg, transparent, var(--white25));
    border-radius: 0 var(--radius) var(--radius) 0;
  }

  .arrow {
    transform: rotate(90deg);
  }
`;

export const NextButton = styled.button`
  background-image: linear-gradient(-90deg, var(--white25), transparent);
  border-radius: var(--radius) 0 0 var(--radius);

  &::after {
    background-image: linear-gradient(-90deg, transparent, var(--white25));
    border-radius: var(--radius) 0 0 var(--radius);
  }

  .arrow {
    transform: rotate(-90deg);
  }
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  margin-bottom: 0.5rem;

  &::after {
    content: "";
    display: flex;

    width: 8px;
    height: 8px;
    background-color: var(--shadowMiddle);
    box-shadow: 0 0 0 1px var(--white) inset, 0 0 1rem 1px var(--modal);
    border-radius: 50%;
    transition: var(--timer) ease;
  }

  &.active::after {
    background-color: var(--white);
    width: 12px;
    height: 12px;
  }

  &:hover::after {
    box-shadow: 0 0 0 1px var(--white) inset;
    width: 12px;
    height: 12px;
  }
`;
