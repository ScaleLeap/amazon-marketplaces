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

export const PL = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.PL,
  currency: AmazonMarketplaceAdvertisingCurrency.PLN,
  id: 'A1C3SOZRARQ6R3',
  name: 'Poland',
  uri: 'https://www.amazon.pl',
  sellerCentralUri: 'https://sellercentral.amazon.pl',
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.PL),
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.PL,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 20,
        max: 20000,
      },
      sponsoredProducts: {
        min: 200,
        max: 200000000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_WARSAW,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
