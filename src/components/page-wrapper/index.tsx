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
      </Head>
      {children}
    </>
  );
});
