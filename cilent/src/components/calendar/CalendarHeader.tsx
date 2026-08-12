import { format } from "date-fns";

interface CalendarHeaderProps{
    currentDate: Date;
    onPreviousMonth: () => void;
    onNextMonth: () => void;
    onToday: () => void;
}

function CalendarHeader({
    currentDate,
    onPreviousMonth,
    onNextMonth,
    onToday,
}: CalendarHeaderProps){

    return (
        <header>
            <button type="button" onClick={onPreviousMonth}> Privious Month </button>
            <h2>{format(currentDate,"MMMM yyyy")}</h2>
            <button type="button" onClick={onNextMonth}>Next Month</button>
            <button type="button" onClick={onToday}>Today</button>
        </header>
    );
}

export default CalendarHeader;