import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FilePlus, FilePlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FilePlus",
  component: FilePlus,
} as ComponentMeta<typeof FilePlus>;

const Template: ComponentStory<typeof FilePlus> = (args: FilePlusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FilePlus {...args} />
    <FilePlus {...args} fill="red.500" />
    <FilePlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
