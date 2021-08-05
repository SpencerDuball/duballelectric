import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudInfo, CloudInfoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudInfo",
  component: CloudInfo,
} as ComponentMeta<typeof CloudInfo>;

const Template: ComponentStory<typeof CloudInfo> = (args: CloudInfoPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudInfo {...args} />
    <CloudInfo {...args} fill="red.500" />
    <CloudInfo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
