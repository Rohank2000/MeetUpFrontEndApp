import useFetch from "../useFetch";

import { useParams } from "react-router-dom"

import { formatInTimeZone } from 'date-fns-tz';

import Header from "../Header-footer/Header"

const EventListDetails = () => {

    const { data } = useFetch(
        "https://meet-up-event-data.vercel.app/meetup",
        []
    );

    const { id } = useParams();

    const eventFind = data ? data?.GetAllMeetUpData?.find((event, index) => index == id) : null;

    if (!eventFind) {
        return (
            <div className="container mt-5">
                <p>Loading...</p>
            </div>
        )
    }

    const rawDate = eventFind.date;
    const Date = formatInTimeZone(rawDate, 'UTC', 'PPPP');
    const Time = formatInTimeZone(rawDate, 'UTC', 'p');

    let speakerCount = [];

    speakerCount = eventFind.speakerName ? speakerCount.push(eventFind.speakerName) : null;

    return (
        <div>
            <Header />
            <main className="container py-4">
                <div>
                    <div className="row justify-content-between">
                        <div className="col-4">

                            <h2>{eventFind.title}</h2>
                            <p><span>Hosted by : </span>
                                <br />
                                <strong>{eventFind.hostingParty}</strong></p>
                            <img src={eventFind.eventThumbnail} alt={eventFind.title} className="img-fluid rounded py-4" />
                            <h3>Details :</h3>
                            <p>{eventFind.details}</p>
                            <h3>Additional Information : </h3>
                            <p><strong>Dress Code : </strong>{eventFind.dressCode}</p>
                            <p><strong>Age Restrictions : </strong>{eventFind.ageRestriction}</p>
                            <h3>Event Tags : </h3>
                            <button type="button" class="btn btn-primary m-2"><strong>{eventFind.eventTags}</strong></button>



                        </div>
                        <div className="col-4">


                            <div class="card mb-4" style={{ width: '22rem' }}>
                                <div class="card-body">
                                    <p><strong>🕗 {Date} at {Time}</strong></p>
                                    <p><strong>📍{eventFind.location}</strong></p>
                                    <p><strong>{eventFind.price}</strong></p>
                                </div>
                            </div>
                            <div>
                                <h3>Speakers : ({speakerCount})</h3>
                            </div>
                            <div>
                                <div class="card text-center mt-4" style={{ width: '11rem' }}>
                                    <div class="card-body">
                                        <img src={eventFind.speakerImage} alt={eventFind.speakerName} className="img-fluid rounded-circle mb-2" />
                                        <p><strong>{eventFind.speakerName}</strong></p>
                                        <p>{eventFind.speakerDesignation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EventListDetails;