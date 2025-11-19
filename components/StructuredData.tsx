export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rasheed Iskilu",
    "jobTitle": "Senior Full Stack Developer",
    "description": "Senior Full Stack Developer with 4+ years of experience architecting and delivering enterprise-grade healthcare and fintech solutions.",
    "url": "https://rasheediskilu.dev",
    "email": "rasheediskilu.dev@gmail.com",
    "telephone": "+234 91 35042 447",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "sameAs": [
      "https://www.linkedin.com/in/rasheed-dev/",
      "https://github.com/Raashot12",
      "https://x.com/rashdev_i"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      ".NET Core",
      "React Native",
      "Healthcare Software Development",
      "EHR Systems",
      "HIPAA Compliance",
      "Frontend Architecture",
      "Full Stack Development",
      "GraphQL",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Full Stack Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Lagos, Nigeria"
      },
      "skills": [
        "React.js", "Next.js", "TypeScript", "Node.js", ".NET Core", 
        "React Native", "GraphQL", "PostgreSQL", "AWS", "Docker"
      ]
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Plural Health",
      "url": "https://plural.health"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Lagos State University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
      }
    },
    "award": [
      "HackerRank Problem Solving (Intermediate)",
      "HackerRank Node.js (Intermediate)",
      "HackerRank JavaScript (Intermediate)",
      "HackerRank React (Basic)",
      "Google Technical Support Fundamentals"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Rasheed Iskilu - Full Stack Development Services",
    "description": "Professional full stack development services specializing in healthcare and fintech solutions",
    "provider": {
      "@type": "Person",
      "name": "Rasheed Iskilu"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Full Stack Development",
      "Frontend Architecture",
      "React Development",
      "Mobile App Development",
      "Healthcare Software Development",
      "EHR Systems Development"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rasheed Iskilu Portfolio",
    "url": "https://rasheediskilu.dev",
    "description": "Portfolio of Rasheed Iskilu, Senior Full Stack Developer specializing in healthcare and fintech solutions",
    "author": {
      "@type": "Person",
      "name": "Rasheed Iskilu"
    },
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}
