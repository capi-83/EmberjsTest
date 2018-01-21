import { computed, observer } from '@ember/object';
import { match } from '@ember/object/computed';
import Controller from '@ember/controller';
//import { empty } from '@ember/object/computed';

export default Controller.extend({

  title:'Coming Soon',
  emailAddress: '',

  actualEmailAddress: computed('emailAddress', function() {
    //console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: observer('emailAddress', function() {
    //console.log('observer is called', this.get('emailAddress'));
  }),

  isValid: match('emailAddress', /^.+@.+\..+$/),

  actions: {

    saveInvitation() {

      //tuto partie 1
      /*alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);*/

      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });

      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });


    }
  }

 // isDisabled: empty('emailAddress')
});
