export default function EventCard({ title, date, description }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p>{description}</p>
    </div>
  );
}