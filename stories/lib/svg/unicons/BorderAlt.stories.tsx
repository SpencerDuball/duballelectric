import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BorderAlt, BorderAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderAlt",
  component: BorderAlt,
} as ComponentMeta<typeof BorderAlt>;

const Template: ComponentStory<typeof BorderAlt> = (args: BorderAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BorderAlt {...args} />
    <BorderAlt {...args} fill="red.500" />
    <BorderAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
