import { AE } from './ae'
import { AU } from './au'
import { BR } from './br'
import { CA } from './ca'
import { CN } from './cn'
import { DE } from './de'
import { EG } from './eg'
import { ES } from './es'
import { FR } from './fr'
import { GB } from './gb'
import { IN } from './in'
import { IT } from './it'
import { JP } from './jp'
import { MX } from './mx'
import { NL } from './nl'
import { SA } from './sa'
import { SG } from './sg'
import { TR } from './tr'
import { US } from './us'

export const amazonMarketplaces = {
  /**
   * United Arab Emirates
   */
  AE,

  /**
   * Australia
   */
  AU,

  /**
   * Brazil
   */
  BR,

  /**
   * Canada
   */
  CA,

  /**
   * China
   */
  CN,

  /**
   * Germany
   */
  DE,

  /**
   * Egypt
   */
  EG,

  /**
   * Spain
   */
  ES,

  /**
   * France
   */
  FR,

  /**
   * United Kingdom
   */
  GB,

  /**
   * India
   */
  IN,

  /**
   * Italy
   */
  IT,

  /**
   * Japan
   */
  JP,

  /**
   * Mexico
   */
  MX,

  /**
   * Netherlands
   */
  NL,

  /**
   * Singapore
   */
  SA,

  /**
   * Singapore
   */
  SG,

  /**
   * Turkey
   */
  TR,

  /**
   * United States
   */
  US,
} as const

/**
 * An array of all of the `AmazonMarketplace` objects.
 */
export const amazonMarketplacesList = Object.values(amazonMarketplaces)
