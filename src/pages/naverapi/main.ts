import axios from 'axios';

const clientId = 'nurYihykXbeXcAVh1eYD';
const clientSecret = 'spjqOUyM9q';

async function naverNews() {
  // const URL = `https://openapi.naver.com/v1/search/news.json?query=hello`;
  // const URL = `/naver/v1/search/news.json?query=hello`;
  const URL = `https://fesp-api.koyeb.app/proxy/v1/search/news.json?query=hello`;

  axios.get(URL, {
    headers: {
      'X-Naver-Client-Id': clientId,
      'X-Naver-Client-Secret': clientSecret,
      'X-Target-Url': 'https://openapi.naver.com', // 생략시 기본값 'https://openapi.naver.com'
    },
  });
}

naverNews();
