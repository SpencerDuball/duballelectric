import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleDoubleRight, AngleDoubleRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleDoubleRight",
  component: AngleDoubleRight,
} as ComponentMeta<typeof AngleDoubleRight>;

const Template: ComponentStory<typeof AngleDoubleRight> = (
  args: AngleDoubleRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AngleDoubleRight {...args} />
    <AngleDoubleRight {...args} fill="red.500" />
    <AngleDoubleRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
