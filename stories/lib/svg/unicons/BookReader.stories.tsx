import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BookReader, BookReaderPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BookReader",
  component: BookReader,
} as ComponentMeta<typeof BookReader>;

const Template: ComponentStory<typeof BookReader> = (
  args: BookReaderPropsI
) => (
  <x.div display="flex" gap="20px">
    <BookReader {...args} />
    <BookReader {...args} fill="red.500" />
    <BookReader {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
