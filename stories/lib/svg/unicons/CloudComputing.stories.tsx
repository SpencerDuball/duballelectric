import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudComputing, CloudComputingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudComputing",
  component: CloudComputing,
} as ComponentMeta<typeof CloudComputing>;

const Template: ComponentStory<typeof CloudComputing> = (
  args: CloudComputingPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudComputing {...args} />
    <CloudComputing {...args} fill="red.500" />
    <CloudComputing {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
