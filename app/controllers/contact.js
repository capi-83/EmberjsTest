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
      alert(`Message send to: ${this.get('email')} with message : ${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('email', '');
      this.set('message', '');
    }
  }


});
