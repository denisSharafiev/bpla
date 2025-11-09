import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: ${props => props.theme.colors.dark[200]};
  padding: 4rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray[100]};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.light[100]};
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  text-transform: uppercase;
  line-height: ${props => props.theme.typography.lineHeight.normal};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 3rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: ${props => props.theme.colors.dark[300]};
  border: 1px solid ${props => props.theme.colors.gray[100]};
  border-radius: 0.75rem;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PositionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const ImagePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary}, #fdba74);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
`;

const CardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.light[200]};
  line-height: 1.4;
  margin: 0;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.light[100]};
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: #ea580c;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const RecruitmentSection = () => {
  const positions = [
    {
      image: "./icons/1.png.webp", // Врачи
      title: "Врачи",
      description: "с опытом либо задатками руководства"
    },
    {
      image: "./icons/2.png.webp", // Врачи специалисты
      title: "Врачи специалисты",
      description: "анестезиолог-реаниматолог, травматолог"
    },
    {
      image: "./icons/3.png.webp", // Фельдшера
      title: "Фельдшера",
      description: ""
    },
    {
      image: "./icons/11.png.webp", // Санинструкторы
      title: "Санинструкторы",
      description: ""
    },
    {
      image: "./icons/4.png.webp", // Медсестры/Медбратья
      title: "Медсестры/Медбратья",
      description: "в том числе операционные"
    },
    {
      image: "./icons/5.png.webp", // Санитары
      title: "Санитары",
      description: ""
    },
    {
      image: "./icons/6.png.webp", // Штурмовики
      title: "Штурмовики",
      description: ""
    },
    {
      image: "./icons/7.png.webp", // Операторы БПЛА
      title: "Операторы БПЛА",
      description: ""
    },
    {
      image: "./icons/8.png.webp", // Артиллеристы
      title: "Артиллеристы",
      description: ""
    },
    {
      image: "./icons/9.png.webp", // Танкисты
      title: "Танкисты",
      description: ""
    },
    {
      image: "./icons/10.png.webp", // Водители
      title: "Водители",
      description: "категории В, С"
    },
  ];

  return (
    <Section id="recruitment">
      <Container>
        <Title>
          Объявлен набор на контрактную службу в 123 ОГв.МСБр
        </Title>
        
        <Subtitle>Требуются:</Subtitle>

        <Grid>
          {positions.map((position, index) => (
            <Card key={index}>
              <ImageWrapper>
                <PositionImage 
                  src={position.image} 
                  alt={position.title}
                  onError={(e) => {
                    // Если картинка не загрузилась, показываем заглушку
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <ImagePlaceholder style={{ display: 'none' }}>
                  {position.title}
                </ImagePlaceholder>
              </ImageWrapper>
              <CardTitle>{position.title}</CardTitle>
              {position.description && (
                <CardDescription>{position.description}</CardDescription>
              )}
            </Card>
          ))}
        </Grid>

        <ButtonContainer>
          <ContactButton 
            href="https://t.me/Tiimy_Turner17" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Подать заявку на службу
          </ContactButton>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default RecruitmentSection;