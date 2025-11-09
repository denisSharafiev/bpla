import React from 'react';
import styled from 'styled-components';
import { Wrench, Paintbrush, Hammer, Home } from 'lucide-react';

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.light};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.dark};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray[500]};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ServiceIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${props => props.theme.colors.primary};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.dark};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.gray[500]};
  line-height: 1.6;
`;

const services = [
  {
    icon: <Paintbrush size={24} />,
    title: 'Косметический ремонт',
    description: 'Обновление интерьера без изменения планировки'
  },
  {
    icon: <Wrench size={24} />,
    title: 'Капитальный ремонт',
    description: 'Полная перепланировка и замена коммуникаций'
  },
  {
    icon: <Hammer size={24} />,
    title: 'Евроремонт',
    description: 'Премиальная отделка с использованием современных материалов'
  },
  {
    icon: <Home size={24} />,
    title: 'Дизайн-проект',
    description: 'Разработка индивидуального дизайна интерьера'
  }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <div className="container">
        <SectionTitle>Наши услуги</SectionTitle>
        <SectionSubtitle>
          Полный спектр услуг по ремонту и отделке квартир, домов и офисов
        </SectionSubtitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
};

export default Services;