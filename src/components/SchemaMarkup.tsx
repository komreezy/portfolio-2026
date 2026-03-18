import Script from "next/script";

// LocalBusiness + LegalService Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LegalService"],
  "name": "Assured Justice Firm",
  "description": "DUI defense and personal injury law firm led by former prosecutor and licensed engineer Arash Jafary. Serving Alpharetta, Cobb County, Fulton County, and all of Georgia.",
  "url": "https://assuredjusticefirm.com",
  "telephone": "(678) 522-6273",
  "email": "Info@assuredjusticefirm.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4575 Webb Bridge Road, #2361",
    "addressLocality": "Alpharetta",
    "addressRegion": "GA",
    "postalCode": "30023",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0754",
    "longitude": "-84.2941"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Alpharetta",
      "containedInPlace": { "@type": "State", "name": "Georgia" }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Cobb County",
      "containedInPlace": { "@type": "State", "name": "Georgia" }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fulton County",
      "containedInPlace": { "@type": "State", "name": "Georgia" }
    },
    {
      "@type": "State",
      "name": "Georgia"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "priceRange": "Free Consultation",
  "paymentAccepted": "Contingency Fee",
  "currenciesAccepted": "USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "DUI Defense",
          "description": "Aggressive DUI defense from a former prosecutor who knows how the state builds cases."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Accident Representation",
          "description": "Personal injury representation for car accident victims with engineering expertise for crash analysis."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Truck Accident Representation",
          "description": "Legal representation for truck accident victims against trucking companies and their insurers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motorcycle Accident Representation",
          "description": "Fighting for motorcycle accident victims against bias and unfair blame."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pedestrian Accident Representation",
          "description": "Holding negligent drivers accountable for pedestrian injuries."
        }
      }
    ]
  }
};

// Attorney Schema
const attorneySchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Arash Jafary",
  "url": "https://assuredjusticefirm.com/about",
  "image": "https://assuredjusticefirm.com/arash-jafary-2.jpg",
  "description": "DUI defense and personal injury attorney. Former prosecutor at Fulton County DA's Office and Cobb County Solicitor General's Office. Licensed Engineer-in-Training.",
  "jobTitle": "Attorney at Law",
  "worksFor": {
    "@type": "LegalService",
    "name": "Assured Justice Firm"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Georgia State University College of Law"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Georgia State Bar License"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Engineer-in-Training (EIT)"
    }
  ],
  "knowsAbout": [
    "DUI Defense",
    "Personal Injury Law",
    "Car Accident Claims",
    "Truck Accident Litigation",
    "Motorcycle Accident Cases",
    "Pedestrian Accident Cases",
    "Georgia Criminal Law",
    "Accident Reconstruction"
  ],
  "areaServed": {
    "@type": "State",
    "name": "Georgia"
  }
};

interface SchemaMarkupProps {
  type?: "default" | "faq";
  faqItems?: Array<{ question: string; answer: string }>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaType = Record<string, any>;

export default function SchemaMarkup({ type = "default", faqItems }: SchemaMarkupProps) {
  const schemas: SchemaType[] = [localBusinessSchema, attorneySchema];

  // Add FAQ schema if provided
  if (type === "faq" && faqItems && faqItems.length > 0) {
    const faqSchema: SchemaType = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
    schemas.push(faqSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// Export individual schemas for use in specific pages
export { localBusinessSchema, attorneySchema };
