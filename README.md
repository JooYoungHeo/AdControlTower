# 광고 노출 시스템

### 프로젝트 시작
```
* properties.json 빈칸 정보 입력 (db : username , password)
* $ yarn run ad-tower
```

### Article Api
* 유저가 읽은 article 비율과 광고 노출 비율을 비교해 뉴스 혹은 광고 응답

**[Request]**
<pre>
GET <b>/article</b>
</pre>

| key | desc | type | required |
| --- | --- | --- | --- | 
| userId | 유저 id | integer | o |

**[Response]**

| key | desc | type |
| --- | --- | --- |
| title | 제목 | string |
| content | 내용 | string |

예시)
<pre>
<b>200</b> OK
{
    title: 'xxxxxxxxx',
    content: 'xxxxxxxxxxx'
}
</pre>