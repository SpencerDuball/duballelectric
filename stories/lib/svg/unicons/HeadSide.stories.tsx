import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeadSide, HeadSidePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeadSide",
  component: HeadSide,
} as ComponentMeta<typeof HeadSide>;

const Template: ComponentStory<typeof HeadSide> = (args: HeadSidePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <HeadSide {...args} />
    <HeadSide {...args} fill="red.500" />
    <HeadSide {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
