function setTitle() {
  const url = window.location.href;
  document.title = `${document.title} - ${url}`;
}

setTitle();