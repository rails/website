class BackToTop extends HTMLElement {

  constructor() {
    super()
    this.intersectionObserver = new IntersectionObserver(entries => this.processIntersectionEntries(entries))
  }

  connectedCallback() {
    this.intersectionObserver.observe(this)
    requestAnimationFrame(() => {
      this.button.addEventListener('click', this.scrollToTop)
    })
  }

  disconnectedCallback() {
    this.intersectionObserver.unobserve(this)
    this.button.removeEventListener('click', this.scrollToTop)
  }

  processIntersectionEntries(entries) {
    entries.forEach(entry => {
      this.classList.toggle("intersecting", entry.isIntersecting)
    })
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  get button() {
    return this.querySelector("button")
  }
}

customElements.define("back-to-top", BackToTop);
