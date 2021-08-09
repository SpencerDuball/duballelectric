import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BringBottom, BringBottomPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BringBottom",
  component: BringBottom,
} as ComponentMeta<typeof BringBottom>;

const Template: ComponentStory<typeof BringBottom> = (
  args: BringBottomPropsI
) => (
  <x.div display="flex" gap="20px">
    <BringBottom {...args} />
    <BringBottom {...args} fill="red.500" />
    <BringBottom {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
