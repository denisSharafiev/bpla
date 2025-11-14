import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Shield, Truck } from 'lucide-react';

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

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
  text-align: center;
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryCard = styled.div`
  background: ${props => props.theme.colors.dark[300]};
  border: 1px solid ${props => props.theme.colors.gray[100]};
  border-radius: 0.75rem;
  padding: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  color: ${props => props.theme.colors.light[200]};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray[100]};
  position: relative;
  padding-left: 1.5rem;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '•';
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    position: absolute;
    left: 0.5rem;
  }
`;

const GratitudeSection = styled.div`
  background: ${props => props.theme.colors.dark[300]};
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  margin: 3rem 0;
`;

const GratitudeTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 1rem;
`;

const GratitudeSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
`;

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const TaxSection = styled.div`
  background: ${props => props.theme.colors.dark[300]};
  border-radius: 0.75rem;
  padding: 2rem;
  margin: 3rem 0;
`;

const TaxTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

const TaxText = styled.p`
  color: ${props => props.theme.colors.light[200]};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const GuaranteesSection = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

const GuaranteesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 2rem;
`;

const GuaranteesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const GuaranteeItem = styled.div`
  background: ${props => props.theme.colors.dark[300]};
  border: 1px solid ${props => props.theme.colors.gray[100]};
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
`;

const GuaranteeIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`;

const GuaranteeText = styled.p`
  color: ${props => props.theme.colors.light[200]};
  font-weight: 500;
  line-height: 1.4;
`;

const HumanitarianPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const leftColumnCategories = [
    {
      title: 'БПЛА',
      icon: Package,
      items: [
        'Квадрокоптеры Mavic',
        'FPV дроны',
        'Аккумуляторы для FPV дронов и квадрокоптеров',
        'Зарядные устройства',
        'Ноутбуки',
        'Паяльные станции',
        '3D принтер'
      ]
    },
    {
      title: 'Авто и запчасти',
      icon: Truck,
      items: [
        'Автомобиль УАЗ, лада НИВА',
        'Автомобильный компрессор',
        'Воздушный компрессор',
        'Смазка',
        'Багги, квадроциклы',
        'Колеса',
        'Авто инструмент'
      ]
    },
    {
      title: 'Строительные инструменты и материалы',
      icon: Package,
      items: [
        'Генераторы (инверторный, дизельный, бензиновый)',
        'Бензопилы, шуруповерты, болгарка',
        'Цепи на бензопилы',
        'Канистры под бензин 20 л',
        'Диски на болгарку',
        'Топоры, молотки, ножовки',
        'Плёнка полиэтиленовая чёрная, изоспан',
        'Гвозди, саморезы (70,90,100,120)',
        'Масло для 4т моторов (мотюль) 20л',
        'Строй материал'
      ]
    }
  ];

  const rightColumnCategories = [
    {
      title: 'Связь и средства РЭБ',
      icon: Shield,
      items: [
        'Рации TYT',
        'РЭБ',
        'Детектор дронов «Булат»',
        'Станции Starlink',
        'Ретрансляторы'
      ]
    },
    {
      title: 'Маскировка',
      icon: Shield,
      items: [
        'Антидроновые накидки /одеяла',
        'Сетка рабица',
        'Рыболовные сети',
        'Маскировочные сети'
      ]
    },
    {
      title: 'Тактическая медицина',
      icon: Package,
      items: [
        'Аптечки 1-2 эшелона',
        'Жгут классический',
        'Обезболивающее Нефопам(шприц-тюбик)',
        'Ножницы атравматичные',
        'Противоожеговая повязка(Аполло, Evers Life, Burnshield)',
        'Бинт/салфетка гемостатическая',
        'ППИ 4" (Rhino, Leaf)',
        'ППИ 6" (Rhino, Leaf)',
        'Окклюзионный пластырь(вентилируемый/невентилируемый)',
        'Противохимический пакет (ИПП11)',
        'Бинт Z гемостатический(Гемофлекс, Гемоспас, Rhino)',
        'Бинт Z обычный для тампонады (Rhino, Гепоглос)',
        'Щиток на глаз',
        'Бинт когезивный (самофиксирующийся)',
        'Спасательное одеяло'
      ]
    }
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      text: 'Официальную заявку от воинской части на получение гуманитарного груза'
    },
    {
      icon: CheckCircle,
      text: 'Фото, видео отчет приемки гуманитарного груза'
    },
    {
      icon: CheckCircle,
      text: 'Подписание договоров и актов приемки передачи гуманитарного груза'
    },
    {
      icon: Truck,
      text: 'Предоставление автотранспорта для забора гуманитарного груза'
    },
    {
      icon: Shield,
      text: 'Сопровождение гуманитарного конвоя до подразделения'
    }
  ];

  return (
    <PageContainer>
      <Container>
        <BackButton onClick={handleBackClick}>
          ← На главную
        </BackButton>
        
        <PageTitle>Гуманитарное крыло</PageTitle>

        <Section>
          <SectionTitle>Нам требуется</SectionTitle>
          
          <TwoColumns>
            <Column>
              {leftColumnCategories.map((category, index) => (
                <CategoryCard key={index}>
                  <CategoryTitle>
                    <category.icon size={20} />
                    {category.title}
                  </CategoryTitle>
                  <ItemList>
                    {category.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex}>{item}</ListItem>
                    ))}
                  </ItemList>
                </CategoryCard>
              ))}
            </Column>

            <Column>
              {rightColumnCategories.map((category, index) => (
                <CategoryCard key={index}>
                  <CategoryTitle>
                    <category.icon size={20} />
                    {category.title}
                  </CategoryTitle>
                  <ItemList>
                    {category.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex}>{item}</ListItem>
                    ))}
                  </ItemList>
                </CategoryCard>
              ))}
            </Column>
          </TwoColumns>
        </Section>

        <GratitudeSection>
          <GratitudeTitle>
            Личный состав 123 бригады «Самарканда» будет благодарен за любую оказанную помощь
          </GratitudeTitle>
          <GratitudeSubtitle>нам требуется</GratitudeSubtitle>
          
          <RequirementsGrid>
            {[...leftColumnCategories, ...rightColumnCategories].map((category, index) => (
              <CategoryCard key={index}>
                <CategoryTitle>
                  <category.icon size={20} />
                  {category.title}:
                </CategoryTitle>
                <ItemList>
                  {category.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>{item}</ListItem>
                  ))}
                </ItemList>
              </CategoryCard>
            ))}
          </RequirementsGrid>
        </GratitudeSection>

        <TaxSection>
          <TaxTitle>Льготы для юридических лиц, оказывающих гуманитарную помощь:</TaxTitle>
          <TaxText>
            С 1 июля 2025 года неденежную гуманитарную и благотворительную помощь СВО можно учитывать 
            в налоговых расходах, операции по передаче имущества для СВО освобождаются от НДС. 
            Материальная помощь мобилизованным и членам их семей не облагается НДФЛ и страховыми взносами.
          </TaxText>
          <TaxText>
            Для гуманитарной и благотворительной помощи в поддержку специальной военной операции (СВО) 
            с 1 июля 2025 года действует особый порядок налогообложения и учета (Федеральный закон от 23.07.2025 N 227-ФЗ).
          </TaxText>
          <TaxText>
            <strong>Налог на прибыль и УСН:</strong> Организации и ИП с 1 июля 2025 года вправе учитывать 
            в налоговых расходах неденежную гуманитарную и благотворительную помощь, оказанную в рамках СВО.
          </TaxText>
          <TaxText>
            <strong>НДС:</strong> С 1 июля 2025 года организации и ИП освобождаются от обязанности исчислять 
            и уплачивать НДС при передаче имущества, работ и услуг для нужд СВО.
          </TaxText>
          <TaxText>
            <strong>Материальная помощь:</strong> Материальная помощь, оказанная мобилизованным, добровольцам, 
            а также членам их семей, не облагается НДФЛ и страховыми взносами.
          </TaxText>
        </TaxSection>

        <GuaranteesSection>
          <GuaranteesTitle>Мы гарантируем</GuaranteesTitle>
          <GuaranteesList>
            {guarantees.map((guarantee, index) => (
              <GuaranteeItem key={index}>
                <GuaranteeIcon>
                  <guarantee.icon size={24} />
                </GuaranteeIcon>
                <GuaranteeText>{guarantee.text}</GuaranteeText>
              </GuaranteeItem>
            ))}
          </GuaranteesList>
        </GuaranteesSection>
      </Container>
    </PageContainer>
  );
};

export default HumanitarianPage;