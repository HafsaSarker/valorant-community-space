import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    return res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEventsByLocation = async (req, res) => {
  try {
    const loc = req.params.loc;

    const selectQuery = `SELECT name, location, date, time, image, daysLeft FROM events WHERE location = '${loc}'`;

    const result = await pool.query(selectQuery);

    return res.status(200).json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getEvents,
  getEventsByLocation,
};
