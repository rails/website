class ModalComponent extends HTMLElement {

  connectedCallback() {
    this.addEventListener("turbo:frame-load", this.configure)
    if (this.frame.hasAttribute("complete")) {
      this.configure()
    }
  }

  disconnectedCallback() {
    this.removeEventListener("turbo:frame-load", this.configure)
    if (this.closeButton) {
      this.closeButton.removeEventListener("click", this.close)
    }
    this.removeEventListener("keyup", this.close)
    this.mask.removeEventListener("click", this.close)
  }

  configure() {
    this.makeBackgroundInert()

    this.classList.add("loaded");
    document.body.classList.add("modal-shown");

    this.closeButton.addEventListener("click", this.close)
    this.closeButton.classList.remove("hidden")
    this.addEventListener("keyup", this.close)
    this.mask.addEventListener("click", this.close)

    this.frame.focus()
  }

  makeBackgroundInert() {
    document.querySelectorAll("body > *:not(main)").forEach(element => {
      element.inert = true
      element.ariaHidden = true
    })

    document.querySelector("main > content-container").inert = true
    document.querySelector("main > content-container").ariaHidden = true
  }

  close(event) {
    if (event.type === "click" || event.key === "Escape") {
      history.back()
    }
  }

  get closeButton() {
    return this.querySelector("button.close")
  }

  get frame() {
    return this.querySelector("turbo-frame")
  }

  get mask() {
    return this.querySelector("modal-mask")
  }
}

customElements.define("modal-component", ModalComponent);

document.addEventListener("turbo:click", ({ target }) => {
  if (target.hasAttribute("data-turbo-preserve-focus")) {
    target.setAttribute("data-turbo-return-focus", "self")
  }
})

document.addEventListener("turbo:load", () => {
  let prefocusedElement = document.querySelector("[data-turbo-return-focus]")
  if (prefocusedElement) {
    prefocusedElement.focus()
    prefocusedElement.removeAttribute("data-turbo-return-focus")
  }
})