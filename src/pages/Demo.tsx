import React from 'react';
import styled from 'styled-components';

const DemoContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 20px;
`;

const Demo = () => {
  return (
    <DemoContainer>
      <h1>Выберите тему оформления</h1>
      {/* Здесь будут компоненты для демонстрации */}
    </DemoContainer>
  );
};

export default Demo; 