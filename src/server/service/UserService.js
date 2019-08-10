import redis from '../../redis';
import moment from 'moment';

// 유저 뉴스, 광고 읽은 횟수 조회 후 광고/뉴스 비율 리턴
export const getUserReadRate = async (userId, date) => {
    try {
        const [newsCount, adCount] = await Promise.all([_getUserNewsRead(userId, date), _getUserAdRead(userId, date)]);
        
        return newsCount === 0 ? -1 : adCount/newsCount;
    } catch (e) {
        return -1;
    }
};

// 유저 뉴스 or 광고 읽은 횟수 ++ (일별 기록))
export const incrementUserRead = async (userId, type, date) => {
    try {
        return await redis.incr(`user:${userId}:${type}.${date}`);
    } catch (e) {
        return;
    }
};

// 유저 뉴스 읽은 횟수 조회
async function _getUserNewsRead(userId, date) {
    try {
        const count = await redis.get(`user:${userId}:news.${date}`);

        return Number(count || 0);
    } catch (e) {
        throw e;
    }
};

// 유저 광고 읽은 횟수 조회 (없을시 1 강제 세팅 후 리턴)
async function _getUserAdRead(userId, date) {
    try {
        const count = await redis.get(`user:${userId}:ad.${date}`);

        if (!count) await incrementUserRead(userId, 'ad', date);

        return Number(count || 1);
    } catch (e) {
        throw e;
    }
};