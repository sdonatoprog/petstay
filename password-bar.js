export class PasswordBar {
  constructor(
    passwordInputId,
    visibilityButtonId,
    visibilityImageId,
    hiddenPictoSrc,
    visiblePictoSrc
  ) {
    this.passwordInputElement = document.querySelector(passwordInputId);
    this.visibilityButtonElement = document.querySelector(visibilityButtonId);
    this.visibilityImageElement = document.querySelector(visibilityImageId);
    this.hiddenPictoSrc = hiddenPictoSrc;
    this.visiblePictoSrc = visiblePictoSrc;
    this.passwordIsHidden = true;
    console.log(this.passwordInputElement);
    this.passwordInputElement.type = "password";
    this.visibilityButtonElement.addEventListener("click", () => {
      if (this.passwordIsHidden) {
        this.passwordIsHidden = false;
        this.passwordInputElement.type = "text";
        this.visibilityImageElement.src = visiblePictoSrc;
      } else {
        this.passwordIsHidden = true;
        this.passwordInputElement.type = "password";
        this.visibilityImageElement.src = hiddenPictoSrc;
      }
    });
  }
}
