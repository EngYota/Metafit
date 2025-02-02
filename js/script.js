function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
    let current = start;

    const counterElement = document.getElementById(elementId);

    const intervalId = setInterval(() => {
        counterElement.textContent =  " +" + current ;
        if (current >= end) {
            clearInterval(intervalId);
        } else {
            current++;
        }
    }, interval);
}

// Call the function for the four counters
startCounting('counter1', 1, 23, 30);
startCounting('counter2', 1, 15, 30);
startCounting('counter3', 1, 117, 10);
startCounting('counter4', 1, 328, 10);

/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|chrome|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function() {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new")
          .addClass("show")
          .removeClass("hide"),
        $(".home-chat,.head-home")
          .addClass("hide")
          .removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function() {
      $("#whatsapp-chat")
        .addClass("hide")
        .removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function() {
      $("#whatsapp-chat")
        .addClass("show")
        .removeClass("hide");
    });
  
