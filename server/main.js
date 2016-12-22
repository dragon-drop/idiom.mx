import publications from './publications';
import methods from './methods';
import seeds from './seeds';
import nlp from 'nlp_compromise';

methods();
seeds();
publications();
console.log(nlp.noun('pope').article());

