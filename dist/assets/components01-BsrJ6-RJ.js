import"./modulepreload-polyfill-B5Qt9EMX.js";const e=document.createElement("template");e.innerHTML=`
  <style>
    span {
      color: red;
      font-size: 32px;
    }
  </style>
  <div>
    <span>기본 예제</span>
  </div>
`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).append(e.content.cloneNode(!0))}}customElements.define("component-01",t);
