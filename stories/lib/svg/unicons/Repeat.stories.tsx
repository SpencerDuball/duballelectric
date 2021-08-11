import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Repeat, RepeatPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Repeat",
  component: Repeat,
} as ComponentMeta<typeof Repeat>;

const Template: ComponentStory<typeof Repeat> = (args: RepeatPropsI) => (
  <Box display="flex" gap="20px">
    <Repeat {...args} />
    <Repeat {...args} fill="red.500" />
    <Repeat {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
