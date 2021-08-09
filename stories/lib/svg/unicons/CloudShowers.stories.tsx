import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudShowers, CloudShowersPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudShowers",
  component: CloudShowers,
} as ComponentMeta<typeof CloudShowers>;

const Template: ComponentStory<typeof CloudShowers> = (
  args: CloudShowersPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudShowers {...args} />
    <CloudShowers {...args} fill="red.500" />
    <CloudShowers {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
