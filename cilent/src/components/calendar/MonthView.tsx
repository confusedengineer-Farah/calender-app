import DayCell from "./DayCell";
import type { CalendarEvent } from "../../types/event";
import{
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    startOfMonth,
    startOfWeek
} from "date-fns";

interface MonthViewProps{
    currentDate: Date;
    selectedDate: Date| null;
    onSelectDate:(date:Date) => void;
    events: CalendarEvent[];
}

function MonthView({
    currentDate,
    selectedDate,
    onSelectDate,
    events,
    }:MonthViewProps){
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);

    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    const days = eachDayOfInterval({
        start: calendarStart,
        end: calendarEnd,
    });
    return (
        <section>
            <div className="calendar-weekdays">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className="calendar-grid">
                {days.map((day) => (
                    <DayCell
                    key={day.toISOString()}
                    day={day}
                    currentDate={currentDate}
                    selectedDate={selectedDate}
                    onSelectDate={onSelectDate}
                    events={events}
                    />
                ))}
            </div>
        </section>
    )
}

export default MonthView;