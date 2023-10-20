export interface IPromptEventBus {
    on_trigger_prompt: {
        showPrompt: boolean
        message: string
        location?: Location
    }
}
