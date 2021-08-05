import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileNetwork, FileNetworkPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileNetwork",
  component: FileNetwork,
} as ComponentMeta<typeof FileNetwork>;

const Template: ComponentStory<typeof FileNetwork> = (
  args: FileNetworkPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileNetwork {...args} />
    <FileNetwork {...args} fill="red.500" />
    <FileNetwork {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
