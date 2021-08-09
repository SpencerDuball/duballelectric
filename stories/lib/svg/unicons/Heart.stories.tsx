import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Heart, HeartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Heart",
  component: Heart,
} as ComponentMeta<typeof Heart>;

const Template: ComponentStory<typeof Heart> = (args: HeartPropsI) => (
  <x.div display="flex" gap="20px">
    <Heart {...args} />
    <Heart {...args} fill="red.500" />
    <Heart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
