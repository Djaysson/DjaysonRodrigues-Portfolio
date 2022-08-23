import { DifferentiatedSkills } from '../../DifferentiatedSkills';
import { SkillIconCloud } from '../../SkillIconCloud';
import { Container } from './styles';

export function HeroSkillSection() {
  return (
    <Container>
      <SkillIconCloud />
      <DifferentiatedSkills />
    </Container>
  );
}
