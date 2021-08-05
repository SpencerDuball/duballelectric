import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Frown, FrownPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Frown",
  component: Frown,
} as ComponentMeta<typeof Frown>;

const Template: ComponentStory<typeof Frown> = (args: FrownPropsI) => (
  <x.div display="flex" gap="20px">
    <Frown {...args} />
    <Frown {...args} fill="red.500" />
    <Frown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
