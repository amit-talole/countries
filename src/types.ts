import continents from './data/continents'
import countries from './data/countries'
import languages from './data/languages'

export type CountryCode = keyof typeof countries
export type ContinentsCode = keyof typeof continents
export type LanguageCode = keyof typeof languages


export interface ICountry {
    /**
     * Capital in English.
     */
    capital: string
    /**
     * Main continent alpha-2 code.
     */
    continent: ContinentsCode
    /**
     * Continent list alpha-2 codes (for transcontinental countries).
     */
    continents?: ContinentsCode[]
    /**
     * Currency alpha-3 codes.
     */
    currency: string[]
    /**
     * List of Country's spoken Languages (alpha-2 codes).
     */
    languages: LanguageCode[]
    /**
     * Country name in English.
     */
    name: string
    /**
     * Country name in the native language.
     */
    native: string
    /**
     * Specified in cases when entity is currently a part of another one.
     */
    parent?: CountryCode
    /**
     * Calling phone codes.
     */
    phone: number[]
  }

  export interface Language {
    /**
     * Language name in English.
     */
    name: string
    /**
     * Language name written natively.
     */
    native: string
    /**
     * Specified if Language is RTL.
     */
    rtl?: number
  }