import type { CalendarEvent } from "../../types/event";

interface EventDelailsProps{
    event: CalendarEvent;
    onEdit:()=> void;
    onDelete: () => void;
    onClose: () => void;
}

function EventDetails({
    event,
    onEdit,
    onDelete,
    onClose
}: EventDelailsProps){
    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.start.toDateString()}</p>

            <button type="button" onClick={onEdit}>Edit</button>
            <button type="button" onClick={onDelete}>Delete</button>
            <button type="button" onClick={onClose}>Close</button>

        </div>
    )
}

export default EventDetails;