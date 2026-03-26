import { rooms } from '../data/hotelData'

function RoomsGrid() {
  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <article className="room-card" key={room.name}>
          <img className="room-art" src={room.image} alt={room.name} />
          <div className="room-card-body">
            <div className="room-meta">
              <h3>{room.name}</h3>
              <p>{room.price} / night</p>
            </div>
            <p>{room.description}</p>
            <div className="room-specs">
              <span>{room.size}</span>
              <span>{room.guests}</span>
            </div>
            <ul className="chip-list">
              {room.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}

export default RoomsGrid
