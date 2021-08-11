import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ListUiAlt, ListUiAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ListUiAlt",
  component: ListUiAlt,
} as ComponentMeta<typeof ListUiAlt>;

const Template: ComponentStory<typeof ListUiAlt> = (args: ListUiAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ListUiAlt {...args} />
    <ListUiAlt {...args} fill="red.500" />
    <ListUiAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
