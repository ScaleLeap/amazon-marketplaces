export interface AmazonSellingPartnerApiRegion {
  /**
   * Region code.
   */
  code: string

  /**
   * Region name.
   */
  name: string

  /**
   * Access endpoint URI.
   */
  endpoint: string

  /**
   * AWS region.
   */
  awsRegion: string
}

export class AmazonSellingPartnerApiRegion implements AmazonSellingPartnerApiRegion {
  constructor(data: AmazonSellingPartnerApiRegion) {
    Object.assign(this, data)
    Object.freeze(this)
  }
}
