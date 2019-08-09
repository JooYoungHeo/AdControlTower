import * as NewsService from '../service/NewsService';
import * as AdService from '../service/AdService';
import * as UserService from '../service/UserService';
import moment from 'moment';

// 정책상 노출 비율과 유저가 읽은 비율 (daily) 비교해 뉴스 or 광고 반환 및 기록
export const getArticle = async (userId) => {
    try {
        const now = moment();
        const dateKey = now.format('YYYYMMDD');
        const [userReadRate, exposureRate] = await Promise.all([UserService.getUserReadRate(userId, dateKey), AdService.getExposureRate(now)]);
        let type;
        let data;

        if (userReadRate < 0 || exposureRate <= userReadRate) {
            type = 'news';
            data = await NewsService.getNews();
        } else {
            type = 'ad';
            data = await AdService.getAd();
        }

        await UserService.incrementUserRead(userId, type, dateKey);
        
        return data;
    } catch (e) {
        throw e;
    }
}