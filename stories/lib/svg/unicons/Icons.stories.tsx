import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Icons, IconsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Icons",
  component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args: IconsPropsI) => (
  <Box display="flex" gap="20px">
    <Icons {...args} />
    <Icons {...args} fill="red.500" />
    <Icons {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
