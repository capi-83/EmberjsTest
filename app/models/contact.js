import DS from 'ember-data';
import { match, gte ,and,not} from '@ember/object/computed';

export default DS.Model.extend({


  title:'Contact',

  email: DS.attr('string'),
  message: DS.attr('string'),

  validEmail: match('email', /^.+@.+\..+$/),
  validMessage: gte('message.length', 5),

  isValid:and('validEmail','validMessage'),
  isDisabled:not('isValid'),

});
