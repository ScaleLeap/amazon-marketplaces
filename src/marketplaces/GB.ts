import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { DE } from './DE'

if (!DE.advertising) {
  throw new Error('Missing DE.advertising')
}

export const GB = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.GB,
  currency: AmazonMarketplaceAdvertisingCurrency.GBP,
  id: 'A1F83G8C2ARO7P',
  name: 'United Kingdom',
  uri: 'https://www.amazon.co.uk',
  webServiceUri: DE.webServiceUri,
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.UK,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 3100,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_LONDON,
  },
})
