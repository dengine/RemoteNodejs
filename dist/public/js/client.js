// Generated by LiveScript 1.2.0
(function(){
  $(function(){
    var socket;
    socket = io.connect("http://192.168.0.7:8080");
    $('#bodyMain').hammer().on("swipeup", function(){
      socket.emit("Presentation Remote", {
        action: "KeyLeft"
      });
      return 0;
    });
    $('#bodyMain').hammer().on("swipedown", function(){
      socket.emit("Presentation Remote", {
        action: "KeyRight"
      });
      return 0;
    });
    $('#bodyMain').hammer().on("tap", function(){
      socket.emit("Presentation Remote", {
        action: "MouseLeft"
      });
      return 0;
    });
  });
}).call(this);
