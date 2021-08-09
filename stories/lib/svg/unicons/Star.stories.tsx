import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Star, StarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Star",
  component: Star,
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args: StarPropsI) => (
  <x.div display="flex" gap="20px">
    <Star {...args} />
    <Star {...args} fill="red.500" />
    <Star {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
