import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BagAlt, BagAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BagAlt",
  component: BagAlt,
} as ComponentMeta<typeof BagAlt>;

const Template: ComponentStory<typeof BagAlt> = (args: BagAltPropsI) => (
  <x.div display="flex" gap="20px">
    <BagAlt {...args} />
    <BagAlt {...args} fill="red.500" />
    <BagAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
