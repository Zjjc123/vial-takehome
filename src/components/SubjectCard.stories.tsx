import type { Meta, StoryObj } from '@storybook/react';

import SubjectCard from './SubjectCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Vial/SubjectCard',
  component: SubjectCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: { control: 'text' },
    age: { control: 'number' },
    gender: { control: 'text' },
    diagnosisDate: { control: 'date' },
    status: { control: 'text' },
  },
} satisfies Meta<typeof SubjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Active: Story = {
  args: {
    name: 'Active Subject',
    age: 20,
    gender: 'Male',
    diagnosisDate: '2022-01-01',
    status: 'Active',
    id: '123-123-123-123-123',
  },
};

export const Inactive: Story = {
  args: {
    name: 'Inactive Subject',
    age: 20,
    gender: 'Male',
    diagnosisDate: '2022-01-01',
    status: 'Inactive',
    id: '123-123-123-123-123',
  },
};
