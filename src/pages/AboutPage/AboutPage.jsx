import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.dark[200]};
  padding-top: 5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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

const TabsContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const TabsHeader = styled.div`
  display: flex;
  background: ${props => props.theme.colors.dark[300]};
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-bottom: none;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.colors.gray[300]};
  }
`;

const Tab = styled.button`
  flex: 1;
  background: ${props => props.active ? props.theme.colors.secondary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.light[100] : props.theme.colors.light[200]};
  border: none;
  padding: 1.2rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  border-right: 1px solid ${props => props.theme.colors.gray[300]};

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.gray[100]};
    color: ${props => props.theme.colors.light[100]};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    min-width: 100%;
    text-align: center;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.colors.gray[300]};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const TabContent = styled.div`
  background: ${props => props.theme.colors.dark[300]};
  padding: 3rem;
  border-radius: 0 0 0.5rem 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.light[200]};
  margin-bottom: 1.5rem;
  text-align: justify;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
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

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.light[100]};
  margin: 2rem 0 1rem 0;
  border-left: 4px solid ${props => props.theme.colors.secondary};
  padding-left: 1rem;
`;

const List = styled.ul`
  color: ${props => props.theme.colors.light[200]};
  font-size: 1.125rem;
  line-height: 1.7;
  margin: 1rem 0;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'О бригаде',
      content: (
        <>
          <SectionTitle>123 бригада «Самарканда»</SectionTitle>
          <Paragraph>
            Воплощение мужества и верности воинскому долгу!
          </Paragraph>
          <Paragraph>
            На протяжении тысячелетней истории Отечества сильные духом и телом солдаты Отчизны 
            неизменно в кровопролитных боях и сражениях ковали славу и победу, отбрасывая захватчиков 
            далеко за пределы наших границ. Так и сегодня наши с вами земляки в составе 123-й отдельной 
            гвардейской мотострелковой ордена Доблести бригады имени Героя Советского Союза Климента 
            Ворошилова как ее уже принято называть Бригада «Самарканда», продолжая многовековые 
            победные традиции предков, с честью решают самые сложные задачи в ходе военной спецоперации 
            по демилитаризации и денацификации Украины.
          </Paragraph>
          <Paragraph>
            Наши воины защищают мирных граждан новых регионов и братской страны, уверенно освобождают 
            территорию Украины от неонацистов, находясь ежедневно на передовой борьбы с верными 
            пособниками и апологетами преступного киевского режима.
          </Paragraph>

          <ImagesGrid>
            {[1, 2, 3].map((id) => (
              <ImageCard key={id}>
                <Image 
                  src={`/images/about-${id}.png`} 
                  alt={`Бригада Самарканд ${id}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <ImagePlaceholder style={{ display: 'none' }}>
                  Фото бригады {id}
                </ImagePlaceholder>
              </ImageCard>
            ))}
          </ImagesGrid>
        </>
      )
    },
    {
      title: 'История бригады',
      content: (
        <>
          <SectionTitle>История 123 Бригады "Самарканда"</SectionTitle>
          <Paragraph>
            123-я отдельная гвардейская мотострелковая бригада (123-я гв. ОМсБр), входит в состав 
            3-й гвардейской Луганско-Северодонецкой общевойсковой армии Южного военного округа ВС России. 
            Ранее, это подразделение носило нумерацию 2-й ОМсБр 2-го армейского корпуса Народной милиции 
            Луганской Народной Республики. 1 января 2023 года, бригада вместе с 2-м АК, вошла в состав 
            8-й ОА ВС РФ со сменой номера на "123". Весной 2024 года, 2-й армейский корпус был преобразован 
            в 3-ю ОА ЮВО.
          </Paragraph>
        </>
      )
    },
    {
      title: 'Участие в СВО',
      content: (
        <>
          <SectionTitle>Участие в СВО</SectionTitle>
          <Paragraph>
            В зоне специальной военной операции России на Украине, 123-я гв. отдельная мотострелковая 
            бригада входит в "Южную" группировку войск ВС РФ. В 2023 году, бригада вела бои с ВСУ на 
            Артемовском направлении фронта.
          </Paragraph>
          <Paragraph>
            Командиром бригады являлся легендарный «Самарканд». На период 2024 года и по сегодняшнее время, 
            бригада Самарканда уверенно продвигается по направлению г. Северск выбивая вооруженные 
            формирования Украины с их позиций.
          </Paragraph>
        </>
      )
    },
    {
      title: 'Структура и вооружение',
      content: (
        <>
          <SectionTitle>Структура, состав и вооружение</SectionTitle>
          <Paragraph>
            После перехода 2-й отдельной мотострелковой бригады НМ ЛНР в состав ВС РФ под номером "123", 
            подразделение было укомплектовано личным составом и вооружением согласно нормативам, 
            принятым для Сухопутных войск ВС России.
          </Paragraph>
          <Paragraph>
            123-я мотострелковая бригада имеет в своем составе батальоны пехоты, разведывательный батальон, 
            роту снайперов, танковый батальон, а также зенитные ракетные и артиллерийские дивизионы.
          </Paragraph>
        </>
      )
    },
    {
      title: 'Формирование и боевой путь',
      content: (
        <>
          <SectionTitle>Формирование и боевой путь</SectionTitle>
          <Paragraph>
            123-я отдельная мотострелковая бригада берет свое начало от отдельной 2-й мотострелковой 
            бригады, сформированной 2014 году, в структуре 2-го Луганско-Северодонецкого армейского 
            корпуса Народной Милиции Луганской Народной Республики.
          </Paragraph>
          <Paragraph>
            2-я ОМсБр была создана на основе трех мотострелковых батальонов "Заря", "Дон" и "Хулиган", 
            а первым командиром подразделения стал полковник Олег Турнов. Боевой знамя, 2-я ОМсБр получила 
            1 ноября 2014 года.
          </Paragraph>
          <Paragraph>
            С 2014 года, бригада участвовала в боях на направлениях Бахмут (Артемовск) и Дебальцево. 
            Бойцы 2-й бригады брали Рубежное, Северодонецк, Лисичанск и освобождали многие населенные 
            пункты Луганской республики.
          </Paragraph>
          <Paragraph>
            5 мая 2016 года, 2-й бригаде присвоили почётное наименование "имени Героя Советского Союза 
            Климента Ворошилова".
          </Paragraph>

          <Subtitle>Современная история</Subtitle>
          <Paragraph>
            С началом специальной военной операции России на Украине, 123 бригада начала наступление 
            на позиции ВСУ в Луганской республике, а после стагнации фронта в конце 2022 года, вела 
            бои с противником к северу от Соледара.
          </Paragraph>
          <Paragraph>
            1 января 2023 года, 2-я гв. ОМсБр НМ ЛНР была переименована в 123-ю гв. ОМСБр ВС РФ с 
            сохранением наград и исторического формуляра предшественника и вошла в состав Сухопутных 
            войск России.
          </Paragraph>

          <Subtitle>Современные достижения</Subtitle>
          <Paragraph>
            В последнее время все чаще в телеэфирах и просторах интернета мы можем найти информацию 
            о продвижении бригады Самарканда по направлению г. Северск, о слаженной работе всех 
            подразделений, о силе духа бойцов и о том, как умело ведет к победе своих бойцов «Самарканд». 
            Информацию о том, что командир бригады и его бойцы являются воплощением настоящего мужества, 
            профессионализма и патриотизма!
          </Paragraph>
          <Paragraph>
            Вот только одна из последних выдержек репортажа 1 канала, военкора Алексея Кручинина:
            «Удары по позициям противника с земли и с воздуха. В деле бойцы 123-й бригады. Работают 
            быстро и четко: огонь из противотанкового орудия и тут же смена позиции. Чтобы сбить с 
            курса вражеские коптеры, применяют портативные средства радиоэлектронной борьбы. А своими 
            беспилотниками управляют виртуозно».
          </Paragraph>
          <Paragraph>
            Вы можете самостоятельно и следить за последними новостями напрямую через официальный 
            Telegram-канал подразделения, а так же в сообществе VK.
          </Paragraph>
        </>
      )
    }
  ];

  return (
    <PageContainer>
      <Container>
        <PageTitle>О бригаде "Самарканда"</PageTitle>

        <TabsContainer>
          <TabsHeader>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                active={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </Tab>
            ))}
          </TabsHeader>
          <TabContent>
            {tabs[activeTab].content}
          </TabContent>
        </TabsContainer>
      </Container>
    </PageContainer>
  );
};

export default AboutPage;