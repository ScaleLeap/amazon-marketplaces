import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const SA = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SA,
  timeZone: AmazonMarketplaceTimeZone.ASIA_RIYADH,
  currency: AmazonMarketplaceAdvertisingCurrency.SAR,
  id: 'A17E79C6D8DWNP',
  name: 'Saudi Arabia',
  uri: 'https://www.amazon.sa',
  sellerCentralUri: 'https://sellercentral.amazon.sa',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: {
    // UNDEFINED by Amazon
    bids: {
      sponsoredBrands: {
        min: 1,
        max: 1,
      },
      sponsoredProducts: {
        min: 1,
        max: 1,
      },
    },
    countryCode: AmazonMarketplaceAdvertisingCountryCode.SA,
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_RIYADH,
    region: marketplaceAdvertisingRegions.FE,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
