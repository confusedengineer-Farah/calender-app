import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

import CalendarHeader from "../components/calendar/CalendarHeader";
import MonthView from "../components/calendar/MonthView";
import EventForm from "../components/events/EventForm";
import type { CalendarEvent } from "../types/event";
import EventDetails from "../components/events/EventDetails";

function CalendarPage() {
    const[currentDate, setCurrentDate ] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isEventFormOpen, setIsEvevtFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

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
    function handleSelectEvent(event:CalendarEvent){
        setSelectedEvent(event);
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
            onSelectEvent={handleSelectEvent}
            />
            {isEventFormOpen && selectedDate && (
                <EventForm
                selectedDate={selectedDate}
                onClose={() => setIsEvevtFormOpen(false)}
                />
            )}
            {selectedEvent && (
                <EventDetails
                event= {selectedEvent}
                onEdit={() => {
                    // somethis
                }}
                onDelete={() =>{

                }}
                onClose={() =>{
                    // something
                }}
                />
            )}
        </main>
    )
}

export default CalendarPage;