import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileContract, FileContractPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileContract",
  component: FileContract,
} as ComponentMeta<typeof FileContract>;

const Template: ComponentStory<typeof FileContract> = (
  args: FileContractPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileContract {...args} />
    <FileContract {...args} fill="red.500" />
    <FileContract {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
