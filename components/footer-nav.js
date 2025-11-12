class CustomFooterNav extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer-nav {
          background: white;
          padding: 1rem 0;
          border-top: 1px solid #e5e7eb;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
        .nav-container {
          display: flex;
          justify-content: space-around;
          max-width: 1200px;
          margin: 0 auto;
        }
        .nav-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #374151;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }
        .nav-button:hover {
          background: #f3f4f6;
          color: #1d4ed8;
        }
        .nav-button i {
          margin-bottom: 0.25rem;
        }
        .nav-button.active {
          color: #1d4ed8;
        }
        .nav-label {
          font-size: 0.75rem;
        }
      </style>
      <div class="footer-nav">
        <div class="nav-container">
          <a href="index.html" class="nav-button">
            <i data-feather="home"></i>
            <span class="nav-label">Home</span>
          </a>
          <a href="about.html" class="nav-button">
            <i data-feather="user"></i>
            <span class="nav-label">About</span>
          </a>
          <a href="projects.html" class="nav-button">
            <i data-feather="folder"></i>
            <span class="nav-label">Projects</span>
          </a>
          <a href="resume.html" class="nav-button">
            <i data-feather="file-text"></i>
            <span class="nav-label">Resume</span>
          </a>
          <a href="contact.html" class="nav-button">
            <i data-feather="mail"></i>
            <span class="nav-label">Contact</span>
          </a>
        </div>
      </div>
    `;
  }
}
customElements.define('custom-footer-nav', CustomFooterNav);
