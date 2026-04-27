require('dotenv').config();
const { Redis } = require('@upstash/redis');
const { Ratelimit } = require('@upstash/ratelimit');


const rateLimiter = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '1 m'),
});

module.exports = rateLimiter;