import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Calling, CallingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Calling",
  component: Calling,
} as ComponentMeta<typeof Calling>;

const Template: ComponentStory<typeof Calling> = (args: CallingPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Calling {...args} />
    <Calling {...args} fill="red.500" />
    <Calling {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
