import { configWeb, EnvironmentEnums } from ".."

const EnvironmentsUrls = {
    
    local: {
        SRV_DIRECTORY: 'http://localhost:7001',
        SRV_CALENDAR: 'http://localhost:7011',
        SRV_PROXY: 'http://localhost:4430',
        SRV_STORAGE: 'http://localhost:4000',
        SRV_CHAT: 'http://localhost:7012',
        SRV_CONNECTOR: 'https://connector-dev.adopus.no',
        SRV_ARTIFACT: '',
    },
    dev: {
        SRV_DIRECTORY: 'https://dev.adopus.no/api/directory',
        SRV_CALENDAR: 'https://dev.adopus.no/api/calendar',
        SRV_PROXY: 'https://dev.adopus.no/api/proxy',
        SRV_STORAGE: 'https://dev.adopus.no/api/storage',
        SRV_CHAT: 'https://dev.adopus.no/api/chat',
        SRV_CONNECTOR: 'https://connector-test.adopus.no',
        SRV_ARTIFACT: '',
    },
    test: {
        SRV_DIRECTORY: 'https://test.adopus.no/api/directory',
        SRV_CALENDAR: 'https://test.adopus.no/api/calendar',
        SRV_PROXY: 'https://test.adopus.no/api/proxy',
        SRV_STORAGE: 'https://test.adopus.no/api/storage',
        SRV_CHAT: 'https://test.adopus.no/api/chat',
        SRV_CONNECTOR: 'https://connector-test.adopus.no',
        SRV_ARTIFACT: '',
    },
    stage: {
        SRV_DIRECTORY: 'https://stage.adopus.no/api/directory',
        SRV_CALENDAR: 'https://stage.adopus.no/api/calendar',
        SRV_PROXY: 'https://stage.adopus.no/api/proxy',
        SRV_STORAGE: 'https://stage.adopus.no/api/storage',
        SRV_CHAT: 'https://stage.adopus.no/api/chat',
        SRV_CONNECTOR: 'https://connector.adopus.no/stage',
        SRV_ARTIFACT: '',
    },
    prod: {
        SRV_DIRECTORY: 'https://www.adopus.no/api/directory',
        SRV_CALENDAR: 'https://www.adopus.no/api/calendar',
        SRV_PROXY: 'https://www.adopus.no/api/proxy',
        SRV_STORAGE: 'https://www.adopus.no/api/storage',
        SRV_CHAT: 'https://www.adopus.no/api/chat',
        SRV_CONNECTOR: 'https://connector.adopus.no',
        SRV_ARTIFACT: '',
    },
}

export function environmentUrls(){

    const env = configWeb('ENVIRONMENT_TO_OPERATE','no_env') as EnvironmentEnums
    
    return env !== "no_env" && window.__ENV?.['DEVELOPMENT'] && EnvironmentsUrls[env] || undefined
}