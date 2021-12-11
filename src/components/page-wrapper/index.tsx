/* eslint-disable @next/next/no-page-custom-font */
import { memo } from 'react';
import Head from 'next/head';
import useJobsListStore from 'src/stores/jobs-list.store';
import { generateJobsSchema } from 'src/seo/generateJobsSchema';
import { Header } from '../header';

export interface IPageWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const PageWrapper = memo(({ title, children }: IPageWrapperProps) => {
  const { items } = useJobsListStore();

  return (
    <>
      <Head>
        <title>{title} - Estagiaê</title>
        <meta name="description" content="Estagiaê" />
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
        <link rel="icon" href="/favicon.ico" key="favicon" />,
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
        <script type="application/ld+json">
          {items.length > 0 && generateJobsSchema(items)}
        </script>
      </Head>
      <Header />
      {children}
    </>
  );
});
