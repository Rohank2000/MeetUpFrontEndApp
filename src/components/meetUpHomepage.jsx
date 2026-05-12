import 'bootstrap/dist/css/bootstrap.min.css';

import { formatInTimeZone } from 'date-fns-tz';
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const HomePage = ({ searchTerm = "" }) => {
    const [select, setSelect] = useState("");
    const { data, error, loading } = useFetch(
        "https://meet-up-event-data.vercel.app/meetup",
        []
    );

    let filteredData = [];

    if (!searchTerm) {
        filteredData = select ? data?.GetAllMeetUpData.filter((meet) => meet.eventType === select) : data?.GetAllMeetUpData;

    } else {
        filteredData = data?.GetAllMeetUpData.filter((meet) => meet.title.includes(searchTerm) || meet.title.includes(searchTerm));
    }

    return (
        <div>
            <main className="container">
                <section className="py-4">
                    <div className="text-center">
                        <div className="row justify-content-between">
                            <div className="col-3">
                                <h2>MeetUp Events</h2>
                            </div>
                            <div className="col-3">
                                <div>
                                    <select
                                        value={select}
                                        onChange={(event) => setSelect(event.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Select Event Type</option>
                                        <option value="off">Offline Event</option>
                                        <option value="on">Online Event</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    {loading ? (
                        "Loading..."
                    ) : error ? (
                        "Error Occured..."
                    ) : (
                        <div className="row">
                            {filteredData.map((meet, index) => {
                                const rawDate = meet.date;
                                const Date = formatInTimeZone(rawDate, 'UTC', 'PPPP');
                                const Time = formatInTimeZone(rawDate, 'UTC', 'p');
                                return (
                                    <div key={index} className="col-4  my-4">
                                        <Link to={`/eventList/${index}`}>
                                            <div className="card h-100" style={{ width: '22rem' }}>
                                                <img
                                                    src={meet.eventThumbnail}
                                                    className="card-img-top"
                                                    alt={meet.title}
                                                />
                                                <button type="button" className="btn btn-primary py-1 m-2" style={{ width: '6rem' }}><strong>{meet.eventType === "off" ? "OffLine" : "OnLine"}</strong></button>

                                                <div className="card-body">
                                                    <p className="card-text fw-bolder">
                                                        🕗 {Date} at {Time}
                                                    </p>
                                                    <h3>{meet.title}</h3>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                )
                            }
                            )}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default HomePage;