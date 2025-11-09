import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const TextContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light[100]};
  margin-bottom: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.light[200]};
  margin-bottom: 1rem;
  font-family: 'Capture', Arial, sans-serif
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    font-family: 'Capture', Arial, sans-serif
  }
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, ${props => props.theme.colors.dark[300]}, ${props => props.theme.colors.gray[100]});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.light[200]};
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const MoreButton = styled.button`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.light[100]};
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);

  &:hover {
    background: #ea580c;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const InfoSection = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/about');
  };

  // Заглушки для изображений - замените на реальные URL
  const images = [
    { id: 1, src: '/images/photo1.png', alt: 'Бойцы бригады' },
    { id: 2, src: '/images/photo2.png', alt: 'Работа бригады' },
    { id: 3, src: '/images/photo3.png', alt: 'Мероприятия' },
  ];

  return (
    <Section>
      <Container>
        <TextContent>
          <Description>
            Сайт освещающий Специальную Военную Операцию и работу бойцов 123 Бригады "Самарканда".
            Сообщество объединяющее людей с целью достижения общей победы! Информационная помощь и поддержка участникам СВО и их родственникам.
          </Description>
        </TextContent>

        <ImagesGrid>
          {images.map((image) => (
            <ImageCard key={image.id}>
              <Image 
                src={image.src} 
                alt={image.alt}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <ImagePlaceholder style={{ display: 'none' }}>
                {image.alt}
              </ImagePlaceholder>
            </ImageCard>
          ))}
        </ImagesGrid>

        <ButtonContainer>
          <MoreButton onClick={handleMoreClick}>
            Подробнее о бригаде
          </MoreButton>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default InfoSection;