import styled from "styled-components";
import { PrimaryInputWSearchIcon } from "./primary-input";

interface HeaderProps {}

const TagHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: bold;
  font-size: 40px;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo>Cardápio</Logo>
      <div>
        <PrimaryInputWSearchIcon
          placeholder="Procurando por algo específico?"
          value={""}
          handleChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </TagHeader>
  );
}
