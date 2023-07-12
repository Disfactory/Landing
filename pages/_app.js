import React from 'react';
import CustomHead from '~/components/custom-head';
import { Roboto, Noto_Sans_TC } from '@next/font/google';

const roboto = Roboto({
  weight: ['100'], //variable font 不會有weight
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const notosansTC = Noto_Sans_TC({
  weight: ['400'], //variable font 不會有weight
  style: ['normal'],
  subsets: ['latin'], //default
});

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        //can use in single page in styled component
        :root {
          --roboto-font: ${roboto.style.fontFamily};
          --notosansTC-font: ${notosansTC.style.fontFamily};
        }
        html {
          font-family: ${notosansTC.style.fontFamily},
            ${roboto.style.fontFamily};
        }
      `}</style>
      <CustomHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
