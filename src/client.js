import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '4vsc650u',
  dataset: 'production',
  apiVersion: '2022-01-18',
  useCdn: true,
});
