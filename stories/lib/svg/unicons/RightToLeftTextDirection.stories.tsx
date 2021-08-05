import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  RightToLeftTextDirection,
  RightToLeftTextDirectionPropsI,
} from "lib/svg";

export default {
  title: "lib/svg/unicons/RightToLeftTextDirection",
  component: RightToLeftTextDirection,
} as ComponentMeta<typeof RightToLeftTextDirection>;

const Template: ComponentStory<typeof RightToLeftTextDirection> = (
  args: RightToLeftTextDirectionPropsI
) => (
  <x.div display="flex" gap="20px">
    <RightToLeftTextDirection {...args} />
    <RightToLeftTextDirection {...args} fill="red.500" />
    <RightToLeftTextDirection {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
