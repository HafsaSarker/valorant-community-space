import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM gifts ORDER BY id ASC");
    return res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getGiftByID = async (req, res) => {
  try {
    const giftId = req.params.giftId;
    const selectQuery = `SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn FROM gifts WHERE id = ${giftId}`;

    const result = await pool.query(selectQuery);
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getGifts,
  getGiftByID,
};
