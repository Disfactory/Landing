import Head from 'next/head';

/**
 *  @typedef {Object} OGProperties
 *  @property {string} [title]
 *  @property {string} [description]
 *  @property {string} [locale]
 *  @property {string} [url]
 *  @property {string} [site_name]
 *  @property {string} [type]
 *  @property {Image | null} [image]
 *  @property {string} [card]
 */
/**
 *  @typedef {Object} Image
 *  @property {string} [type]
 *  @property {string} [url]
 *  @property {string} [width]
 *  @property {string} [height]
 */
/**
 *  @param {Object} props
 *  @param {OGProperties} [props.properties={}]
 */

const OpenGraph = ({ properties = {} }) => {
  const { locale, url, site_name, title, type, description, image, card } =
    properties;

  return (
    <>
      <meta property='og:locale' content={locale || 'zh_TW'} key='og:locale' />
      <meta property='og:title' content={title} key='og:title' />
      <meta property='og:type' content={type || 'website'} key='og:type' />
      <meta
        property='og:description'
        content={description || ''}
        key='og:description'
      />
      <meta property='og:site_name' content={site_name} key='og:site_name' />
      {image && (
        <>
          <meta property='og:image' content={image.url} key='og:image' />
          <meta
            property='og:image:secure_url'
            //TODO：這邊不知道有沒有需要改動
            content='https://about.disfactory.tw/'
            key='og:image:secure_url'
          />
          <meta
            property='og:image:width'
            content={image.width}
            key='og:image:width'
          />
          <meta
            property='og:image:height'
            content={image.height}
            key='og:image:height'
          />
          <meta
            property='og:image:type'
            content={image.type}
            key='og:image:type'
          />
          <meta name='twitter:image' content={image.url} key='twitter:image' />
        </>
      )}
      <meta
        name='twitter:card'
        content={card || 'summary_large_image'}
        key='twitter:card'
      />
      <meta name='twitter:url' content={url} key='twitter:url' />
      <meta name='twitter:title' content={title} key='twitter:title' />
      <meta
        name='twitter:description'
        content={description || ''}
        key='twitter:description'
      />
    </>
  );
};

/**
 *  @typedef {Object} HeadProps
 *  @property {string} [title]
 *  @property {string} [description]
 *  @property {Image} [image]
 */
/**
 *  @param {Object} props
 *  @param {HeadProps} [props.headProps={}]
 */
export default function CustomHead({ headProps = {} }) {
  const siteInformation = {
    title: headProps.title ?? '農地違章工廠回報 | 地球公民基金會',
    description:
      headProps.description ??
      '你的回報是行動的開始，有大宗回報，政府才有動起來的壓力。',
    site_name: '農地違章工廠回報 | 地球公民基金會',
    url: 'https://about.disfactory.tw/',
    type: 'website',
    image: {
      width: '1200',
      height: '630',
      type: 'image/jpeg',
      url: headProps.image?.url ?? `https://about.disfactory.tw/images/og.jpg`,
    },
    card: 'summary_large_image',
  };

  return (
    <Head>
      <link rel='icon' href='/images/favicon.ico' />
      <title key='title'>{siteInformation.title}</title>
      <meta
        name='description'
        content={siteInformation.description}
        key='description'
      />
      <OpenGraph properties={siteInformation} />
      <meta name='application-name' content={siteInformation.title} />
    </Head>
  );
}
