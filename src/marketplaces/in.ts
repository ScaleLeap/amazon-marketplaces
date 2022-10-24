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

export const IN = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IN,
  timeZone: AmazonMarketplaceTimeZone.ASIA_INDIA,
  currency: AmazonMarketplaceAdvertisingCurrency.INR,
  id: 'A21TJRUUN4KGV',
  name: 'India',
  uri: 'https://www.amazon.in',
  sellerCentralUri: 'https://sellercentral.amazon.in',
  vendorCentralUri: 'https://vendorcentral.amazon.in',
  webServiceUri: 'https://mws.amazonservices.in',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.IN,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 100,
        max: 200_000,
      },
      sponsoredProducts: {
        min: 100,
        max: 500_000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_INDIA,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
