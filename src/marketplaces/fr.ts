import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { amazonVendorCentralUriFactory } from '../amazon-vendor-central-uri-factory'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { europeanSellerCentralUriFactory } from '../european-seller-central-uri-factory'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const FR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.FR,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A13V1IB3VIYZZH',
  name: 'France',
  uri: 'https://www.amazon.fr',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellerCentralUri: europeanSellerCentralUriFactory(),
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.FR),
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.FR),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
