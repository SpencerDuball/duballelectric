import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SearchMinus, SearchMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SearchMinus",
  component: SearchMinus,
} as ComponentMeta<typeof SearchMinus>;

const Template: ComponentStory<typeof SearchMinus> = (
  args: SearchMinusPropsI
) => (
  <Box display="flex" gap="20px">
    <SearchMinus {...args} />
    <SearchMinus {...args} fill="red.500" />
    <SearchMinus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
