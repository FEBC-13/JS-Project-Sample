import '/src/style.css';

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <span class="text-2xl text-blue-800">with Tailwind CSS</span>
  </div>
`;

class Component01 extends HTMLElement {
  constructor() {
    super();
    // const shadow = this.attachShadow({ mode: 'open' });
    // shadow.append(template.content.cloneNode(true));
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('component-01', Component01);
