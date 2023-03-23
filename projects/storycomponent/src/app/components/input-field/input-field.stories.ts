import { Story, Meta } from '@storybook/angular/types-6-0'
import { InputFieldComponent } from './input-field.component';


export default {
  title: 'Example/InputFeild Component',
  component: InputFieldComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<InputFieldComponent> = (args: InputFieldComponent) => ({
  component: InputFieldComponent,
  props: args,
});

export const inputtext = Template.bind({});
inputtext.args = {
  myInputField: '',
  type:'text',
  label:'Input Text Field'
};

export const number = Template.bind({});
number.args = {
  type:'number',
  label:'Input Number Field'
};
