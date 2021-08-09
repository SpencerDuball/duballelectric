import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Book, BookPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Book",
  component: Book,
} as ComponentMeta<typeof Book>;

const Template: ComponentStory<typeof Book> = (args: BookPropsI) => (
  <x.div display="flex" gap="20px">
    <Book {...args} />
    <Book {...args} fill="red.500" />
    <Book {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
