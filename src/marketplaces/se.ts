import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'

export const SE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SE,
  currency: AmazonMarketplaceAdvertisingCurrency.SEK,
  id: 'A2NODRKZP88ZB9',
  name: 'Sweden',
  uri: 'https://www.amazon.se',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
  },
})
