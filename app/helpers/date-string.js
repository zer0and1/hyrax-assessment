import { helper } from '@ember/component/helper';

export default helper(function dateString([string] /*, named*/) {
  if (!string) return '';
  return string.substring(0, 10);
});
