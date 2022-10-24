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

export const AE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.AE,
  timeZone: AmazonMarketplaceTimeZone.ASIA_DUBAI,
  currency: AmazonMarketplaceAdvertisingCurrency.AED,
  id: 'A2VIGQ35RCS4UG',
  name: 'United Arab Emirates',
  uri: 'https://www.amazon.ae',
  sellerCentralUri: 'https://sellercentral.amazon.ae',
  vendorCentralUri: 'https://vendorcentral.amazon.me',
  webServiceUri: 'https://mws.amazonservices.ae',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.AE,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 40,
        max: 18400,
      },
      sponsoredProducts: {
        min: 24,
        max: 18400,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_DUBAI,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
