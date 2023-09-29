import React from 'react';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import PaymentsIcon from '@mui/icons-material/Payments';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Container, SubContainer, Text } from '../assets/styles/StatisticsList';
import Statistic from './Statistic';

export default function StatisticsList() {
  return (
    <Container>
      <Text>Statistics</Text>
      <SubContainer>
        <Statistic logo={<SensorOccupiedIcon style={{ fontSize: '2.8em', color: '7468E4' }} />} value="220k" label="customers" />
        <Statistic logo={<PaymentsIcon style={{ fontSize: '3em', color: '51D5EC' }} />} value="230k" label="Remittance" />
        <Statistic logo={<VolunteerActivismIcon style={{ fontSize: '3em', color: '22B573' }} />} value="220k" label="customers" />
        <Statistic logo={<WatchLaterIcon style={{ fontSize: '3em', color: 'FFB648' }} />} value="220k" label="customers" />
      </SubContainer>
    </Container>
  );
}
