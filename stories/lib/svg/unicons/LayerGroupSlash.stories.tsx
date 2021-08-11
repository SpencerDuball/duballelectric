import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LayerGroupSlash, LayerGroupSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LayerGroupSlash",
  component: LayerGroupSlash,
} as ComponentMeta<typeof LayerGroupSlash>;

const Template: ComponentStory<typeof LayerGroupSlash> = (
  args: LayerGroupSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <LayerGroupSlash {...args} />
    <LayerGroupSlash {...args} fill="red.500" />
    <LayerGroupSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
