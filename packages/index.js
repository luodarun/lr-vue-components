/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Aside from './aside'
import Autocomplete from './autocomplete'
import Button from './button'
import ButtonGroup from './button-group'
import Checkbox from './checkbox'
import CheckboxButton from './checkbox-button'
import CheckboxGroup from './checkbox-group'
import Col from './col'
import Container from './container'
import Countup from './countup'
import Dialog from './dialog'
import Drawer from './drawer'
import Dropdown from './dropdown'
import DropdownItem from './dropdown-item'
import DropdownMenu from './dropdown-menu'
import EllipsisFont from './ellipsisFont'
import Footer from './footer'
import Form from './form'
import FormItem from './form-item'
import Header from './header'
import Icon from './icon'
import InfiniteScroll from './infiniteScroll'
import Input from './input'
import Main from './main'
import Menu from './menu'
import MenuItem from './menu-item'
import MenuItemGroup from './menu-item-group'
import Message from './message'
import MessageBox from './message-box'
import Option from './option'
import OptionGroup from './option-group'
import Popover from './popover'
import Radio from './radio'
import RadioButton from './radio-button'
import RadioGroup from './radio-group'
import Row from './row'
import Scrollbar from './scrollbar'
import Select from './select'
import Signature from './signature'
import Skeleton from './skeleton'
import Submenu from './submenu'
import Surface from './surface'
import Table from './table'
import TableColumn from './table-column'
import Tag from './tag'
import Tooltip from './tooltip'
import CollapseTransition from '../src/transitions/collapse-transition'
import directives from '../src/directives/index';
  const version = '0.2.0';
  const components = [
    Aside,
    Autocomplete,
    Button,
    ButtonGroup,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Col,
    Container,
    Countup,
    Dialog,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    EllipsisFont,
    Footer,
    Form,
    FormItem,
    Header,
    Icon,
    InfiniteScroll,
    Input,
    Main,
    Menu,
    MenuItem,
    MenuItemGroup,
    Option,
    OptionGroup,
    Popover,
    Radio,
    RadioButton,
    RadioGroup,
    Row,
    Scrollbar,
    Select,
    Signature,
    Skeleton,
    Submenu,
    Surface,
    Table,
    TableColumn,
    Tag,
    Tooltip,
    CollapseTransition,
    directives
  ];
  const install = Vue => {
    components.forEach(Component => {
      Vue.use(Component)
    });
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$message = Message;
  };
  /* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Aside,
  Autocomplete,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Container,
  Countup,
  Dialog,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  EllipsisFont,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  InfiniteScroll,
  Input,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Option,
  OptionGroup,
  Popover,
  Radio,
  RadioButton,
  RadioGroup,
  Row,
  Scrollbar,
  Select,
  Signature,
  Skeleton,
  Submenu,
  Surface,
  Table,
  TableColumn,
  Tag,
  Tooltip,
  CollapseTransition,
  directives
}
export default {
  install,
  version
}