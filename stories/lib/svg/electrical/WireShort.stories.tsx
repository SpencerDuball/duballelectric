import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WireShort, WireShortPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/WireShort",
  component: WireShort,
} as ComponentMeta<typeof WireShort>;

const Template: ComponentStory<typeof WireShort> = (args: WireShortPropsI) => (
  <Box display="flex" gap="20px">
    <WireShort {...args} />
    <WireShort {...args} fill="red.500" />
    <WireShort {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
