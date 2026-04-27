require('dotenv').config();
const { Redis } = require('@upstash/redis');
const { Ratelimit } = require('@upstash/ratelimit');


const rateLimiter = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, '1 s'),
});

module.exports = rateLimiter;