import axios from 'axios';

const clientId = 'nurYihykXbeXcAVh1eYD';
const clientSecret = 'spjqOUyM9q';

async function naverNews() {
  const URL = `https://openapi.naver.com/v1/search/news.json?query=hello`;

  axios.get(URL, {
    headers: {
      'X-Naver-Client-Id': clientId,
      'X-Naver-Client-Secret': clientSecret,
    },
  });
}

naverNews();
