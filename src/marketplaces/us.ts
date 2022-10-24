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

export const US = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.US,
  timeZone: AmazonMarketplaceTimeZone.AMERICA_LOS_ANGELES,
  currency: AmazonMarketplaceAdvertisingCurrency.USD,
  id: 'ATVPDKIKX0DER',
  name: 'United States',
  uri: 'https://www.amazon.com',
  sellerCentralUri: 'https://sellercentral.amazon.com',
  vendorCentralUri: 'https://vendorcentral.amazon.com',
  webServiceUri: 'https://mws.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.US,
    region: marketplaceAdvertisingRegions.NA,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 4900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AMERICA_LOS_ANGELES,
  },
  sellingPartner: {
    region: sellingPartnerRegions.NA,
  },
})
