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

export const SG = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SG,
  timeZone: AmazonMarketplaceTimeZone.ASIA_SINGAPORE,
  currency: AmazonMarketplaceAdvertisingCurrency.SGD,
  id: 'A19VAU5U5O7RUS',
  name: 'Singapore',
  uri: 'https://www.amazon.sg',
  sellerCentralUri: 'https://sellercentral.amazon.sg',
  vendorCentralUri: 'https://vendorcentral.amazon.com.sg',
  webServiceUri: 'https://mws-fe.amazonservices.com',
  launchDate: '2017-07-01',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.SG,
    region: marketplaceAdvertisingRegions.FE,
    bids: {
      sponsoredBrands: {
        min: 14,
        max: 10_000,
      },
      sponsoredProducts: {
        min: 2,
        max: 110_000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_SINGAPORE,
  },
  sellingPartner: {
    region: sellingPartnerRegions.FE,
  },
})
