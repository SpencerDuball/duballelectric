import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { N16Plus, N16PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N16Plus",
  component: N16Plus,
} as ComponentMeta<typeof N16Plus>;

const Template: ComponentStory<typeof N16Plus> = (args: N16PlusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <N16Plus {...args} />
    <N16Plus {...args} fill="red.500" />
    <N16Plus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
