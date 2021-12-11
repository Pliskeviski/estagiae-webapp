/* eslint-disable @next/next/no-page-custom-font */
import { memo } from 'react';
import Head from 'next/head';
import useJobsListStore from 'src/stores/jobs-list.store';
import {
  generateCorporateSchema,
  generateJobsSchema,
} from 'src/seo/generateJobsSchema';
import { Header } from '../header';

export interface IPageWrapperProps {
  children: React.ReactNode;
  title: string;
}

const seoDescription =
  'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em diversas áreas, de uma olhada nas vagas em aberto!';

export const PageWrapper = memo(({ title, children }: IPageWrapperProps) => {
  const { items } = useJobsListStore();

  const pageTitle = `${title} - Estagiaê`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://estagiae-storage.sfo3.cdn.digitaloceanspaces.com/static/static/Logo%20Estagiae.svg"
          key="favicon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://estagiae-storage.sfo3.cdn.digitaloceanspaces.com/fonts/PlusJakarta/PlusJakarta.css"
          rel="stylesheet"
        />
        <link
          href="https://estagiae-storage.sfo3.cdn.digitaloceanspaces.com/fonts/Gilroy/Gilroy.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          key="viewport"
        />
        <meta name="description" content={seoDescription} key="description" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={seoDescription} key="ogdesc" />
        <script type="application/ld+json">{generateCorporateSchema()}</script>
        <script type="application/ld+json">
          {items.length > 0 && generateJobsSchema(items)}
        </script>
        {/*
          TODO: add social og stuff
          https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/
        */}
      </Head>
      <Header />
      {children}
    </>
  );
});
