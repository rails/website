export function createHelp(help) {
  const toggle = help.querySelector('[data-task-help-toggle]');
  const popover = help.querySelector('.ai__task-help__popover');
  let pointerFocus = false;
  let pinned = false;
  let closeTimer;

  function setOpen(open) {
    window.clearTimeout(closeTimer);
    if (!open) pinned = false;
    toggle.setAttribute('aria-expanded', String(open));
    popover.hidden = !open;
  }

  toggle.addEventListener('pointerdown', () => {
    pointerFocus = true;
  });
  toggle.addEventListener('pointercancel', () => {
    pointerFocus = false;
  });
  toggle.addEventListener('click', () => {
    // The first click pins a hover- or focus-opened explanation.
    pinned = !pinned;
    setOpen(pinned);
    pointerFocus = false;
  });
  toggle.addEventListener('focus', () => {
    if (!pointerFocus) setOpen(true);
  });
  help.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') setOpen(true);
  });
  help.addEventListener('pointerleave', () => {
    if (!pinned && !help.contains(document.activeElement)) {
      // Give the pointer time to cross the small gap into the card.
      closeTimer = window.setTimeout(() => setOpen(false), 160);
    }
  });
  help.addEventListener('focusout', (event) => {
    if (!help.contains(event.relatedTarget)) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!help.contains(event.target)) setOpen(false);
  });

  return {
    close() {
      setOpen(false);
    }
  };
}
