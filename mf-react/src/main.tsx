import ReactDOM from "react-dom/client";
import App from "./App.tsx";

class MFReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(<App />);
  }
}

customElements.define("mfreact-element", MFReactElement);
