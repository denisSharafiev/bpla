import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: ${props => props.theme.colors.dark[200]};
  padding: 4rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray[100]};
  overflow: hidden; /* Добавляем чтобы скрыть выезжающие элементы */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  /* Исправление для мобильных */
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 0.5rem; /* Уменьшаем отступы по бокам */
    width: 100%;
    box-sizing: border-box;
  }
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
    font-size: 1.8rem; /* Еще уменьшаем для мобильных */
    padding: 0 0.5rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem; /* Уменьшаем gap между карточками */
    margin-bottom: 2rem;
    width: 100%;
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
  box-sizing: border-box; /* Важно для правильного расчета размеров */

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1rem 0.5rem;
    min-height: 160px; /* Уменьшаем высоту карточек */
    width: 100%; /* Занимаем всю доступную ширину */
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 50px; /* Еще уменьшаем иконки */
    height: 50px;
    margin-bottom: 0.5rem;
  }
`;

const PositionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  display: block;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary}, #fdba74);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.7rem; /* Уменьшаем текст в плейсхолдере */
  text-align: center;
  padding: 3px;
  box-sizing: border-box;
  word-break: break-word;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.6rem;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  word-break: break-word; /* Перенос длинных слов */

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.9rem; /* Еще уменьшаем заголовки */
    margin-bottom: 0.25rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.light[200]};
  line-height: 1.4;
  margin: 0;
  word-break: break-word;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem; /* Еще уменьшаем описание */
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    width: 90%; /* Делаем немного уже */
    max-width: 280px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  padding: 0 0.5rem; /* Добавляем отступы по бокам */
`;

const RecruitmentSection = () => {
  const positions = [
    {
      image: "./icons/1.png.webp",
      title: "Врачи",
      description: "с опытом либо задатками руководства"
    },
    {
      image: "./icons/2.png.webp",
      title: "Врачи специалисты",
      description: "анестезиолог-реаниматолог, травматолог"
    },
    {
      image: "./icons/3.png.webp",
      title: "Фельдшера",
      description: ""
    },
    {
      image: "./icons/11.png.webp",
      title: "Санинструкторы",
      description: ""
    },
    {
      image: "./icons/4.png.webp",
      title: "Медсестры/Медбратья",
      description: "в том числе операционные"
    },
    {
      image: "./icons/5.png.webp",
      title: "Санитары",
      description: ""
    },
    {
      image: "./icons/6.png.webp",
      title: "Штурмовики",
      description: ""
    },
    {
      image: "./icons/7.png.webp",
      title: "Операторы БПЛА",
      description: ""
    },
    {
      image: "./icons/8.png.webp",
      title: "Артиллеристы",
      description: ""
    },
    {
      image: "./icons/9.png.webp",
      title: "Танкисты",
      description: ""
    },
    {
      image: "./icons/10.png.webp",
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
                {position.image ? (
                  <PositionImage 
                    src={position.image} 
                    alt={position.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextSibling;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                ) : null}
                <ImagePlaceholder style={{ display: position.image ? 'none' : 'flex' }}>
                  {position.title.split('/')[0]} {/* Упрощаем текст в плейсхолдере */}
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