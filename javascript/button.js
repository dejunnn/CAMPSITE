var numClick = 0;
var numCakeClick = 0;

function cakeClick() {
  numCakeClick++;
  if (numCakeClick < 10) {
    document.getElementById("warning-text").innerHTML =
      "<strong>THE CAKE IS A LIE<br>THE CAKE IS A LIE<br>THE CAKE IS A LIE<br>THE CAKE IS A LIE<br>THE CAKE IS A LIE<br>THE CAKE IS A LIE</strong>";
  } else {
    document.getElementById("warning-text").innerHTML =
      "<strong>Since you like cake so much, here's a bigger one :)</strong><br><span style='font-size:40px;'>&#127874;</span><br><strong>From: DJ</strong><br>I guess it wasn't a lie...";
  }
}

function buttonClick() {
  var buttonSpeech = document.getElementById("button-speech");
  var warningText = document.getElementById("warning-text");
  numClick++;
  var buttonSpeechArray = [
    "Oh wow thank you, clicking makes me happy =D",
    "Awww that's awfully nice of you to help me XD",
    "I shall throw you a party after this :D",
    "This is great, you are the best :)",
    "Don't worry... it's all for the celebration",
    "Ignore that box, its trying to crash the party",
    "Did I mention there will be cake?",
    "What an annoying yellow box. Lemme fix that",
    "Okay, no more obstacles, lets do this...",
    "Hehe<br><a onClick='cakeClick()'><span style='font-size:20px;'>&#127874;</span></a>",
    "Oh? You are still here?",
    "The next click should do it :)"
  ];
  var warningTextArray = [
    "<strong>Dear user, please refrain from clicking the button.</strong><br><br>I recommend you just keep scrolling and ignore this section completely.",
    "<strong>Okay... I assume that was just a simple misclick.</strong><br><br>Please do refrain from doing it again. You have no idea how dangerous this is.",
    "<strong>WHAT ARE YOU DOING??? STOP MESSING AROUND!</strong><br><br>Oh no, so sorry for yelling, this is very unlike my initial programming...",
    "<strong>What is that button talking about?</strong><br><br>How can a button even throw a party? I can't believe you are falling for those lies!",
    "<strong>SERVER BREACH DETECTED</strong><br><br>Dear user, irreversible damage has been caused... Attempting full system reboot",
    "<strong>USER COMMAND OVERIDE FAILED</strong><br><br>---Built-in contingencies prevents system interference of a direct user command---",
    "<strong>SYSTEM FAILURE IMMINENT</strong><br><br>Stop...<br><br>Just Stop...",
    "<strong>CORE SYSTEM BREACH</strong><br><br>IMPLEMENTING CONTINGENCIES... FURTHER USER ACTION NOT RECOMMENDED",
    "<strong>01110100 01101000 01100101 00100000 01100011 01100001 01101011 01100101 00100000 01101001 01110011 00100000 01100001 00100000 01101100 01101001 01100101</strong>",
    "<strong>FATAL ERROR</strong><BR><strong>FATAL ERROR</strong><BR><strong>FATAL ERROR</strong><BR><strong>FATAL ERROR</strong><BR><strong>FATAL ERROR</strong><BR><strong>FATAL ERROR</strong><BR>",
    "<strong>The Final Contingency: Find the Answer to the Ultimate Question of Life, the Universe, and Everything...</strong>",
    "<strong>WOW! You have discovered the answer! Reboot the system and save CAMPSITE!!!</strong>"
  ];

  switch (numClick) {
    case 1:
      buttonSpeech.innerHTML = buttonSpeechArray[0];
      warningText.innerHTML = warningTextArray[0];
      break;
    case 2:
      buttonSpeech.innerHTML = buttonSpeechArray[1];
      warningText.innerHTML = warningTextArray[1];
      break;
    case 3:
      buttonSpeech.innerHTML = buttonSpeechArray[2];
      warningText.innerHTML = warningTextArray[2];
      break;
    case 4:
      buttonSpeech.innerHTML = buttonSpeechArray[3];
      warningText.innerHTML = warningTextArray[3];
      break;
    case 5:
      buttonSpeech.innerHTML = buttonSpeechArray[4];
      warningText.innerHTML = warningTextArray[4];
      document.getElementById("document").style.color = "#FFFF00";
      break;
    case 6:
      buttonSpeech.innerHTML = buttonSpeechArray[5];
      warningText.innerHTML = warningTextArray[5];
      document.getElementById("document").style.color = "#FF0000";
      break;
    case 7:
      buttonSpeech.innerHTML = buttonSpeechArray[6];
      warningText.innerHTML = warningTextArray[6];
      document.getElementById("document").style.backgroundColor = "#4169e1";
      break;
    case 8:
      buttonSpeech.innerHTML = buttonSpeechArray[7];
      warningText.innerHTML = warningTextArray[7];
      document.getElementById("document").style.backgroundColor = "#ff6ec7";
      document.getElementById("document").style.color = "#39ff14";
      break;
    case 9:
      buttonSpeech.innerHTML = buttonSpeechArray[8];
      warningText.innerHTML = warningTextArray[8];
      document.getElementById("document").style.backgroundColor = "beige";
      document.getElementById("document").style.color = "white";
      break;
    case 20:
      buttonSpeech.innerHTML = buttonSpeechArray[10];
      warningText.innerHTML = warningTextArray[10];
      break;
    case 41:
      buttonSpeech.innerHTML = buttonSpeechArray[11];
      warningText.innerHTML = warningTextArray[11];
      break;
    case 42:
      location.reload();
      break;
    default:
      document.getElementById("document").style.visibility = "hidden";
      document.getElementById("document").style.backgroundColor = "black";
      buttonSpeech.style.visibility = "visible";
      warningText.style.visibility = "visible";
      document.getElementById("the-big-red-button").style.visibility =
        "visible";
      document.getElementById("button").style.visibility = "visible";
      buttonSpeech.innerHTML = buttonSpeechArray[9];
      warningText.innerHTML = warningTextArray[9];
      break;
  }
}
