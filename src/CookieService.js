class CookieService {
  constructor() {
    this.setCookie = this.setCookie.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }
   // ** This function does not need to be changed. **
    // Set cookie that expires 1000 days from now.
    // This can store the user's prefered news category.
    setCookie(cookieType, cookieValue) {
      var numDays = 1000;
      var d = new Date();
      d.setTime(d.getTime() + (numDays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cookieType + "=" + cookieValue 
                      + ";" + expires + ";path=/";
  }

  // ** This function does not need to be changed. **
  // Get category from cookie if one exists.
  getCookie(cookieType) {
      var name = cookieType + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          // Cookie found.
          return c.substring(name.length, c.length);
        }
      }
      return null;
    }
}
export default CookieService;
