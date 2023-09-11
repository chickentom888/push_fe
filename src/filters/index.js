import uppercase from './filter';
import {truncateMiddle_,numberFormat,numberWithCommas,dateFormat,contractCompact,lockedTime,momentTimeHistory_} from './filter';
export default {
     install(Vue) {
         Vue.filter('uppercase', uppercase);
         Vue.filter('truncateMiddle_', truncateMiddle_);
         Vue.filter('numberFormat', numberFormat);
         Vue.filter('numberWithCommas', numberWithCommas);
         Vue.filter('dateFormat', dateFormat);
         Vue.filter('contractCompact', contractCompact);
         Vue.filter('lockedTime', lockedTime);
         Vue.filter('momentTimeHistory_', momentTimeHistory_);
     }
}