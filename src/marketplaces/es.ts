import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { amazonVendorCentralUriFactory } from '../amazon-vendor-central-uri-factory'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { europeanSellerCentralUriFactory } from '../european-seller-central-uri-factory'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const ES = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.ES,
  timeZone: AmazonMarketplaceTimeZone.EUROPE_PARIS,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1RKKUPIHCS9HS',
  name: 'Spain',
  uri: 'https://www.amazon.es',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellerCentralUri: europeanSellerCentralUriFactory(),
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.ES),
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.ES),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
