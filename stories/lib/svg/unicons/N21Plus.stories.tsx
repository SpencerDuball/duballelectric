import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { N21Plus, N21PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N21Plus",
  component: N21Plus,
} as ComponentMeta<typeof N21Plus>;

const Template: ComponentStory<typeof N21Plus> = (args: N21PlusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <N21Plus {...args} />
    <N21Plus {...args} fill="red.500" />
    <N21Plus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
