import Controller from '@ember/controller';
import { match, gte ,and,not} from '@ember/object/computed';

export default Controller.extend({

  title:'Contact',

  email:'',
  message:'',

  validEmail: match('email', /^.+@.+\..+$/),
  validMessage: gte('message.length', 5),

  isValid:and('validEmail','validMessage'),
  isDisabled:not('isValid'),


  actions: {

    sendMessage() {
      const email = this.get('email');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', { email: email , message:message });

      newContact.save().then(response => {
        this.set('responseMessage', `We got your message and we’ll get in touch soon`);
        this.set('email', '');
        this.set('message', '');
      })
    },

  }


});
