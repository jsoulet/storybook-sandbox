import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<Omit<Props, "label">>`
  --color-primary: darkSlateBlue;
  --color-secondary: seaGreen;
  --color-text: white;
  color: var(--color-text);
  background: var(${(props) => `--color-${props.variant}`});
  padding: 1em;
  font-weight: bold;
  font-size: ${(props) =>
    ({
      small: "0.8rem",
      medium: "1rem",
      large: "1.2rem",
      xlarge: "1.5rem"
    }[props.size])};
  border: none;
  border-radius: ${(props) => (props.hasRoundEdges ? "50px" : "0")};
`;

export interface Props {
  label: string;
  onClick: () => void;
  hasRoundEdges?: boolean;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large" | "xlarge";
}

const Button = ({ label, onClick, ...props }: Props) => {
  return <StyledButton onClick={onClick} {...props}>{label}</StyledButton>;
};

export default Button;
