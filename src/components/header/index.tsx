import Link from 'next/link';

import {
  CompanyName,
  HeaderContainer,
  LinkItem,
  LinksContainer,
  Logo,
  LogoContent,
} from './styles';

export const Header = () => {
  const linksMenu = [
    {
      label: 'Vagas',
      path: '/vagas',
    },
    {
      label: 'Sobre Nós',
      path: '/about-us',
    },
  ];

  return (
    <HeaderContainer>
      <Link href="/vagas" passHref>
        <LogoContent>
          <Logo
            src="https://estagiae-storage.sfo3.cdn.digitaloceanspaces.com/static/static/Logo%20Estagiae.svg"
            alt="Estagiaê"
          />
          <CompanyName>Estagiaê</CompanyName>
        </LogoContent>
      </Link>
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
