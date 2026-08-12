export interface CalendarEvent {
    id: string;
    title: string;
    dscription?: string;
    start: Date;
    end: Date;
    allDay: boolean;
    location?: string;
    color: string;
}