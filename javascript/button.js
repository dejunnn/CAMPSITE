var numClick = 0;

function buttonClick() {
  var buttonSpeech = document.getElementById("button-speech");
  var warningText = document.getElementById("warning-text");
  numClick++;
  switch (numClick) {
    case 1:
      buttonSpeech.innerHTML = "Oh wow thank you, clicking makes me happy =D";
      warningText.innerHTML = "<strong>Dear user, please refrain from clicking the button.</strong><br><br>I recommend you just keep scrolling and ignore this section completely."
      break;
    case 2:
      buttonSpeech.innerHTML = "Awww that's awfully nice of you to do that XD";
      warningText.innerHTML = "<strong>Okay... I assume that was just a simple misclick.</strong><br><br>Please do refrain from doing it again. You have no idea how dangerous this is."
      break;
    case 3:
      buttonSpeech.innerHTML = "This is great, you are the best :)";
      break;
    case 4:
      buttonSpeech.innerHTML = "Nobody ever trusts me... thank you for doing so ;D";
      break;
    case 5:
      buttonSpeech.innerHTML = "Oh don't worry, I'm just a little rusty";
      break;
    case 6:
      buttonSpeech.innerHTML = "I need some time to adjust, just keep clicking";
      break;
    case 7:
      buttonSpeech.innerHTML = "Its just that I haven't been clicked in so long";
      break;
    case 8:
      buttonSpeech.innerHTML = "Ok, I think I'm almost ready...";
      break;
    case 9:
      buttonSpeech.innerHTML = "One more click should do it!!!";
      break;
    default:
      buttonSpeech.innerHTML = "Hehe";
  }
}
