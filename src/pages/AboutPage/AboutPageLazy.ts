import { lazy } from 'react';
export const AboutPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setTimeout(() => resolve(import('./AboutPage.tsx')), 2000);
        })
);
