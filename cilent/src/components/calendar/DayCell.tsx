import { format, isSameDay, isSameMonth } from "date-fns"

interface DayCellProps{
    day: Date;
    currentDate: Date;
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
}

function DayCell({
    day,
    currentDate,
    selectedDate,
    onSelectDate,
    }: DayCellProps){
    const today = new Date();

    const isToday = isSameDay( day, today);
    const isCurrentMonth = isSameMonth(day, currentDate);
    const isSelected = selectedDate ? isSameDay(day, selectedDate): false;

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
        onClick={() => onSelectDate(day)}>
            {format(day, "d")}
        </div>
    )
}

export default DayCell;