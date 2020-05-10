// console.log($("#id1").text());
// console.log($("div").eq(2).text());
// console.log($("div").eq(2).children().length);
// console.log($("div").eq(2).children().eq(0).text());
//реалізувати рекурсивний обхід дерева DOM на Jquery(homework)
// $("div").each(function (index, element) {
//   $(this).text("1");
//   console.log("index: " + index + ":" + $(this).text());
// });
// console.log($("div").eq(2).children().eq(0).attr("class", "btn-1"));
// console.log($("div").eq(2).children().eq(0).removeAttr("class"));
// $("<span>dsffsd</span>").appendTo("#id1");
// function createOrderdList(count) {
//   for (let i = 1; i <= count; i++) {
//     $(`<div>${i}</div>`).appendTo($(".list"));
//   }
// }
// let count = 5;
// createOrderdList(count);
// $(window).resize(function () {
//   if ($(this).width() < 768) {
//     $("body").css("background", "red");
//   }
// });
// $(window).resize(function () {
//   if ($(this).width() < 768) {
//     $("button").click(function (e) {
//       alert("fdsafs");
//     });
//   }
// });
// $("button").click(function () {
//   $("div").animate({ top: "700px" });
// });
// $("#id1").css({
//   color: "green",
//   transform: "translateX(12px)",
// });
// $("div").addClass("cds");
// $("#id1").attr({
//   href: "/dffds",
// });
$("button").click(function (e) {
  e.preventDefault();
});
$("#id1").before("<li>dfgdfg</li>");
$(".slider").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
