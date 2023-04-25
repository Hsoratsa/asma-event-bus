import type { IPatientFullFata, IUsersForOrders } from '../interfaces/directory.interfaces'

export interface IDirectoryEventBus {
    users: IPatientFullFata[]
    selected_users: IPatientFullFata[]
    request_for_users: {}
    request_for_selected_users: {}
    users_for_orders: IUsersForOrders[]
}
