import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BandAid, BandAidPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BandAid",
  component: BandAid,
} as ComponentMeta<typeof BandAid>;

const Template: ComponentStory<typeof BandAid> = (args: BandAidPropsI) => (
  <Box display="flex" gap="20px">
    <BandAid {...args} />
    <BandAid {...args} fill="red.500" />
    <BandAid {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
