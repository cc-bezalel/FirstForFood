import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/** @function verifyAdmin
/* @param {object} req req object
/* @param {object} res res object
/* @param {object} next res object
/* @returns {Object} res status 401 if no token is provided
/* @returns {Object} status 501 server error
*/

const secret = process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(400).json({
        status: 'Unathorized',
        message: 'No Token provided',
      });
    }
    const decoded = jwt.verify(token, secret);
    req.userId = decoded;
    console.log('tokenveri', req.userId);
    next();
  } catch (error) {
    return res.status(500).json({
      status: 'Server Error',
      message: 'Sorry, something went wrong, try again later!',
    });
  }
  return null;
};

export default verifyToken;
