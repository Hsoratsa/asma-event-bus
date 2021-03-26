export function testAdd(a: number, b: number) {
    return a + b
}

export { getServerErrorMessage, processServerError, showErrorMessage } from './helpers/ProcessServerError'
export { CURENCY_NOK, NORVEGIAN_PHONE_NUMBER, ORDINARY, PERSONAL_NUMBER, YEARS } from './helpers/FormatNumberConstants'
export { COUNTRIES, POSTAL_CODE } from './helpers/NorwegianPostalCodes'
export { capitalizeFirstLetter } from './helpers/CapitalizeFistLetter'
export * from './helpers/IsAdcuris'

export type { IUploadedDocument } from './interfaces/api/advoca/IUploadedDocument'
export type { IFeedBack, ISaveToDataBase } from './interfaces/api/advoca/ISaveToDataBase'

export * from './global'
export * from './interfaces/enums'
