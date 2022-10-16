export interface IDemoAsmaEventBus {
    first_event: { id: string; data: { name: string; title: string; score?: number } }
    seconnd_event: string | string[]
    demo_event: { id: string; preference?: string; score: number }
}
