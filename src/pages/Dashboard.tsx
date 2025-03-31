import styled from 'styled-components';
import { ProfileCard } from '../components/profile/ProfileCard';
import { TournamentCard } from '../components/tournaments/TournamentCard';
import { ProductCard } from '../components/shop/ProductCard';
import { StatsCard } from '../components/stats/StatsCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const Dashboard = () => {
  return (
    <Grid>
      <ProfileCard
        username="CyberPlayer"
        level={42}
        avatar="/avatar.jpg"
        coins={1500}
        stats={{
          hours: 156,
          tournaments: 23,
          wins: 12
        }}
      />

      <TournamentCard
        title="CS:GO Weekly Cup"
        prizePool={5000}
        status="live"
        startDate="2024-03-20 18:00"
        players={14}
        maxPlayers={16}
        onJoin={() => console.log('Joining tournament')}
      />

      <ProductCard
        title="Premium Time"
        price={100}
        image="/premium.jpg"
        onBuy={() => console.log('Buying premium')}
        status="success"
      />

      <StatsCard
        stats={[
          { label: 'Всего часов', value: '156' },
          { label: 'Турниров', value: '23' },
          { label: 'Побед', value: '12' },
          { label: 'Винрейт', value: '52%' }
        ]}
      />
    </Grid>
  );
}; 