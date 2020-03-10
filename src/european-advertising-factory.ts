import {
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceAdvertising,
} from './amazon-marketplace'
import { marketplaceAdvertisingRegions } from './marketplace-advertising-regions'

export function europeanAdvertisingFactory(
  countryCode: AmazonMarketplaceAdvertisingCountryCode,
): AmazonMarketplaceAdvertising {
  return {
    countryCode,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 3900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_PARIS,
  }
}
