import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Dialpad, DialpadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Dialpad",
  component: Dialpad,
} as ComponentMeta<typeof Dialpad>;

const Template: ComponentStory<typeof Dialpad> = (args: DialpadPropsI) => (
  <Box display="flex" gap="20px">
    <Dialpad {...args} />
    <Dialpad {...args} fill="red.500" />
    <Dialpad {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
