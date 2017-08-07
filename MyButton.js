const MyButtonTemplate = `
  <button
    class="btn waves-effect waves-light myButton"
    @click.prevent="handleValidate"
    >
    <slot></slot>
    <i class="material-icons right">send</i>
  </button>
`

const MyButton_INI_PROPS = {
  text: 'submit',
  handleClick: () => {}
}

Vue.component('MyButton', {
  template: MyButtonTemplate,
  props: {
    text: {
      type: String,
      default: MyButton_INI_PROPS.text
    },
    handleClick: {
      type: Function,
      default: MyButton_INI_PROPS.handleClick
    }
  }
})
