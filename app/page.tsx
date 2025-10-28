import RootLayout from "./layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import AIInnovation from "./components/AIInnovation";
import AIMarketingTools from "./components/AIMarketingTools";
import Testimonials from "./components/LeaderShipTeam";

import Chatbot from "./components/Chatbot";
import LeadershipTeam from "./components/LeaderShipTeam";
export default function Home() {
  return (
   <>
      <Hero />
      <About />
      <Services />
      <AIInnovation />
      <AIMarketingTools />
      <LeadershipTeam />
      <Contact />
  </>
  );
}