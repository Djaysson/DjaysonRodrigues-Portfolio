import { DifferentiatedSkills } from '../../DifferentiatedSkills';
import { SkillIconCloud } from '../../SkillIconCloud';
import { Container } from './styles';

export function HeroSkillSection() {
  return (
    <Container data-aos="fade-up">
      <SkillIconCloud />
      <DifferentiatedSkills />
    </Container>
  );
}
