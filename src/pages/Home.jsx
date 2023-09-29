import React from 'react';
import Layout from '../components/Layout';
import MobileOpenProvider from '../Contexts/MobileOpen';
import { Container, ContentColumnDiv, ContentRowDiv } from '../assets/css/Home';
import CreditCard from '../components/CreditCard';
import TransferForm from '../components/TransferForm';
import TransactionsTable from '../components/TransactionsTable';
import StatisticsList from '../components/StatisticsList';

export default function Home() {
  return (
    <MobileOpenProvider>
      <Layout>
        <Container>
          <ContentRowDiv>
            <CreditCard />
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
