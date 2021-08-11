import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Database, DatabasePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Database",
  component: Database,
} as ComponentMeta<typeof Database>;

const Template: ComponentStory<typeof Database> = (args: DatabasePropsI) => (
  <Box display="flex" gap="20px">
    <Database {...args} />
    <Database {...args} fill="red.500" />
    <Database {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
