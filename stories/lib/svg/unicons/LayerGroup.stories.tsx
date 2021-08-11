import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LayerGroup, LayerGroupPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LayerGroup",
  component: LayerGroup,
} as ComponentMeta<typeof LayerGroup>;

const Template: ComponentStory<typeof LayerGroup> = (
  args: LayerGroupPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LayerGroup {...args} />
    <LayerGroup {...args} fill="red.500" />
    <LayerGroup {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
