import { storiesOf } from "@storybook/vue"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import TestButton from "../src/js/components/TestButton.vue"

storiesOf("testButton", module)
  .addDecorator(withKnobs)
  .add(
    "as a component",
    () => ({
      components: { TestButton },
      props: {
        isDisabled: {
          default: boolean("Disabled", false)
        }
      },
      template: '<test-button :isDisabled="isDisabled">button</test-button>'
    }),
    {
      info: true
    }
  )
// .add('with text', () => '<test-button>with text</test-button>')
// .add('with emoji', () => '<test-button>😀 😎 👍 💯</test-button>');
