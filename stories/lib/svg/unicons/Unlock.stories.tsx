import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Unlock, UnlockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Unlock",
  component: Unlock,
} as ComponentMeta<typeof Unlock>;

const Template: ComponentStory<typeof Unlock> = (args: UnlockPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Unlock {...args} />
    <Unlock {...args} fill="red.500" />
    <Unlock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
