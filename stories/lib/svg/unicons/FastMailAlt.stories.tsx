import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FastMailAlt, FastMailAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FastMailAlt",
  component: FastMailAlt,
} as ComponentMeta<typeof FastMailAlt>;

const Template: ComponentStory<typeof FastMailAlt> = (
  args: FastMailAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FastMailAlt {...args} />
    <FastMailAlt {...args} fill="red.500" />
    <FastMailAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
