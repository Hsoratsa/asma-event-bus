export interface IAsmaImportMapOverrides {
    setDefaultMap: (name: string, overrides: { name: string; entry: string }[]) => void
}
