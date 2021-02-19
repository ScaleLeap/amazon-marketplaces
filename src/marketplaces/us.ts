import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'

export const US = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.US,
  currency: AmazonMarketplaceAdvertisingCurrency.USD,
  id: 'ATVPDKIKX0DER',
  name: 'United States',
  uri: 'https://www.amazon.com',
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
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
  },
})
