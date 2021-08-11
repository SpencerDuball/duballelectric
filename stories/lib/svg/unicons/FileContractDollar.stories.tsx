import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileContractDollar, FileContractDollarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileContractDollar",
  component: FileContractDollar,
} as ComponentMeta<typeof FileContractDollar>;

const Template: ComponentStory<typeof FileContractDollar> = (
  args: FileContractDollarPropsI
) => (
  <Box display="flex" gap="20px">
    <FileContractDollar {...args} />
    <FileContractDollar {...args} fill="red.500" />
    <FileContractDollar {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
