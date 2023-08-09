export interface IAsmaOverrides {
    'default-map-changed': (overrides: { name: string; entry: string }[]) => void
}
