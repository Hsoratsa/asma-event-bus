export interface IAsmaOverrides {
    'default-map-changed': { name: string; entry: string }[]
    'asma-override-map-changed': Record<string, string>
}
