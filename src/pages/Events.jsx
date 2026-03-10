import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div className="container">
      <h1>Upcoming Events</h1>

      <div className="events-grid">
        <EventCard
          title="Ram Navami Celebration"
          date="April 17, 2026"
          description="Grand celebration with bhajan, kirtan, and prasad distribution."
        />

        <EventCard
          title="Sundar Kand Path"
          date="May 10, 2026"
          description="Spiritual recitation and community gathering."
        />

        <EventCard
          title="Charity Food Drive"
          date="June 5, 2026"
          description="Helping the needy with food distribution."
        />
      </div>
    </div>
  );
}