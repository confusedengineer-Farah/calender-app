interface EventFormPorps {
    selectedDate: Date;
    onClose:() => void;
}

function EventForm({
    selectedDate,
    onClose
    }:EventFormPorps){
    return (
        <div>
            <h2>Create Event</h2>
            <p>Selected date: {selectedDate.toDateString()}</p>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Event title" />
                </div>
                <button type="button" onClick={onClose}>Cancel</button>
                <button type="submit">Create Event</button>
            </form>
        </div>
    )
}

export default EventForm;