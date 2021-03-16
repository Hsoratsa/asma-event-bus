export function testAdd(a: number, b: number) {
  return a + b;
}

export {
  getServerErrorMessage,
  processServerError,
  showErrorMessage,
} from "./helpers/ProcessServerError";

export type { IUploadedDocument } from "./interfaces/api/advoca/IUploadedDocument";

export { COUNTRIES, POSTAL_CODE } from "./helpers/NorwegianPostalCodes";
