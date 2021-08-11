import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Ninja, NinjaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ninja",
  component: Ninja,
} as ComponentMeta<typeof Ninja>;

const Template: ComponentStory<typeof Ninja> = (args: NinjaPropsI) => (
  <Box display="flex" gap="20px">
    <Ninja {...args} />
    <Ninja {...args} fill="red.500" />
    <Ninja {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
