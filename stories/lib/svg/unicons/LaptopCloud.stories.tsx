import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LaptopCloud, LaptopCloudPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LaptopCloud",
  component: LaptopCloud,
} as ComponentMeta<typeof LaptopCloud>;

const Template: ComponentStory<typeof LaptopCloud> = (
  args: LaptopCloudPropsI
) => (
  <x.div display="flex" gap="20px">
    <LaptopCloud {...args} />
    <LaptopCloud {...args} fill="red.500" />
    <LaptopCloud {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
