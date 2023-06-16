export interface ICalendarEventBus {
    on_open_calendar: {}
    /**
     * @param {string} filter_id can be question_id or qnr_id(query_id)
     */
    delete_qnr_task_relation: { filter_id: string }
}
