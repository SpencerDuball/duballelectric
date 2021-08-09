import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderTop, BorderTopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderTop",
  component: BorderTop,
} as ComponentMeta<typeof BorderTop>;

const Template: ComponentStory<typeof BorderTop> = (args: BorderTopPropsI) => (
  <x.div display="flex" gap="20px">
    <BorderTop {...args} />
    <BorderTop {...args} fill="red.500" />
    <BorderTop {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
