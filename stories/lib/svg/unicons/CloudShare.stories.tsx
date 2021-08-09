import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudShare, CloudSharePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudShare",
  component: CloudShare,
} as ComponentMeta<typeof CloudShare>;

const Template: ComponentStory<typeof CloudShare> = (
  args: CloudSharePropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudShare {...args} />
    <CloudShare {...args} fill="red.500" />
    <CloudShare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
