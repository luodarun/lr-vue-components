/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon';
import Row from './row';
import Col from './col';
import Checkbox from './checkbox';
import CheckboxButton from './checkbox-button';
import CheckboxGroup from './checkbox-group';
import Scrollbar from './scrollbar';
import Tooltip from './tooltip';
import Table from './table';
import TableColumn from './table-column';
import Tag from './tag';
import Input from './input';
import Select from './select';
import Option from './option';
import OptionGroup from './option-group';
import Popover from './popover';
import Autocomplete from './autocomplete';
import EllipsisFont from './ellipsisFont';
const version = '0.1.0';
const components = [
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Scrollbar,
  Tooltip,
  Table,
  TableColumn,
  Tag,
  Popover,
  Option,
  OptionGroup,
  Select,
  Input,
  Autocomplete,
  EllipsisFont
];
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
  /* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Scrollbar,
  Tooltip,
  Table,
  TableColumn,
  Tag,
  Popover,
  Option,
  OptionGroup,
  Select,
  Input,
  Autocomplete,
  EllipsisFont
}
export default {
  install,
  version
}
