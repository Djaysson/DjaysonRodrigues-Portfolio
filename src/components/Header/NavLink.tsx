import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLinkContainer } from './styles';

interface NavProps {
  title: string;
  path: string;
  icon: string;
  iconDescription: string;
}
export default function NavLink({
  title,
  path,
  icon,
  iconDescription
}: NavProps) {
  const router = useRouter();
  const isActive = router.pathname === path;

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
