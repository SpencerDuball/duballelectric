import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Moneybag, MoneybagPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Moneybag",
  component: Moneybag,
} as ComponentMeta<typeof Moneybag>;

const Template: ComponentStory<typeof Moneybag> = (args: MoneybagPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Moneybag {...args} />
    <Moneybag {...args} fill="red.500" />
    <Moneybag {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
