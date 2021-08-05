import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerDownRightAlt, CornerDownRightAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CornerDownRightAlt",
  component: CornerDownRightAlt,
} as ComponentMeta<typeof CornerDownRightAlt>;

const Template: ComponentStory<typeof CornerDownRightAlt> = (
  args: CornerDownRightAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerDownRightAlt {...args} />
    <CornerDownRightAlt {...args} fill="red.500" />
    <CornerDownRightAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
