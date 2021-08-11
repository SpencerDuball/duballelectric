import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerRightDown, CornerRightDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerRightDown",
  component: CornerRightDown,
} as ComponentMeta<typeof CornerRightDown>;

const Template: ComponentStory<typeof CornerRightDown> = (
  args: CornerRightDownPropsI
) => (
  <Box display="flex" gap="20px">
    <CornerRightDown {...args} />
    <CornerRightDown {...args} fill="red.500" />
    <CornerRightDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
