import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleRightB, AngleRightBPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleRightB",
  component: AngleRightB,
} as ComponentMeta<typeof AngleRightB>;

const Template: ComponentStory<typeof AngleRightB> = (
  args: AngleRightBPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AngleRightB {...args} />
    <AngleRightB {...args} fill="red.500" />
    <AngleRightB {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
