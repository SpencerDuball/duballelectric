import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bright, BrightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Bright",
  component: Bright,
} as ComponentMeta<typeof Bright>;

const Template: ComponentStory<typeof Bright> = (args: BrightPropsI) => (
  <x.div display="flex" gap="20px">
    <Bright {...args} />
    <Bright {...args} fill="red.500" />
    <Bright {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
