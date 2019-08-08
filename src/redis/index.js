import Redis from 'redis';
import {redis} from '../config';

module.exports = Redis.createClient(redis.port, redis.host);