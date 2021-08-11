import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleRight, AngleRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleRight",
  component: AngleRight,
} as ComponentMeta<typeof AngleRight>;

const Template: ComponentStory<typeof AngleRight> = (
  args: AngleRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AngleRight {...args} />
    <AngleRight {...args} fill="red.500" />
    <AngleRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
