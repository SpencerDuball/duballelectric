import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sigma, SigmaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sigma",
  component: Sigma,
} as ComponentMeta<typeof Sigma>;

const Template: ComponentStory<typeof Sigma> = (args: SigmaPropsI) => (
  <x.div display="flex" gap="20px">
    <Sigma {...args} />
    <Sigma {...args} fill="red.500" />
    <Sigma {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
