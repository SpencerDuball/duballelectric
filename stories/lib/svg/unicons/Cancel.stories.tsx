import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Cancel, CancelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Cancel",
  component: Cancel,
} as ComponentMeta<typeof Cancel>;

const Template: ComponentStory<typeof Cancel> = (args: CancelPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Cancel {...args} />
    <Cancel {...args} fill="red.500" />
    <Cancel {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
