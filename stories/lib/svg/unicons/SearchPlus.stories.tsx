import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SearchPlus, SearchPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SearchPlus",
  component: SearchPlus,
} as ComponentMeta<typeof SearchPlus>;

const Template: ComponentStory<typeof SearchPlus> = (
  args: SearchPlusPropsI
) => (
  <Box display="flex" gap="20px">
    <SearchPlus {...args} />
    <SearchPlus {...args} fill="red.500" />
    <SearchPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
