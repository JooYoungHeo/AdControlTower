const redis = require('./build/redis');

redis
    .pipeline()
    .set('ad:exposure:rate', '0.23')
    .sadd('ad:active', [1,2])
    .hmset('ad:1', {title: 'FIND YOUR PACE', content: '재규어 알아보기'})
    .hmset('ad:2', {title: 'Galaxy S10', content: '주문하기'})
    .exec(() => {
        console.log('set redis data');
        process.exit(0); 
    });