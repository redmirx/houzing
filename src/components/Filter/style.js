import styled from "styled-components";
import { ReactComponent as houses } from "./../../assets/icons/houses.svg";
import { ReactComponent as search } from "./../../assets/icons/search.svg";
import { ReactComponent as filter } from "./../../assets/icons/filter.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 2rem;
  // Width fixed
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Icons = styled.div``;
Icons.Houses = styled(houses)`
  margin-left: 15px;
`;
Icons.Search = styled(search)`
  margin-right: 0.8rem;
`;
Icons.Filter = styled(filter)`
  margin-right: 0.8rem;
`;

const MenuWrapper = styled.div`
  padding: 3rem;
  border: 1px solid #e6e9ec;
  background-color: skyblue;
  /* border */
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export { Container, Icons, MenuWrapper, Section };