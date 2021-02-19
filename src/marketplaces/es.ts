import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { sellerCentralUrls, sellingPartnerRegions } from '../selling-partner-api-regions'

export const ES = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.ES,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1RKKUPIHCS9HS',
  name: 'Spain',
  uri: 'https://www.amazon.es',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.ES),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralUrl: sellerCentralUrls.EU,
  },
})
