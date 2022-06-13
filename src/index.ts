export { getServerErrorMessage, processServerError, showErrorMessage } from './helpers/ProcessServerError'
export { CURENCY_NOK, NORVEGIAN_PHONE_NUMBER, ORDINARY, PERSONAL_NUMBER, YEARS } from './helpers/FormatNumberConstants'
export { COUNTRIES, POSTAL_CODE } from './helpers/NorwegianPostalCodes'
export { capitalizeFirstLetter, toLowercaseAndCapitalizeFirstLetter } from './helpers/CapitalizeFistLetter'
export * from './helpers/IsAdcuris'
export * from './helpers/UseOutsideClick'
export * from './helpers/IsNotEmpty'
export * from './helpers/Config'
export * from './helpers/Execute'
export * from './helpers/CreateInjectableContext'
export * from './helpers/InitializeIDBListenersOnMstSnapshots'
export * from './helpers/getGqlOperationName'
export * from './helpers/parseJwt'
export * from './helpers/EnvironmentsUrls'
export * from './helpers/EnvironmentToOperateTypes'
export * from './helpers/userTypingSignal'
export * from './helpers/generateSrvAuthBindings'
export * from './helpers/getSubdomain'
export * from './helpers/useEffectOnce'
export * from './helpers/clearCacheData'

export * from './utility/fetch'

export * from './clients/srvAuth'

export type { IUploadedDocument } from './interfaces/api/advoca/IUploadedDocument'
export type { IFeedBack, ISaveToDataBase } from './interfaces/api/advoca/ISaveToDataBase'

export * from './interfaces/enums'

export * from './hooks/useWindowWidthSise.hook'

export * from './global'
