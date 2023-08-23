import styled from 'styled-components';
import { colorA } from '../../../utils/colors';

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${colorA};
  height: 25px;
`;

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;
