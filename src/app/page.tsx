import { SectionAbout } from "@/components/SectionAbout";
import { SectionHero } from "@/components/SectionHero";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className='main-container p-0'>
      <SectionHero />
      <SectionAbout />
    </Container>
  );
}
