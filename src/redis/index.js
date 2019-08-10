import Redis from 'ioredis';
import {redis} from '../config';

module.exports = new Redis(redis.port, redis.host);