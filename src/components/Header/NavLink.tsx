import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavProps } from '../../types/types';

import { NavLinkContainer } from './styles';

export default function NavLink({
  title,
  path,
  icon,
  description,
  includes = false
}: NavProps) {
  const router = useRouter();

  function verificationIsActive() {
    if (includes) {
      return router.asPath.includes(path);
    }
    return path === router.asPath;
  }

  const isActive = verificationIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a aria-label={description}>
          <img src={icon} alt={'Ícone do ' + description} />
          <span>{title}</span>
        </a>
      </Link>
    </NavLinkContainer>
  );
}
