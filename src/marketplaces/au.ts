import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'

export const AU = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.AU,
  currency: AmazonMarketplaceAdvertisingCurrency.AUD,
  id: 'A39IBJ37TRP1C6',
  name: 'Australia',
  uri: 'https://www.amazon.com.au',
  webServiceUri: 'https://mws.amazonservices.com.au',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.AU,
    region: marketplaceAdvertisingRegions.FE,
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
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AUSTRALIA_SYDNEY,
  },
})
