import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { XAdd, XAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/XAdd",
  component: XAdd,
} as ComponentMeta<typeof XAdd>;

const Template: ComponentStory<typeof XAdd> = (args: XAddPropsI) => (
  <Box display="flex" gap="20px">
    <XAdd {...args} />
    <XAdd {...args} fill="red.500" />
    <XAdd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
