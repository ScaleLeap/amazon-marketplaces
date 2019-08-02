import { AmazonMarketplace } from '../amazon-marketplace'
import { US } from './US'

/**
 * Canada
 */
export const CA = new AmazonMarketplace({
  countryCode: 'CA',
  currency: 'CAD',
  id: 'A2EUQ1WTGCTBG2',
  name: 'Canada',
  uri: 'https://www.amazon.ca',
  webServiceUri: 'https://mws.amazonservices.ca',
  advertising: Object.assign({}, US.advertising),
})
