import styled from 'styled-components';

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.neon};
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: 15px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const DemoContent = () => (
  <DemoGrid>
    <Card>
      <Title>Игровые ПК</Title>
      <Text>RTX 4090, 32GB RAM</Text>
      <Text>240Hz Мониторы</Text>
      <Button>Подробнее</Button>
    </Card>

    <Card>
      <Title>Турниры</Title>
      <Text>CS:GO, Dota 2, Valorant</Text>
      <Text>Призовой фонд: 50,000₽</Text>
      <Button>Участвовать</Button>
    </Card>

    <Card>
      <Title>Акции</Title>
      <Text>Ночные марафоны</Text>
      <Text>Скидки для команд</Text>
      <Button>Все акции</Button>
    </Card>
  </DemoGrid>
);

export default DemoContent; 