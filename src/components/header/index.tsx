import Link from 'next/link';

import {
  HeaderContainer,
  LinkItem,
  LinksContainer,
  LogoContent,
} from './styles';

export const Header = () => {
  const linksMenu = [
    {
      label: 'Vagas',
      path: '/vagas',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <HeaderContainer>
      <LogoContent>Estagiaê</LogoContent>
      <LinksContainer amount={linksMenu.length}>
        {linksMenu.map(({ label, path }) => (
          <Link href={path} passHref key={path}>
            <LinkItem>{label}</LinkItem>
          </Link>
        ))}
      </LinksContainer>
    </HeaderContainer>
  );
};
