import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const PrimaryInput = styled.input`
  position: relative;
  width: 352px;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: var(--bg-secondary);
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}
export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}
