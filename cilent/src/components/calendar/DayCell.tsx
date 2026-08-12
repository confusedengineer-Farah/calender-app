import { format, isSameDay, isSameMonth } from "date-fns"

interface DayCellProps{
    day: Date;
    currentDate: Date;
}

function DayCell({day, currentDate}: DayCellProps){
    const today = new Date();

    const isToday = isSameDay( day, today);
    const isCurrentMonth = isSameMonth(day, currentDate);

    const className = [
        "day-cell",
        isToday ? "today" : "",
        !isCurrentMonth ? "outside-month" : "",
    ]
    .filter(Boolean)
    .join("");
    return (
        <div className={className}>
            {format(day, "d")}
        </div>
    )
}

export default DayCell;