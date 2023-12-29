// dynamicMetadata.js

const pagesMetadata = {
  home: {
    title: "Achiever Cloud Solution: Mobile App & Game Development Company",
    description:
      "Achiever Cloud Solution is the best service provider company...",
    keywords: "Salesforce integration, game development, web development...",
    // Add other relevant metadata
  },
  aboutUs: {
    title: "About Us | Achiever Cloud Solution",
    description:
      "Learn more about Achiever Cloud Solution - our mission, vision, and values...",
    keywords: "About us, Achiever Cloud Solution, company information...",
    canonical: "https://www.achievercloudsolution.com/about-us",
    // Add other relevant metadata
  },
  services: {
    title: "Our Services | Achiever Cloud Solution",
    description:
      "Explore our comprehensive range of services - Salesforce integration, game development, web development...",
    keywords:
      "Services, Achiever Cloud Solution services, Salesforce integration...",
    canonical: "https://www.achievercloudsolution.com/services",
    // Add other relevant metadata
  },

  contact: {
    title: "Contact Us | Achiever Cloud Solution",
    description:
      "Get in touch with Achiever Cloud Solution for inquiries, support, or collaboration...",
    keywords:
      "Contact us, Achiever Cloud Solution contact, Support, Collaboration...",
    canonical: "https://www.achievercloudsolution.com/contact-us",
    // Other relevant metadata
  },

  career: {
    title: "Careers at Achiever Cloud Solution",
    description:
      "Join our team at Achiever Cloud Solution. Explore career opportunities and grow with us...",
    keywords: "Careers, Jobs, Achiever Cloud Solution careers, Employment...",
    canonical: "https://www.achievercloudsolution.com/career",
    // Other relevant metadata
  },

  webDevelopment: {
    title:
      "Custom Web Development Services in Jaipur - AchieverCloudSolution.com",
    description:
      "AchieverCloudSolution.com offers professional web development services in Jaipur, specializing in creating responsive, user-friendly, and high-performance websites. From eCommerce to custom web applications, our tailored solutions meet all your business needs.",
    keywords:
      "Web Development, Website Design, Achiever Cloud Solution web development...",
    canonical: "https://www.achievercloudsolution.com/web-development",
    // Other relevant metadata
  },

  gameDevelopment: {
    title: "Game Development Services in Jaipur - AchieverCloudSolution",
    description:
      "Join hands with AchieverCloudSolution.com for cutting-edge game development services in Jaipur. Our expert team creates captivating and interactive gaming experiences, specializing in mobile, PC, and console game development. Transform your gaming ideas into reality with us.",
    keywords:
      "Game Development, Gaming Solutions, Achiever Cloud Solution game development...",
    canonical: "https://www.achievercloudsolution.com/game-development",
    // Other relevant metadata
  },

  digitalMarketing: {
    title: "Digital Marketing Services in Jaipur by AchieverCloudSolution",
    description:
      "Elevate your brand with AchieverCloudSolution's digital marketing services in Jaipur. We provide comprehensive online marketing strategies, including social media, email marketing, and content creation to boost your online visibility and engagement.",
    keywords:
      "Digital Marketing, Online Marketing, Achiever Cloud Solution digital marketing...",
    canonical: "https://www.achievercloudsolution.com/digital-marketing",
    // Other relevant metadata
  },

  salesforce: {
    title: "Expert Salesforce Services in Jaipur - AchieverCloudSolution",
    description:
      "Top-notch Salesforce services tailored for your business needs at AchieverCloudSolution.com. Based in Jaipur, we specialize in custom CRM solutions, Salesforce integration, and analytics to drive your sales growth. Partner with us for efficient and effective Salesforce management.",
    keywords:
      "Salesforce Integration, CRM Solutions, Achiever Cloud Solution Salesforce services...",
    canonical: "https://www.achievercloudsolution.com/salesforce",
    // Other relevant metadata
  },

  privacyPolicy: {
    title: "Privacy Policy | Achiever Cloud Solution",
    description:
      "Learn about how Achiever Cloud Solution handles your privacy and data. Our privacy policy details our commitment to safeguarding your information...",
    keywords:
      "Privacy policy, Data protection, Achiever Cloud Solution privacy...",
    // Other relevant metadata
  },
  paymentGateway: {
    title:
      "Secure Payment Gateway Solutions in Jaipur - AchieverCloudSolution - Simplify Transactions",
    description:
      "Get reliable and secure payment gateway solutions from AchieverCloudSolution in Jaipur. Our services ensure smooth and safe online transactions, enhancing your e-commerce efficiency. Trust us to integrate the best payment systems for your business needs.",
    keywords:
      "Payment Gateway Solutions, Online Transactions, Achiever Cloud Solution payment gateway...",
    canonical: "https://www.achievercloudsolution.com/payment-gateway",
    // Other relevant metadata
  },

  // Add more pages with their metadata as needed
};

// Function to set metadata based on page name
export function setMetadata(pageName) {
  const metadata = pagesMetadata[pageName];
  if (metadata) {
    document.title = metadata.title || document.title;

    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", metadata.description || "");
    }

    const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsTag) {
      metaKeywordsTag.setAttribute("content", metadata.keywords || "");
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", metadata.canonical);
    }
    // Add similar logic for other metadata tags as needed
  }
}

// Dynamically call setMetadata based on current page or route
// For example:
// setMetadata('aboutUs'); // For the About Us page
// setMetadata('services'); // For the Services page
// setMetadata('home'); // For the Home page
