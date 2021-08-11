import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Grid, GridPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args: GridPropsI) => (
  <Box display="flex" gap="20px">
    <Grid {...args} />
    <Grid {...args} fill="red.500" />
    <Grid {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
