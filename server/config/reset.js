import { pool } from "./database.js";
import "./dotenv.js";
import eventsData from "../data/events.js";

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL,
      time VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      daysLeft VARCHAR(255) NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();
  eventsData.forEach((event) => {
    const insertQuery = {
      text: "INSERT INTO events (name, location, date, time, image, daysLeft) VALUES ($1, $2, $3, $4, $5, $6)",
    };

    const values = [
      event.name,
      event.location,
      event.date,
      event.time,
      event.image,
      event.daysLeft,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting events", err);
        return;
      }

      console.log(`✅ ${event.name} added successfully`);
    });
  });
};

seedEventsTable();
