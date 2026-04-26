const upstashLimiter = require('../config/upstash');

const rateLimiter = async (req, res, next) => {
    try {
        const identifier = req.ip || 'anonymous';
        const {success} = await upstashLimiter.limit(identifier);
        if (!success) {
            return res.status(429).json({message: 'Too many requests, please try again later.'});
        }
        next();
    } catch (error) {
        console.log("Rate limiter error:", error);
        next(); // Allow request to proceed if rate limiter fails
    }
}

module.exports = rateLimiter;
