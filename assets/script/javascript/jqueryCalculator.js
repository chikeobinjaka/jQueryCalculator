var jqFirstNumberEl = $("#first-number");
var jqSecondNumberEl = $("#second-number");
var jqResultEl = $("#result");
var jqOperatorEl = $("#operator");
var jqTargetEl;
var firstNumberTxt = "";
var secondNumberTxt = "";
var resultTxt = "";
var operatorTxt = "";

$(document).ready(function() {
  // Your code here...

  // Number Click event
  $(".number").on("click", function(event) {
    numberClickEventHandler(event);
  });

  // Operator Click Event
  $(".operator").on("click", function(event) {
    operatorClickEventHandler(event);
  });

  // Equals click handler
  $(".equal").on("click", function(event) {
    equalClickEventHandler(event);
  });
});

// Clear click handler
$(".clear").on("click", function(event) {
  clearClickEventHandler(event);
});

function numberClickEventHandler(event) {
  jqTargetEl = $(event.target);
  var elName = event.target.tagName.toLowerCase();
  // if the event target is a span, get the parent
  if (elName.localeCompare("span") == 0) {
    jqTargetEl = jqTargetEl.parent();
  }
  var val = jqTargetEl.attr("value");
  if (jqResultEl.text() != "") {
    clearCalculator();
  }
  if (operatorTxt == "") {
    firstNumberTxt += val;
    jqFirstNumberEl.text(firstNumberTxt);
  } else {
    secondNumberTxt += val;
    jqSecondNumberEl.text(secondNumberTxt);
  }
}

function operatorClickEventHandler(event) {
  jqTargetEl = $(event.target);
  var elName = event.target.tagName.toLowerCase();
  // if the event target is a span, get the parent
  if (elName.localeCompare("span") == 0) {
    jqTargetEl = jqTargetEl.parent();
  }
  var val = jqTargetEl.attr("value");
  if (firstNumberTxt == "" && secondNumberTxt == "") return;
  if (firstNumberTxt != "") {
    operatorTxt = val;
  }
  switch (operatorTxt) {
    case "minus":
      jqOperatorEl.html("&minus;");
      break;
    case "plus":
      jqOperatorEl.text("+");
      break;
    case "power":
      jqOperatorEl.text("^");
      break;
    case "times":
      jqOperatorEl.html("&times;");
      break;
    case "divide":
      jqOperatorEl.html("&divide;");
      break;
  }
  //jqOperatorEl.text(val);
}

function equalClickEventHandler(event) {
  jqTargetEl = $(event.target);
  var elName = event.target.tagName.toLowerCase();
  // if the event target is a span, get the parent
  if (elName.localeCompare("span") == 0) {
    jqTargetEl = jqTargetEl.parent();
  }
  var val = jqTargetEl.attr("value");
}

function clearClickEventHandler(event) {
  jqTargetEl = $(event.target);
  var elName = event.target.tagName.toLowerCase();
  // if the event target is a span, get the parent
  if (elName.localeCompare("span") == 0) {
    jqTargetEl = jqTargetEl.parent();
  }
  var val = jqTargetEl.attr("value");
  clearCalculator();
}

function clearCalculator() {
  firstNumber.html("");
  secondNumber.html("");
  result.text("");
  operator.text("");
}
