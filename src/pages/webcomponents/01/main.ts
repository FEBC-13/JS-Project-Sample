const template = document.createElement('template');
template.innerHTML = `
  <style>
    span {
      color: red;
      font-size: 32px;
    }
  </style>
  <div>
    <span>기본 예제</span>
  </div>
`;

class Component01 extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define('component-01', Component01);
