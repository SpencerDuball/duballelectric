import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  LeftToRightTextDirection,
  LeftToRightTextDirectionPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LeftToRightTextDirection",
  component: LeftToRightTextDirection,
} as ComponentMeta<typeof LeftToRightTextDirection>;

const Template: ComponentStory<typeof LeftToRightTextDirection> = (
  args: LeftToRightTextDirectionPropsI
) => (
  <x.div display="flex" gap="20px">
    <LeftToRightTextDirection {...args} />
    <LeftToRightTextDirection {...args} fill="red.500" />
    <LeftToRightTextDirection {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
