import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { amazonVendorCentralUriFactory } from '../amazon-vendor-central-uri-factory'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { sellingPartnerRegions } from '../selling-partner-api-regions'
import { DE } from './de'

export const NL = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.NL,
  timeZone: AmazonMarketplaceTimeZone.EUROPE_AMSTERDAM,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1805IZSGTT6HS',
  name: 'Netherlands',
  uri: 'https://www.amazon.nl',
  sellerCentralUri: 'https://sellercentral.amazon.nl',
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.NL),
  webServiceUri: DE.webServiceUri,
  advertising: europeanAdvertisingFactory(
    AmazonMarketplaceAdvertisingCountryCode.NL,
    AmazonMarketplaceAdvertisingTimeZone.EUROPE_AMSTERDAM,
  ),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
