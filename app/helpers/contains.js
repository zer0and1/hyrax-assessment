import { helper } from '@ember/component/helper';

export default helper(function contains([string, substring] /*, named*/) {
  return string.includes(substring);
});
