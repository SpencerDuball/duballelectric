import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ListOlAlt, ListOlAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ListOlAlt",
  component: ListOlAlt,
} as ComponentMeta<typeof ListOlAlt>;

const Template: ComponentStory<typeof ListOlAlt> = (args: ListOlAltPropsI) => (
  <Box display="flex" gap="20px">
    <ListOlAlt {...args} />
    <ListOlAlt {...args} fill="red.500" />
    <ListOlAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
