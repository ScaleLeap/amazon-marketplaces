import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { amazonVendorCentralUriFactory } from '../amazon-vendor-central-uri-factory'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const SE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SE,
  currency: AmazonMarketplaceAdvertisingCurrency.SEK,
  id: 'A2NODRKZP88ZB9',
  name: 'Sweden',
  uri: 'https://www.amazon.se',
  sellerCentralUri: 'https://sellercentral.amazon.se',
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.SE),
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.SE,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 90,
        max: 50000,
      },
      sponsoredProducts: {
        min: 18,
        max: 930000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_STOCKHOLM,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
