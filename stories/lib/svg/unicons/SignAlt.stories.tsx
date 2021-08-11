import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SignAlt, SignAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignAlt",
  component: SignAlt,
} as ComponentMeta<typeof SignAlt>;

const Template: ComponentStory<typeof SignAlt> = (args: SignAltPropsI) => (
  <Box display="flex" gap="20px">
    <SignAlt {...args} />
    <SignAlt {...args} fill="red.500" />
    <SignAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
