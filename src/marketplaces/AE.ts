import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingRegion,
} from '../amazon-marketplace'

export const AE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.AE,
  currency: AmazonMarketplaceAdvertisingCurrency.AED,
  id: 'A2VIGQ35RCS4UG',
  name: 'United Arab Emirates',
  uri: 'https://www.amazon.ae',
  webServiceUri: 'https://mws.amazonservices.ae',
  advertising: {
    uri: 'https://advertising-api-eu.amazon.com',
    countryCode: AmazonMarketplaceAdvertisingCountryCode.AE,
    region: AmazonMarketplaceAdvertisingRegion.EUROPE,
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
