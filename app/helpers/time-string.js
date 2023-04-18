import { helper } from '@ember/component/helper';

export default helper(function timeString([string] /*, named*/) {
  if (!string) return '';
  return string.substring(11, 16);
});
