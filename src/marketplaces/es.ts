import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'

export const ES = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.ES,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1RKKUPIHCS9HS',
  name: 'Spain',
  uri: 'https://www.amazon.es',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellerCentralUri: 'https://sellercentral.amazon.es',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.ES),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.EU,
  },
})
