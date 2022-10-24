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

export const EG = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.EG,
  timeZone: AmazonMarketplaceTimeZone.AFRICA_CAIRO,
  currency: AmazonMarketplaceAdvertisingCurrency.EGP,
  id: 'ARBP9OOSHTCHU',
  name: 'Egypt',
  uri: 'https://www.amazon.eg',
  vendorCentralUri: 'https://vendorcentral.amazon.me',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.EG,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 70,
        max: 40_000,
      },
      sponsoredProducts: {
        min: 15,
        max: 550,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AFRICA_CAIRO,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
