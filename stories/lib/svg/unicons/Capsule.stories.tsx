import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Capsule, CapsulePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Capsule",
  component: Capsule,
} as ComponentMeta<typeof Capsule>;

const Template: ComponentStory<typeof Capsule> = (args: CapsulePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Capsule {...args} />
    <Capsule {...args} fill="red.500" />
    <Capsule {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
