/* eslint-disable @next/next/no-page-custom-font */
import { memo } from 'react';
import Head from 'next/head';

export interface IPageWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const PageWrapper = memo(({ title, children }: IPageWrapperProps) => {
  return (
    <>
      <Head>
        <title>{title} - Estagiaê</title>
        <meta name="description" content="Estagiaê" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="icon" href="/favicon.ico" key="favicon" />,
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://estagiae-storage.sfo3.cdn.digitaloceanspaces.com/fonts/PlusJakarta/PlusJakarta.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          key="viewport"
        />
      </Head>
      {children}
    </>
  );
});
