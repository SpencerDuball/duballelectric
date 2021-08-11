import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerUpLeft, CornerUpLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerUpLeft",
  component: CornerUpLeft,
} as ComponentMeta<typeof CornerUpLeft>;

const Template: ComponentStory<typeof CornerUpLeft> = (
  args: CornerUpLeftPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CornerUpLeft {...args} />
    <CornerUpLeft {...args} fill="red.500" />
    <CornerUpLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
