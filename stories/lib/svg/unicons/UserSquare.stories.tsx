import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserSquare, UserSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserSquare",
  component: UserSquare,
} as ComponentMeta<typeof UserSquare>;

const Template: ComponentStory<typeof UserSquare> = (
  args: UserSquarePropsI
) => (
  <Box display="flex" gap="20px">
    <UserSquare {...args} />
    <UserSquare {...args} fill="red.500" />
    <UserSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
