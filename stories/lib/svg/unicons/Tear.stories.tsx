import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Tear, TearPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Tear",
  component: Tear,
} as ComponentMeta<typeof Tear>;

const Template: ComponentStory<typeof Tear> = (args: TearPropsI) => (
  <Box display="flex" gap="20px">
    <Tear {...args} />
    <Tear {...args} fill="red.500" />
    <Tear {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
