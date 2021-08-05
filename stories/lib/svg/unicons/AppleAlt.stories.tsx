import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AppleAlt, AppleAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AppleAlt",
  component: AppleAlt,
} as ComponentMeta<typeof AppleAlt>;

const Template: ComponentStory<typeof AppleAlt> = (args: AppleAltPropsI) => (
  <x.div display="flex" gap="20px">
    <AppleAlt {...args} />
    <AppleAlt {...args} fill="red.500" />
    <AppleAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
