import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BringFront, BringFrontPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BringFront",
  component: BringFront,
} as ComponentMeta<typeof BringFront>;

const Template: ComponentStory<typeof BringFront> = (
  args: BringFrontPropsI
) => (
  <x.div display="flex" gap="20px">
    <BringFront {...args} />
    <BringFront {...args} fill="red.500" />
    <BringFront {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
