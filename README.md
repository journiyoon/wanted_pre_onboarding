# wanted_pre_onboarding
원티드 프리온보딩 백엔드 코스 4차 선발과제

## DB-SCHEMA
![image](https://user-images.githubusercontent.com/93569041/186153385-b8875bad-6650-4a6f-82a6-f5cbb2e1abaf.png)

- TABLE: USER, COMPANY, JOB_POSTING, APPLICATION
- USER와 COMPANY 데이터는 임의로 생성해 진행합니다.

## 요구 사항 분석
### 1. **채용공고를 등록합니다.**
Request 

```json
POST /jobs
{
  "companyId": 2,
  "position":"백엔드 개발자",
  "compensation":1000000,
  "text":"네이버에서는 Node.js 이용 가능한 백엔드 개발자를 채용합니다. 자격은...",
  "skill":"Node.js"
}
```

Response `201`

```json
{
    "id": 7,
    "position": "백엔드 개발자",
    "compensation": 1000000,
    "skill": "Node.js",
    "text": "네이버에서는 Node.js 이용 가능한 백엔드 개발자를 채용합니다. 자격은...",
    "companyId": 2,
    "updatedAt": "2022-08-20T00:00:00",
    "createdAt": "2022-08-20T00:00:00"
}
```

### 2. **채용공고를 수정합니다.**
Request

```json
PUT /jobs/:id
{
  "companyId": 2,
  "position":"백엔드 개발자",
  "compensation":1000000,
  "text":"네이버에서는 Node.js 이용 가능한 백엔드 개발자를 채용합니다. 자격은...",
  "skill":"Node.js"
}

or

{
  "companyId": 2,
  "position":"백엔드 개발자",
  "compensation":1000000,
  "text":"네이버에서는 Django 이용 가능한 백엔드 개발자를 채용합니다. 자격은...", # 변경
  "skill":"Django" # 변경
}
```

Response `200`

```json
{
    "id": 6,
    "company_name": "네이버",
    "country": "한국",
    "area": "서울",
    "position": "백엔드 개발자",
    "compensation": 1000000,
    "skill": "Django",
    "company_id": 2,
    "text": "네이버에서는 Django 이용 가능한 백엔드 개발자를 채용합니다. 자격은...",
    "updatedAt": "2022-08-20T00:00:00"
}
```
- 
### 3. **채용공고를 삭제합니다.**
```json
DELETE /jobs/:id
```
### 4. **채용공고 목록을 가져옵니다.**
Response `200`

```json
GET /jobs
[
	{
		"채용공고_id": 채용공고_id,
	  "회사명":"원티드랩",
	  "국가":"한국",
	  "지역":"서울",
	  "채용포지션":"백엔드 주니어 개발자",
	  "채용보상금":1500000,
	  "사용기술":"Python"
	},
	{
		"채용공고_id": 채용공고_id,
	  "회사명":"네이버",
	  "국가":"한국",
	  "지역":"판교",
	  "채용포지션":"Django 백엔드 개발자",
	  "채용보상금":1000000,
	  "사용기술":"Django"
	},
  ...
]
```
###    4. 사용자는 채용공고 목록을 아래와 같이 확인할 수 있습니다.
```json
GET /jobs
[
    {
        "id": 7,
        "company_name": "네이버",
        "country": "한국",
        "area": "서울",
        "position": "백엔드 개발자",
        "compensation": 1000000,
        "skill": "Node.js",
        "company_id": 2
    },
    {
        "id": 6,
        "company_name": "원티드랩",
        "country": "한국",
        "area": "서울",
        "position": "프론트엔드 개발자",
        "compensation": 1000000,
        "skill": "Vue.js",
        "company_id": 1
    },
    ...
  ]
  ```
    
### 5. **채용 상세 페이지를 가져옵니다.**
Response `200`

```json
GET /jobs/:id
{
    "id": 7,
    "company_name": "네이버",
    "country": "한국",
    "area": "서울",
    "position": "백엔드 개발자",
    "compensation": 1000000,
    "skill": "Node.js",
    "text": "네이버에서는 Node.js 이용 가능한 백엔드 개발자를 채용합니다. 자격은...",
    "another_openings": [1,10,13,...]
}
```
