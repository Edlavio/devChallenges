import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button text='Default' />
};

export const Primary: Story = {
  render: () => <Button color='primary' text='Primary' />
};

export const Secondary: Story = {
  render: () => <Button color='secondary' text='Secondary' />
};

export const Danger: Story = {
  render: () => <Button color='danger' text='Danger' />
};

export const Outline: Story = {
  render: () => <Button color='outline' text='Outline' />
};

export const Text: Story = {
  render: () => <Button color='text' text='Text' />
}