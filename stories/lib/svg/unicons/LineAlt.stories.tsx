import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LineAlt, LineAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LineAlt",
  component: LineAlt,
} as ComponentMeta<typeof LineAlt>;

const Template: ComponentStory<typeof LineAlt> = (args: LineAltPropsI) => (
  <x.div display="flex" gap="20px">
    <LineAlt {...args} />
    <LineAlt {...args} fill="red.500" />
    <LineAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
