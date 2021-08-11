import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SadSquint, SadSquintPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SadSquint",
  component: SadSquint,
} as ComponentMeta<typeof SadSquint>;

const Template: ComponentStory<typeof SadSquint> = (args: SadSquintPropsI) => (
  <Box display="flex" gap="20px">
    <SadSquint {...args} />
    <SadSquint {...args} fill="red.500" />
    <SadSquint {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
