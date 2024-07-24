function useTypewriter(texts, typingSpeed = 200, deletingSpeed = 100) {
  var displayedText = "";
  var currentTextIndex = 0;
  var index = 0;
  var isDeleting = false;

  function handleTypewriter() {
    var currentText = texts[currentTextIndex];
    if (isDeleting) {
      if (index > 0) {
        displayedText = currentText.substring(0, index - 1);
        index--;
      } else {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
      }
    } else {
      if (index < currentText.length) {
        displayedText = currentText.substring(0, index + 1);
        index++;
      } else {
        setTimeout(function () {
          isDeleting = true;
        }, 1000);
      }
    }

    setTimeout(handleTypewriter, isDeleting ? deletingSpeed : typingSpeed);
  }

  setTimeout(handleTypewriter, typingSpeed);

  return function () {
    return displayedText;
  };
}
