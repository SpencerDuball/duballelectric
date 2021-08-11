import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CircleLayer, CircleLayerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CircleLayer",
  component: CircleLayer,
} as ComponentMeta<typeof CircleLayer>;

const Template: ComponentStory<typeof CircleLayer> = (
  args: CircleLayerPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CircleLayer {...args} />
    <CircleLayer {...args} fill="red.500" />
    <CircleLayer {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
