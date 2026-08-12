import{
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    startOfMonth,
    startOfWeek
} from "date-fns";

interface MonthViewProps{
    currentDate: Date;
}

function MonthView({currentDate}:MonthViewProps){
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);

    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    const today = new Date();

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
                {days.map((day) => {
                    const isToday = isSameDay(day, today);
                    const isCurrentMonth = isSameMonth(day, currentDate);
                    
                    return (
                        <div
                        key={day.toISOString()}
                        className={`${isToday ? "today" : ""} ${
                            !isCurrentMonth ? "outside-month" : ""
                        }`}
                        >
                            {format(day,"d")}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MonthView;