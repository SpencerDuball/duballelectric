import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pentagon, PentagonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pentagon",
  component: Pentagon,
} as ComponentMeta<typeof Pentagon>;

const Template: ComponentStory<typeof Pentagon> = (args: PentagonPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Pentagon {...args} />
    <Pentagon {...args} fill="red.500" />
    <Pentagon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
