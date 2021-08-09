import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileContractDollar, FileContractDollarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileContractDollar",
  component: FileContractDollar,
} as ComponentMeta<typeof FileContractDollar>;

const Template: ComponentStory<typeof FileContractDollar> = (
  args: FileContractDollarPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileContractDollar {...args} />
    <FileContractDollar {...args} fill="red.500" />
    <FileContractDollar {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
