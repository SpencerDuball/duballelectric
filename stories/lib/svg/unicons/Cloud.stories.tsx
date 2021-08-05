import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Cloud, CloudPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Cloud",
  component: Cloud,
} as ComponentMeta<typeof Cloud>;

const Template: ComponentStory<typeof Cloud> = (args: CloudPropsI) => (
  <x.div display="flex" gap="20px">
    <Cloud {...args} />
    <Cloud {...args} fill="red.500" />
    <Cloud {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
