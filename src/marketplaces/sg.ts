import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const SG = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SG,
  currency: AmazonMarketplaceAdvertisingCurrency.SGD,
  id: 'A19VAU5U5O7RUS',
  name: 'Singapore',
  uri: 'https://www.amazon.sg',
  sellerCentralUri: 'https://sellercentral.amazon.sg',
  vendorCentralUri: 'https://vendorcentral.amazon.com.sg',
  webServiceUri: 'https://mws-fe.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.SG,
    region: marketplaceAdvertisingRegions.FE,
    bids: {
      sponsoredBrands: {
        min: 14,
        max: 10000,
      },
      sponsoredProducts: {
        min: 2,
        max: 110000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_SINGAPORE,
  },
  sellingPartner: {
    region: sellingPartnerRegions.FE,
  },
})
