import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Tablet, TabletPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Tablet",
  component: Tablet,
} as ComponentMeta<typeof Tablet>;

const Template: ComponentStory<typeof Tablet> = (args: TabletPropsI) => (
  <Box display="flex" gap="20px">
    <Tablet {...args} />
    <Tablet {...args} fill="red.500" />
    <Tablet {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
