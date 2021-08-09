import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExpandAlt, ExpandAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExpandAlt",
  component: ExpandAlt,
} as ComponentMeta<typeof ExpandAlt>;

const Template: ComponentStory<typeof ExpandAlt> = (args: ExpandAltPropsI) => (
  <x.div display="flex" gap="20px">
    <ExpandAlt {...args} />
    <ExpandAlt {...args} fill="red.500" />
    <ExpandAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
