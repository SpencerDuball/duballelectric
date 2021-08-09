import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BookAlt, BookAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BookAlt",
  component: BookAlt,
} as ComponentMeta<typeof BookAlt>;

const Template: ComponentStory<typeof BookAlt> = (args: BookAltPropsI) => (
  <x.div display="flex" gap="20px">
    <BookAlt {...args} />
    <BookAlt {...args} fill="red.500" />
    <BookAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
