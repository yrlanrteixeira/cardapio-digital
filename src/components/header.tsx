import styled from "styled-components";

const TagHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;
`;

const Logo = styled.a`
  color: white;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

export function Header() {
  return (
    <TagHeader>
      <Logo>Cardápio</Logo>
    </TagHeader>
  );
}
