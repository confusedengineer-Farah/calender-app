import { format, isSameDay, isSameMonth } from "date-fns"
import type { CalendarEvent } from "../../types/event";


interface DayCellProps{
    day: Date;
    currentDate: Date;
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
    events: CalendarEvent[];
}

function DayCell({
    day,
    currentDate,
    selectedDate,
    onSelectDate,
    events,
    }: DayCellProps){
    const today = new Date();

    const isToday = isSameDay( day, today);
    const isCurrentMonth = isSameMonth(day, currentDate);
    const isSelected = selectedDate ? isSameDay(day, selectedDate): false;

    const dayEvents = events.filter((events) => 
        isSameDay(events.start,day)
        
    )

    const className = [
        "day-cell",
        isToday ? "today" : "",
        !isCurrentMonth ? "outside-month" : "",
        !isSelected ? "selected" : ""
    ]
    .filter(Boolean)
    .join("");
    return (
        <div 
        className={className}
        onClick={() => onSelectDate(day)}
        >
        <div> {format(day, "d")}</div>  
        <div>
            {dayEvents.map((event)=>
              <div key={event.id}>
                {event.title}
              </div>
            )}
        </div>  


        </div>
    )
}

export default DayCell;