import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellerCentralUrls, sellingPartnerRegions } from '../selling-partner-api-regions'

export const JP = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.JP,
  currency: AmazonMarketplaceAdvertisingCurrency.JPY,
  id: 'A1VC38T7YXB528',
  name: 'Japan',
  uri: 'https://www.amazon.co.jp',
  webServiceUri: 'https://mws.amazonservices.jp',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.JP,
    region: marketplaceAdvertisingRegions.FE,
    bids: {
      sponsoredBrands: {
        min: 1000,
        max: 776000,
      },
      sponsoredProducts: {
        min: 200,
        max: 10000000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_TOKYO,
  },
  sellingPartner: {
    region: sellingPartnerRegions.FE,
    sellerCentralUrl: sellerCentralUrls.NA,
  },
})
