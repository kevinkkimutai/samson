import AboutMe from "@/components/AboutMe";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ServicesExpertise from "@/components/ServicesExpertise";
import Testimonials from "@/components/Testimonials";
import Script from "next/script";

export default function Home() {
  return (
  <div>
<Hero />
<AboutMe />
<ServicesExpertise />
<CaseStudies />
<Testimonials />
<Contact />

{/* schema script */}
<Script type="application/ld+json" id="structured-data">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Samson Mburu",
            "jobTitle": "Client Solutions & Servicing Executive",
            "description": "Expert in client solutions, business strategy, and customer experience.",
            "url": "https://yourportfolio.com",
            "image": "https://yourportfolio.com/profile.jpg",
            "worksFor": {
              "@type": "Organization",
              "name": "Your Company",
              "url": "https://yourcompany.com"
            },
            "sameAs": [
              "https://www.linkedin.com/in/yourprofile",
              "https://twitter.com/yourprofile"
            ],
            "email": "mailto:your.email@example.com",
            "telephone": "+1234567890",
          
          })}
        </Script>
  </div>
  );
}
