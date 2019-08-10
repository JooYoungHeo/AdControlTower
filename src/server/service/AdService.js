import models from '../../models';
import redis from '../../redis';

// 광고 노출 비율 redis -> db 순으로 조회 , 결과 없거나 에러시 0 으로 설정
export const getExposureRate = async (now) => {
    try {
        let exposureRate = await _findRateByRedis();
        
        if (!exposureRate) exposureRate = await _findRateByDB(now);

        return Number(exposureRate);
    } catch (e) {
        return 0;
    }
};

// 광고 컨텐츠 redis -> db 순으로 조회
export const getAd = async () => {
    try {
        let ad = await _findAdByRedis();

        if (_isEmpty(ad)) ad = await _findAdByDB();

        return ad;
    } catch (e) {
        return null;
    }
};

async function _findRateByRedis() {
    try {
        return await redis.get('ad:exposure:rate');
    } catch (e) {
        return null;
    }
}

async function _findRateByDB(now) {
    try {
        const data = await models.AdExposurePolicy.findAll({
            attributes: ['rate', 'level'],
            where: {
                start: {
                    [models.Sequelize.Op.lte]: now
                },
                end: {
                    [models.Sequelize.Op.gte]: now
                }
            }
        }).then(items => items.sort((x,y) => (y.level - x.level)));

        return data.length === 0 ? 0 : data[0].rate;
    } catch (e) {
        throw e;
    }
}

async function _findAdByRedis() {
    try {
        let number = await redis.srandmember('ad:active');
        return await redis.hgetall(`ad:${number}`);
    } catch (e) {
        return {};
    }
}

async function _findAdByDB() {
    try {
        const data = await models.Ad.findAll({
            attributes: ['title', 'content'],
            where: {
                active: true
            }
        });
        const randNumber = Math.floor(Math.random() * data.length);

        return data[randNumber];
    } catch (e) {
        throw e;
    }
}

function _isEmpty(obj) {
    if (!obj) return true;
    if (Object.keys(obj).length === 0) return true;

    return false;
}