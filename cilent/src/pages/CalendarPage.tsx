import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

import CalendarHeader from "../components/calendar/CalendarHeader";
import MonthView from "../components/calendar/MonthView";
import EventForm from "../components/events/EventForm";

function CalendarPage() {
    const[currentDate, setCurrentDate ] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isEventFormOpen, setIsEvevtFormOpen] = useState(false);

    function goToPreviousMonth(){
        setCurrentDate((date) => subMonths(date,1));
    }
    function goToNextMonth(){
        setCurrentDate((date) => addMonths(date,1));
    }
    function goToToday(){
        setCurrentDate(new Date());
    }
    function handleSelectDate(date:Date){
        setSelectedDate(date);
        setIsEvevtFormOpen(true);
    }
    return(
        <main>
            <CalendarHeader
            currentDate={currentDate}
            onPreviousMonth={goToPreviousMonth}
            onNextMonth={goToNextMonth}
            onToday={goToToday}
            />
            <MonthView 
            currentDate = {currentDate}
            selectedDate = {selectedDate}
            onSelectDate = {handleSelectDate}
            events = {[]}
            />
            {isEventFormOpen && selectedDate && (
                <EventForm
                selectedDate={selectedDate}
                onClose={() => setIsEvevtFormOpen(false)}
                />
            )}
        </main>
    )
}

export default CalendarPage;