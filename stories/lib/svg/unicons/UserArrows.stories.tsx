import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserArrows, UserArrowsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserArrows",
  component: UserArrows,
} as ComponentMeta<typeof UserArrows>;

const Template: ComponentStory<typeof UserArrows> = (
  args: UserArrowsPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <UserArrows {...args} />
    <UserArrows {...args} fill="red.500" />
    <UserArrows {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
