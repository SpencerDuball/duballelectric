import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Kayak, KayakPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Kayak",
  component: Kayak,
} as ComponentMeta<typeof Kayak>;

const Template: ComponentStory<typeof Kayak> = (args: KayakPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Kayak {...args} />
    <Kayak {...args} fill="red.500" />
    <Kayak {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
