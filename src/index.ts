export function testAdd(a: number, b: number) {
    return a + b
}

export { getServerErrorMessage, processServerError, showErrorMessage } from './helpers/ProcessServerError'

export type { IUploadedDocument } from './interfaces/api/advoca/IUploadedDocument'
export type { IFeedBack, ISaveToDataBase } from './interfaces/api/advoca/ISaveToDataBase'

export * from './global'

export { COUNTRIES, POSTAL_CODE } from './helpers/NorwegianPostalCodes'

export { CURENCY_NOK, NORVEGIAN_PHONE_NUMBER, ORDINARY, PERSONAL_NUMBER, YEARS } from './helpers/FormatNumberConstants'
