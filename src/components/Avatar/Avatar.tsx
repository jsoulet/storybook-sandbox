import { useUserContext } from "./UserContext";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
`;

const StyledPlaceholder = styled.div`
  height: 100px;
  width: 100px;
  background: slateblue;
  border-radius: 100%;
`;

const Avatar = () => {
  const { avatar } = useUserContext();
  if (!avatar) {
    return <StyledPlaceholder />;
  }
  return <StyledImage src={avatar} />;
};

export default Avatar;
