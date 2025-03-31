import styled from 'styled-components';

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`; 