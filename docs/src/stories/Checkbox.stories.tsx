import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from 'components'
import 'components/dist/style.css'

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        size: {
            name: 'Size',
            control: 'radio',
            options: ['medium', 'small'],
            defaultValue: 'medium',
          },
        isDisabled: {
            name: 'Disabled',
            control: 'boolean',
            defaultValue: false
        },
        checkboxType: {
            name: 'Checkbox Type ',
            control: 'select',
            options: ['Primary', 'Secondary', 'Error', 'Success', 'Warning'],
            defaultValue: 'Primary'
        },
        isDarkTheme: {
            name:'Dark Theme',
            control: 'boolean',
            defaultValue: false
        }
        }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox>  = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};