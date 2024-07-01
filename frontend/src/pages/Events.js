import { Link } from "react-router-dom"

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'some event'
    },
    {
        id: 'e2',
        title: 'another event'
    }
]

export default function EventsPage() {
    return (
        <>
            <h1>EventsPage</h1>
            {DUMMY_EVENTS.map((event)=>(
                <li key={event.id}>
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </li>
            ))}
        </>
    )
};
