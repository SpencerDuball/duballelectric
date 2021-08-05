import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FlipHAlt, FlipHAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FlipHAlt",
  component: FlipHAlt,
} as ComponentMeta<typeof FlipHAlt>;

const Template: ComponentStory<typeof FlipHAlt> = (args: FlipHAltPropsI) => (
  <x.div display="flex" gap="20px">
    <FlipHAlt {...args} />
    <FlipHAlt {...args} fill="red.500" />
    <FlipHAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
