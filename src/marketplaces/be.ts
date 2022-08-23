import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const BE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.BE,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'AMEN7PMS3EDWL',
  name: 'Belgium',
  /**
   * This marketplace will lunch in the coming months.
   *
   * @see: https://www.aboutamazon.eu/news/job-creation-and-investment/amazon-announces-plans-to-launch-amazon-com-be-in-the-coming-months
   */
  uri: 'https://www.amazon.com.be',
  sellerCentralUri: 'https://sellercentral.amazon.com.be',
  vendorCentralUri: 'https://vendorcentral.amazon.com.be',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
