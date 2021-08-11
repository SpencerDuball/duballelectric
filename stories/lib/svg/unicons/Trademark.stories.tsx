import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Trademark, TrademarkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Trademark",
  component: Trademark,
} as ComponentMeta<typeof Trademark>;

const Template: ComponentStory<typeof Trademark> = (args: TrademarkPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Trademark {...args} />
    <Trademark {...args} fill="red.500" />
    <Trademark {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
