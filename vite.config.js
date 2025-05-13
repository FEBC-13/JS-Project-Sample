import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/JS-Project-Sample/dist', // 빌드시 GitHub Pages의 레포지토리 이름을 기반으로 경로 설정
  build: {
    rollupOptions: {
      input: {
        index: 'index.html', // 기본 index.html
        list: 'src/pages/todo/list.html', // 추가 HTML 파일
        regist: 'src/pages/todo/regist.html', // 추가 HTML 파일
        info: 'src/pages/todo/info.html', // 추가 HTML 파일
        // 필요한 다른 HTML 파일을 여기에 추가
        components01: 'src/pages/webcomponents/01/index.html',
        components02: 'src/pages/webcomponents/02/index.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  plugins: [tailwindcss()],
});
