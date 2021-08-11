import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WebGrid, WebGridPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WebGrid",
  component: WebGrid,
} as ComponentMeta<typeof WebGrid>;

const Template: ComponentStory<typeof WebGrid> = (args: WebGridPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <WebGrid {...args} />
    <WebGrid {...args} fill="red.500" />
    <WebGrid {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
