import React from 'react';

const SEO = ({ 
  title = "123 ОМсБр Бригада 'Самарканда' - Служба по контракту в ВС РФ",
  description = "Присоединяйтесь к 123 отдельной мотострелковой бригаде 'Самарканда'. Контрактная служба в ВС РФ с полным обеспечением.",
  keywords = "123 бригада Самарканда, контрактная служба, ВС РФ, СВО, набор в армию",
  image = "/og-image.jpg",
  url = "/"
}) => {
  // Динамически обновляем meta теги
  React.useEffect(() => {
    // Title
    document.title = title;
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
    
    // Open Graph
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ru_RU' }
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    
  }, [title, description, keywords, image, url]);

  return null; // Этот компонент не рендерит ничего в DOM
};

export default SEO;