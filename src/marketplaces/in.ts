import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const IN = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IN,
  currency: AmazonMarketplaceAdvertisingCurrency.INR,
  id: 'A21TJRUUN4KGV',
  name: 'India',
  uri: 'https://www.amazon.in',
  sellerCentralUri: 'https://sellercentral.amazon.in',
  vendorCentralUri: 'https://www.vendorcentral.in',
  webServiceUri: 'https://mws.amazonservices.in',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.IN,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 1,
        max: 2000,
      },
      sponsoredProducts: {
        min: 1,
        max: 50000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_INDIA,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
