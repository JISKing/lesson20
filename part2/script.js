let cssProperty = prompt("Write CSS property of 'display':");

switch (cssProperty) {
  case "block":
    alert("display: block");
    break;
  case "flex":
    alert("display: flex");
    break;
  case "grid":
    alert("display: grid");
    break;
  case "inline":
    alert("display: inline");
    break;
  case "none":
    alert("display: none");
    break;
  default:
    alert("Set 'display: inline-block;'");
}
