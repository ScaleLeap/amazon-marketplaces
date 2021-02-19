import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'

export const DE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.DE,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1PA6795UKMFR9',
  name: 'Germany',
  uri: 'https://www.amazon.de',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.DE),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.EU,
  },
})
