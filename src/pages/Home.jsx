import React from 'react';
import Layout from '../components/Layout';
import MobileOpenProvider from '../Contexts/MobileOpen';
import {
  ChartDiv, Container, ContentColumnDiv, ContentRowDiv,
} from '../assets/css/Home';
import TransferForm from '../components/TransferForm';
import TransactionsTable from '../components/TransactionsTable';
import StatisticsList from '../components/StatisticsList';
import Chart from '../components/Chart';

export default function Home() {
  return (
    <MobileOpenProvider>
      <Layout>
        <Container>
          <ContentRowDiv>
            <ChartDiv>
              <Chart />
            </ChartDiv>
            <TransferForm />
          </ContentRowDiv>
          <ContentColumnDiv>
            <TransactionsTable />
            <StatisticsList />
          </ContentColumnDiv>
        </Container>
      </Layout>
    </MobileOpenProvider>
  );
}
