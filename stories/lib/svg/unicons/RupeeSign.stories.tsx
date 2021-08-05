import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { RupeeSign, RupeeSignPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/RupeeSign",
  component: RupeeSign,
} as ComponentMeta<typeof RupeeSign>;

const Template: ComponentStory<typeof RupeeSign> = (args: RupeeSignPropsI) => (
  <x.div display="flex" gap="20px">
    <RupeeSign {...args} />
    <RupeeSign {...args} fill="red.500" />
    <RupeeSign {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
