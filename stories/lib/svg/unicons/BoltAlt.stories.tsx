import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BoltAlt, BoltAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BoltAlt",
  component: BoltAlt,
} as ComponentMeta<typeof BoltAlt>;

const Template: ComponentStory<typeof BoltAlt> = (args: BoltAltPropsI) => (
  <Box display="flex" gap="20px">
    <BoltAlt {...args} />
    <BoltAlt {...args} fill="red.500" />
    <BoltAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
