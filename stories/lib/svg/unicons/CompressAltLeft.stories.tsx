import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CompressAltLeft, CompressAltLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompressAltLeft",
  component: CompressAltLeft,
} as ComponentMeta<typeof CompressAltLeft>;

const Template: ComponentStory<typeof CompressAltLeft> = (
  args: CompressAltLeftPropsI
) => (
  <Box display="flex" gap="20px">
    <CompressAltLeft {...args} />
    <CompressAltLeft {...args} fill="red.500" />
    <CompressAltLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
