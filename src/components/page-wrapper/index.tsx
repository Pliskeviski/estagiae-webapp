/* eslint-disable react/no-danger */
/* eslint-disable @next/next/no-page-custom-font */
import { memo, useMemo } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import useJobsListStore from 'src/stores/jobs-list.store';
import { generateJobsSchema } from 'src/seo/generateJobsSchema';
import { Header } from '../header';

export interface IPageWrapperProps {
  children: React.ReactNode;
  title: string;
  customDescription?: string;
}

const baseDescription =
  'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em diversas áreas, de uma olhada nas vagas em aberto!';

export const PageWrapper = memo(
  ({ title, customDescription, children }: IPageWrapperProps) => {
    const { items } = useJobsListStore();

    const seoDescription = useMemo(
      () => customDescription || baseDescription,
      [customDescription]
    );

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
          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-CMP10W89F9');
                  `,
              }}
            />
          )}
          <meta name="description" content={seoDescription} key="description" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta
            property="og:description"
            content={seoDescription}
            key="ogdesc"
          />
          {/* <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "legalName": "Estagiaê",
                "description":
                  "A Estagiaê é uma plataforma de estágio que busca aprimorar a qualidade de vida de seus usuários, simplificando a busca e filtrando pelas melhores oportunidades!",
                "url": "https://estagiae.com.br",
                "logo": "https://estagiae-storage.sfo3.cdn.digitaloceanspaces.com/static/static/Logo%20Estagiae.svg"
              }
            `}
          </script> */}
          <script type="application/ld+json">
            {generateJobsSchema(items)}
          </script>
          {/*
          TODO: add social og stuff
          https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/
        */}
        </Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CMP10W89F9"
        />
        <Header />
        {children}
      </>
    );
  }
);
