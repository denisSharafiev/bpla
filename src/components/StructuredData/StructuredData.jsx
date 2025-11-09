import React from 'react';

const StructuredData = ({ 
  type = "Organization",
  name = "123 ОМсБр Бригада Самарканда",
  description = "123 отдельная гвардейская мотострелковая бригада Вооруженных Сил Российской Федерации",
  url = "https://yourdomain.com",
  jobPostings = []
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "description": description,
    "url": url,
    "logo": "https://yourdomain.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU",
      "addressRegion": "Москва"
    },
    "jobPosting": jobPostings.map(job => ({
      "@type": "JobPosting",
      "title": job.title,
      "description": job.description,
      "datePosted": job.datePosted,
      "employmentType": "CONTRACTOR",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "123 ОМсБр Бригада Самарканда",
        "sameAs": url
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "RU",
          "addressRegion": "Москва и область"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "RUB",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": job.salaryMin,
          "maxValue": job.salaryMax,
          "unitText": "MONTH"
        }
      },
      "qualifications": job.qualifications,
      "responsibilities": job.responsibilities
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default StructuredData;