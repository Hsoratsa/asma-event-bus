import type { IPatientFullData, IUsersForOrders } from '../interfaces/directory.interfaces'

export interface IDirectoryEventBus {
    users: IPatientFullData[]
    selected_users: IPatientFullData[]
    request_for_users: {}
    request_for_selected_users: {}
    users_for_orders: IUsersForOrders[]
}
