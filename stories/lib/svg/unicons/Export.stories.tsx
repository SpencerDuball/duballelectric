import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Export, ExportPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Export",
  component: Export,
} as ComponentMeta<typeof Export>;

const Template: ComponentStory<typeof Export> = (args: ExportPropsI) => (
  <Box display="flex" gap="20px">
    <Export {...args} />
    <Export {...args} fill="red.500" />
    <Export {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
