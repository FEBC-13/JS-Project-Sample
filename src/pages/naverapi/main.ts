import axios from 'axios';

const clientId = 'xxxxxxxxx';
const clientSecret = 'xxxxxxxxx';

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
