import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerDownLeft, CornerDownLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerDownLeft",
  component: CornerDownLeft,
} as ComponentMeta<typeof CornerDownLeft>;

const Template: ComponentStory<typeof CornerDownLeft> = (
  args: CornerDownLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerDownLeft {...args} />
    <CornerDownLeft {...args} fill="red.500" />
    <CornerDownLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
