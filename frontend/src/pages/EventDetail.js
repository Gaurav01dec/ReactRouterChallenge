import { useParams } from "react-router-dom"

export default function EventDetailPage() {

    const params = useParams()

    return (
        <>
            <h1>EventDetailPage</h1>
            <h2>Event Id : {params.eventId}</h2>
        </>
    )
};
