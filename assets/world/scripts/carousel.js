class Carousel extends HTMLElement {
  connectedCallback() {
    requestAnimationFrame(() => {
      this.previousButton.addEventListener('click', this.scrollBack)
      this.nextButton.addEventListener('click', this.scrollForward)
    })

  }

  disconnectedCallback() {
    this.previousButton.removeEventListener('click', this.scrollBack)
    this.nextButton.removeEventListener('click', this.scrollForward)
  }

  // Called on the `button` element as it's triggered by an event listener
  scrollBack() {
    this.closest('carousel-component')
      .itemsContainer.scrollBackward()
  }

  // Called on the `button` element as it's triggered by an event listener
  scrollForward() {
    this.closest('carousel-component')
      .itemsContainer.scrollForward()
  }

  get previousButton() {
    return this.querySelector("button.previous")
  }

  get nextButton() {
    return this.querySelector("button.next")
  }

  get itemsContainer() {
    return this.querySelector('carousel-items')
  }
}

class CarouselItems extends HTMLElement {
  connectedCallback() {
    this.addEventListener('scroll', this.updateButtonState)
    requestAnimationFrame(() => this.updateButtonState())
  }

  disconnectedCallback() {
    this.removeEventListener('scroll', this.updateButtonState)
  }

  updateButtonState() {
    if (this.scrollLeft <= 0) {
      this.carousel.previousButton.disabled = true
      this.carousel.nextButton.disabled = false
    } else if (this.scrollLeft >= this.maxScroll) {
      this.carousel.previousButton.disabled = false
      this.carousel.nextButton.disabled = true
    } else {
      this.carousel.previousButton.disabled = false
      this.carousel.nextButton.disabled = false
    }
  }

  get maxScroll() {
    return (this.scrollWidth - this.clientWidth)
  }

  scrollForward() {
    this.scrollBy({ left: this.scrollInterval, behavior: "smooth" })
  }

  scrollBackward() {
    this.scrollBy({ left: -this.scrollInterval, behavior: "smooth" })
  }

  get carousel() {
    return this.closest('carousel-component')
  }

  get scrollInterval() {
    return parseInt(this.getAttribute("scroll-interval"))
  }
}

customElements.define('carousel-component', Carousel)
customElements.define('carousel-items', CarouselItems)