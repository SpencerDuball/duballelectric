import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SnapchatSquare, SnapchatSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SnapchatSquare",
  component: SnapchatSquare,
} as ComponentMeta<typeof SnapchatSquare>;

const Template: ComponentStory<typeof SnapchatSquare> = (
  args: SnapchatSquarePropsI
) => (
  <Box display="flex" gap="20px">
    <SnapchatSquare {...args} />
    <SnapchatSquare {...args} fill="red.500" />
    <SnapchatSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
