import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderNetwork, FolderNetworkPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderNetwork",
  component: FolderNetwork,
} as ComponentMeta<typeof FolderNetwork>;

const Template: ComponentStory<typeof FolderNetwork> = (
  args: FolderNetworkPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderNetwork {...args} />
    <FolderNetwork {...args} fill="red.500" />
    <FolderNetwork {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
