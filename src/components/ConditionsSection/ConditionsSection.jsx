import React from 'react';
import styled from 'styled-components';
import { Phone, Send } from 'lucide-react';

const Section = styled.section`
  background: ${props => props.theme.colors.dark[200]};
  padding: 4rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray[100]};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light[100]};
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ConditionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConditionItem = styled.div`
  color: ${props => props.theme.colors.light[200]};
  line-height: 1.5;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '•';
    color: ${props => props.theme.colors.light[200]};
    font-weight: bold;
    position: absolute;
    left: 0.5rem;
  }
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 1.5rem;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.light[200]};
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.light[200]};
  text-decoration: none;
  padding: 1rem;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const ConditionsSection = () => {
  const conditions = [
    "3 млн подъемные",
    "От 220 ЗП + в первый месяц компенсация за следования к месту службы.",
    "Полное сопровождение и помощь от оформлении документов до прибытия в часть.",
    "Гарантированное поступление на службу в соответствии с должностью и предписанием части без посреднических подразделений.",
    "Списание долгов ФСПП до 10 млн (военнослужащим и супругам)",
    "Льготное поступление детей в ВУЗы РФ.",
    "Социальные льготы семьям военнослужащих (садики, школы, медицина, доп. образование, отдых в детских лагерях, санаторно-курортное лечение)",
    "Компенсация на приобретение твердого топлива.",
    "Реализуется проект по системе долговременного ухода за пожилыми гражданами и инвалидами (в семье военнослужащего)",
    "Бесплатная юридическая помощь.",
    "Статус ветерана боевых действий.",
    "Страховые выплаты.",
    "Сохранение места на текущем месте работы. (В отдельных случаях с выплатой средней зарплаты в зависимости от организации)",
    "Кредитные и налоговые каникулы на время службы.",
    "В зависимости от региона регистрации предоставляется в собственность земельный участок."
  ];

  return (
    <Section id="conditions">
      <Container>
        <Title>Условия для кандидатов</Title>
        
        <ConditionsList>
          {conditions.map((condition, index) => (
            <ConditionItem key={index}>
              {condition}
            </ConditionItem>
          ))}
        </ConditionsList>

        <ContactSection>
          <ContactSubtitle>
            Чтобы присоединиться к нашей бригаде, пишите нам в телеграмм
          </ContactSubtitle>
          
          <ContactGrid>
            <ContactItem href="tel:+79869149298">
              <Phone size={20} />
              +7 (986) 914-92-98
            </ContactItem>
            <ContactItem href="https://t.me/Tiimy_Turner17" target="_blank" rel="noopener noreferrer">
              <Send size={20} />
              @Tiimy_Turner17
            </ContactItem>
            <ContactItem href="tel:+79164641168">
              <Phone size={20} />
              +7 (916) 464-11-68
            </ContactItem>
            <ContactItem href="https://t.me/Tiimy_Turner17" target="_blank" rel="noopener noreferrer">
              <Send size={20} />
              @Tiimy_Turner17
            </ContactItem>
          </ContactGrid>
        </ContactSection>
      </Container>
    </Section>
  );
};

export default ConditionsSection;