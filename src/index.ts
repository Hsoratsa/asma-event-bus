export { getServerErrorMessage, processServerError, showErrorMessage } from './helpers/ProcessServerError'
export { CURENCY_NOK, NORVEGIAN_PHONE_NUMBER, ORDINARY, PERSONAL_NUMBER, YEARS } from './helpers/FormatNumberConstants'
export { COUNTRIES, POSTAL_CODE } from './helpers/NorwegianPostalCodes'
export { capitalizeFirstLetter } from './helpers/CapitalizeFistLetter'
export * from './helpers/IsAdcuris'
export * from './helpers/UseOutsideClick'
export * from './helpers/IsNotEmpty'
export * from './helpers/Config'
export * from './helpers/Execute'

export type { IUploadedDocument } from './interfaces/api/advoca/IUploadedDocument'
export type { IFeedBack, ISaveToDataBase } from './interfaces/api/advoca/ISaveToDataBase'
export * from './interfaces/enums'

export * from './hooks/useWindowWidthSise.hook'

export * from './global'
