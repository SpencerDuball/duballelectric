import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Triangle, TrianglePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Triangle",
  component: Triangle,
} as ComponentMeta<typeof Triangle>;

const Template: ComponentStory<typeof Triangle> = (args: TrianglePropsI) => (
  <x.div display="flex" gap="20px">
    <Triangle {...args} />
    <Triangle {...args} fill="red.500" />
    <Triangle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
