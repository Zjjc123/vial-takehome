import type { Meta, StoryObj } from '@storybook/react';

import Toolbar from './Toolbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Vial/Toolbar',
  component: Toolbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: { control: 'object' },
  },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      {
        name: 'Active Subject',
        age: 80,
        gender: 'Female',
        diagnosisDate: '2022-01-01',
        status: 'Active',
        id: '123-123-123-123-123',
      },
      {
        name: 'Inactive Subject',
        age: 20,
        gender: 'Male',
        diagnosisDate: '2026-01-01',
        status: 'Inactive',
        id: '123-123-123-123-123',
      },
    ],
    setFilteredData: () => {},
    filteredData: [],
  },
};
