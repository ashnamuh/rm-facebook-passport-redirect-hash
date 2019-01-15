(function () {
  const regext = /\/#_=_/
  if (!regext.test(window.location.href)) {
    return
  }
  window.history.replaceState('', window.document.title, window.location.pathname + window.location.search)
}())
