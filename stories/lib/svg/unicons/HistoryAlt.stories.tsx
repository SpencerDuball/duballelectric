import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HistoryAlt, HistoryAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HistoryAlt",
  component: HistoryAlt,
} as ComponentMeta<typeof HistoryAlt>;

const Template: ComponentStory<typeof HistoryAlt> = (
  args: HistoryAltPropsI
) => (
  <Box display="flex" gap="20px">
    <HistoryAlt {...args} />
    <HistoryAlt {...args} fill="red.500" />
    <HistoryAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
