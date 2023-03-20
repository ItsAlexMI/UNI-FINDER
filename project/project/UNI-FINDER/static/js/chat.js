var chat = (function () {
  var templateUno =
      '<div class="direct-chat-msg"><div class="direct-chat-infos clearfix">' +
      '<span class="direct-chat-name float-left">[[name]]</span>' +
      '<span class="direct-chat-timestamp float-right">[[date]]</span>' +
      "</div>" +
      '<img class="direct-chat-img" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">' +
      '<div class="direct-chat-text" id="contenido">[[message]]<br></div>' +
      "</div>",
    templateDos =
      '<div class="direct-chat-msg right">' +
      '<div class="direct-chat-infos clearfix">' +
      '<span class="direct-chat-name float-right">[[name]]</span>' +
      '<span class="direct-chat-timestamp float-left">[[date]]</span>' +
      "</div>" +
      '<img class="direct-chat-img" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">' +
      '<div class="direct-chat-text">[[message]]</div></div>',
    printMessageLeft = function (name, date, message) {
      var contenedor = document.querySelector(".direct-chat-messages");
      contenedor.innerHTML += templateUno
        .replace("[[name]]", name)
        .replace("[[date]]", date)
        .replace("[[message]]", message);
    },
    printMessageRight = function (name, date, message) {
      var contenedor = document.querySelector(".direct-chat-messages");
      contenedor.innerHTML += templateDos
        .replace("[[name]]", name)
        .replace("[[date]]", date)
        .replace("[[message]]", message);
    },
    init = function () {};

  return {
    init: init,
    printMessageLeft: printMessageLeft,
    printMessageRight: printMessageRight,
  };
})();
