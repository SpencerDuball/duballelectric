import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SearchAlt, SearchAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SearchAlt",
  component: SearchAlt,
} as ComponentMeta<typeof SearchAlt>;

const Template: ComponentStory<typeof SearchAlt> = (args: SearchAltPropsI) => (
  <Box display="flex" gap="20px">
    <SearchAlt {...args} />
    <SearchAlt {...args} fill="red.500" />
    <SearchAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
