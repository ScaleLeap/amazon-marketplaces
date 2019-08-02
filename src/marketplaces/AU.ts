import { AmazonMarketplace } from '../amazon-marketplace'

export const AU = new AmazonMarketplace({
  countryCode: 'AU',
  currency: 'AUD',
  id: 'A39IBJ37TRP1C6',
  name: 'Australia',
  uri: 'https://www.amazon.com.au',
  webServiceUri: 'https://mws.amazonservices.com.au',
  advertising: {
    uri: 'https://advertising-api-fe.amazon.com',
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 7000,
      },
      sponsoredProducts: {
        min: 10,
        max: 141000,
      },
    },
  },
})
