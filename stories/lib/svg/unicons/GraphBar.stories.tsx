import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GraphBar, GraphBarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GraphBar",
  component: GraphBar,
} as ComponentMeta<typeof GraphBar>;

const Template: ComponentStory<typeof GraphBar> = (args: GraphBarPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <GraphBar {...args} />
    <GraphBar {...args} fill="red.500" />
    <GraphBar {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
