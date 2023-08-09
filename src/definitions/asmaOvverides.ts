export interface IAsmaOverrides {
    'default-map-changed': (name: string, overrides: { name: string; entry: string }[]) => void
}
