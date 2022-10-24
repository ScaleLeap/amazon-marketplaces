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

export const DE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.DE,
  timeZone: AmazonMarketplaceTimeZone.EUROPE_PARIS,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1PA6795UKMFR9',
  name: 'Germany',
  uri: 'https://www.amazon.de',
  sellerCentralUri: europeanSellerCentralUriFactory(),
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.DE),
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.DE),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
