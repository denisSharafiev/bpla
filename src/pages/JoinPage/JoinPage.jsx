import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RecruitmentSection from '../../components/RecruitmentSection/RecruitmentSection';
import ConditionsSection from '../../components/ConditionsSection/ConditionsSection';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.dark[200]};
  padding-top: 7rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BackButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.light[200]};
  border: 1px solid ${props => props.theme.colors.gray[300]};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: ${props => props.theme.colors.gray[100]};
    color: ${props => props.theme.colors.light[100]};
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const JoinPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <Container>
        <BackButton onClick={handleBackClick}>
          ← На главную
        </BackButton>
        
        <PageTitle>Присоединиться к бригаде</PageTitle>

        {/* Компонент с набором на службу */}
        <RecruitmentSection />

        {/* Компонент с условиями для кандидатов */}
        <ConditionsSection />
      </Container>
    </PageContainer>
  );
};

export default JoinPage;