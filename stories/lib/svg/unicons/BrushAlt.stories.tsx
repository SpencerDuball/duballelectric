import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BrushAlt, BrushAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BrushAlt",
  component: BrushAlt,
} as ComponentMeta<typeof BrushAlt>;

const Template: ComponentStory<typeof BrushAlt> = (args: BrushAltPropsI) => (
  <x.div display="flex" gap="20px">
    <BrushAlt {...args} />
    <BrushAlt {...args} fill="red.500" />
    <BrushAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
