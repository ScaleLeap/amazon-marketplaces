import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { sellingPartnerRegions } from '../selling-partner-api-regions/index'

export const PL = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.PL,
  currency: AmazonMarketplaceAdvertisingCurrency.PLN,
  id: 'A1C3SOZRARQ6R3',
  name: 'Poland',
  uri: 'https://www.amazon.pl',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
