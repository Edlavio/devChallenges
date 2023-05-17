import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Default',
    size: 'md',
    color: 'default',
    disabled: false,
    disableShadow: false
  }
};

export const Primary: Story = {
  args: {
    text: 'Primary',
    size: 'md',
    color: 'primary',
    disabled: false,
    disableShadow: false
  }
};

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    size: 'md',
    color: 'secondary',
    disabled: false,
    disableShadow: false
  }
};

export const Danger: Story = {
  args: {
    text: 'Danger',
    size: 'md',
    color: 'danger',
    disabled: false,
    disableShadow: false
  }
};

export const Outline: Story = {
  args: {
    text: 'Outline',
    size: 'md',
    color: 'outline',
    disabled: false,
    disableShadow: false
  }
};

export const Text: Story = {
  args: {
    text: 'Text',
    size: 'md',
    color: 'text',
    disabled: false,
    disableShadow: false
  }
}