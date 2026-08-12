import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

import CalendarHeader from "../components/calendar/CalendarHeader";
import MonthView from "../components/calendar/MonthView";

function CalendarPage() {
    const[currentDate, setCurrentDate ] = useState(new Date());

    function goToPreviousMonth(){
        setCurrentDate((date) => subMonths(date,1));
    }
    function goToNextMonth(){
        setCurrentDate((date) => addMonths(date,1));
    }
    function goToToday(){
        setCurrentDate(new Date());
    }
    return(
        <main>
            <CalendarHeader
            currentDate={currentDate}
            onPreviousMonth={goToPreviousMonth}
            onNextMonth={goToNextMonth}
            onToday={goToToday}
            />
            <MonthView currentDate ={currentDate}/>
        </main>
    )
}

export default CalendarPage;