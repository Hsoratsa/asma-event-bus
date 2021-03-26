export const is_adcuris = isAdcuris()

export function isAdcuris(): boolean {
    return window.location.host.includes('adcuris')
}