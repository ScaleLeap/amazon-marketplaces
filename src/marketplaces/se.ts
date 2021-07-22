import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { amazonVendorCentralUriFactory } from '../amazon-vendor-central-uri-factory'
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
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
