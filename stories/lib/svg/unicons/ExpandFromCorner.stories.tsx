import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExpandFromCorner, ExpandFromCornerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExpandFromCorner",
  component: ExpandFromCorner,
} as ComponentMeta<typeof ExpandFromCorner>;

const Template: ComponentStory<typeof ExpandFromCorner> = (
  args: ExpandFromCornerPropsI
) => (
  <x.div display="flex" gap="20px">
    <ExpandFromCorner {...args} />
    <ExpandFromCorner {...args} fill="red.500" />
    <ExpandFromCorner {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
