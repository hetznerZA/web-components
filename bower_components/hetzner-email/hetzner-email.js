Polymer({
  is: 'hetzner-email',

  properties: {
    emailValue: String
  },

  submitEmail: function(event) {
    // If email contains '@' it is possibly valid
    var possible = this.emailValue.indexOf('@') > -1;

    // If email contains trailing or repeating dots not possibly valid
    var emailParts = this.emailValue.split(".");
    for (part of emailParts) {
      if (part.length == 0) {
        possible = false;
      }
    }

    // Only-If email possibly valid put it in request params and send
    if (possible) {
      this.$.emailAjax.params = {emailExists: this.emailValue};
      this.$.emailAjax.generateRequest();
      this.$.emailSpinner.active = true
    }
  },

  showEmailStatus: function(request) {
    this.$.emailSpinner.active = false;
    console.log(request.detail.response.data);
  }
});
