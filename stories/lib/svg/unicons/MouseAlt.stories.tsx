import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MouseAlt, MouseAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MouseAlt",
  component: MouseAlt,
} as ComponentMeta<typeof MouseAlt>;

const Template: ComponentStory<typeof MouseAlt> = (args: MouseAltPropsI) => (
  <Box display="flex" gap="20px">
    <MouseAlt {...args} />
    <MouseAlt {...args} fill="red.500" />
    <MouseAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
