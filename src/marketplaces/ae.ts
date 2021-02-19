import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellerCentralUrls, sellingPartnerRegions } from '../selling-partner-api-regions'

export const AE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.AE,
  currency: AmazonMarketplaceAdvertisingCurrency.AED,
  id: 'A2VIGQ35RCS4UG',
  name: 'United Arab Emirates',
  uri: 'https://www.amazon.ae',
  webServiceUri: 'https://mws.amazonservices.ae',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.AE,
    region: marketplaceAdvertisingRegions.EU,
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
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralUrl: sellerCentralUrls.NA,
  },
})
