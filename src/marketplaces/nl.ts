import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'
import { DE } from './de'

export const NL = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.NL,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1805IZSGTT6HS',
  name: 'Netherlands',
  uri: 'https://www.amazon.nl',
  sellerCentralUri: 'https://sellercentral.amazon.nl',
  webServiceUri: DE.webServiceUri,
  advertising: europeanAdvertisingFactory(
    AmazonMarketplaceAdvertisingCountryCode.NL,
    AmazonMarketplaceAdvertisingTimeZone.EUROPE_AMSTERDAM,
  ),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
  },
})
