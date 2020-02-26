import { AmazonMarketplace, AmazonMarketplaceAdvertisingTimeZone } from '../amazon-marketplace'

export const AE = new AmazonMarketplace({
  countryCode: 'AE',
  currency: 'AED',
  id: 'A2VIGQ35RCS4UG',
  name: 'United Arab Emirates',
  uri: 'https://www.amazon.ae',
  webServiceUri: 'https://mws.amazonservices.ae',
  advertising: {
    uri: 'https://advertising-api-eu.amazon.com',
    bids: {
      sponsoredBrands: {
        min: 24,
        max: 18400,
      },
      sponsoredProducts: {
        min: 24,
        max: 18400,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_DUBAI,
  },
})
