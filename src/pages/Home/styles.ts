import styled from "styled-components";

export const Card = styled.section`
  position: relative;
  background-image: url("/images/hero-bg.svg");
  background-size: cover;
  img#card-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`;

export const CardContainer = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;
  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  > h1 {
    color: ${(props) => props.theme.colors["base-title"]};
  }
  > span {
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  svg {
    padding: 8px;
    border-radius: 9999px;
  }
`;

export const CardCoffeeList = styled.div`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 54px;
  > h2 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column: 32px;
  }
`;
