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

export const JP = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.JP,
  timeZone: AmazonMarketplaceTimeZone.ASIA_TOKYO,
  currency: AmazonMarketplaceAdvertisingCurrency.JPY,
  id: 'A1VC38T7YXB528',
  name: 'Japan',
  uri: 'https://www.amazon.co.jp',
  sellerCentralUri: 'https://sellercentral.amazon.co.jp',
  vendorCentralUri: 'https://vendorcentral.amazon.co.jp',
  webServiceUri: 'https://mws.amazonservices.jp',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.JP,
    region: marketplaceAdvertisingRegions.FE,
    bids: {
      sponsoredBrands: {
        min: 1000,
        max: 776_000,
      },
      sponsoredProducts: {
        min: 200,
        max: 10_000_000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_TOKYO,
  },
  sellingPartner: {
    region: sellingPartnerRegions.FE,
  },
})
