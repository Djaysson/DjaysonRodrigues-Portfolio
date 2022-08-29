import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLinkContainer } from './styles';

interface NavProps {
  title: string;
  path: string;
  icon: string;
  iconDescription: string;
  includes?: boolean;
}
export default function NavLink({
  title,
  path,
  icon,
  iconDescription,
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
        <a>
          <img src={icon} alt={iconDescription} />
          <span>{title}</span>
        </a>
      </Link>
    </NavLinkContainer>
  );
}
