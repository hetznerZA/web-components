Polymer({

    is: 'hetzner-password',

    properties: {
        policy: {
            type: String,
            value: 'hetzner-strong-passwords',
            reflectToAttribute: true
        },
        timer: {
            type: Object
        }
    },
    _generateSecurePassword: function(event) {
        this._setPasswordPolicy();
        this._showSpinner();
        this._disableButton();
        document.querySelector('paper-toast').show();
        this.$.generatePassword.addEventListener('response', this._generatePasswordResponse.bind(this));
        this.$.generatePassword.addEventListener('error', this._generatePasswordError.bind(this));
        this.$.generatePassword.generateRequest();
    },
    _checkPasswordStrength: function(event) {
        console.log('checking password strength');
        if(this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(function() {
            console.log('checking passwors strength');
            this.$.checkPasswordStrength.body = 'credential='+event.target.value+'&policy=hetzner-strong-passwords';
            this.$.checkPasswordStrength.addEventListener('response', this._checkPasswordStrengthResponse.bind(this));
            this.$.checkPasswordStrength.generateRequest();
        }.bind(this), 500);
    },
    _checkPasswordStrengthResponse: function() {
        console.log('respose to password validation');
        var response = this.$.checkPasswordStrength.lastResponse;
        console.log(response);
        var progress = response.data.strength / response.data.requirement * 100;
        this._setProgress(progress);
    },
    _setProgress: function(progress) {
        document.querySelector('paper-progress').value = progress;
    },
    _getProgress: function() {
        return document.querySelector('paper-progress').value;
    },
    _showSpinner: function() {
        document.querySelector('paper-spinner').setAttribute('active', true);
    },
    _hideSpinner: function() {
        document.querySelector('paper-spinner').removeAttribute('active');
    },
    _disableButton: function() {
        document.querySelector('paper-button').setAttribute('disabled', true);
    },
    _enableButton: function() {
        document.querySelector('paper-button').removeAttribute('disabled');
    },
    _setPasswordPolicy: function() {
        this.$.generatePassword.params = {
            policy: this.policy
        };
    },
    _generatePasswordResponse: function(response) {
        this._hideSpinner();
        this._enableButton();
    },
    _generatePasswordError: function() {
        console.log('an error occurred whilst generating your password');
    },
    _getPasswordStrengthAsPercentage: function(strength) {
        var result = json.data.strong;
        var requirement = json.data.requirement;
        var strength = json.data.strength;
        var percentage = strength/requirement*100;
        if(percentage > 100) {
            percentage = 100;
        }
    }
});
