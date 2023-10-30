import styled from 'styled-components';
import { colorA } from '../../../utils/colors';
import { footerHeight } from '../../../utils/theme';

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${colorA};
  height: ${footerHeight}px;
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  line-height: 25px;
  text-align: right;
  padding: 0 20px;
`;

const Footer = () => {
  return <StyledFooter>V0.9 - &copy;Sébastien Girard</StyledFooter>;
};

export default Footer;
