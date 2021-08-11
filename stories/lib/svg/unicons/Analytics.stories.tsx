import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Analytics, AnalyticsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Analytics",
  component: Analytics,
} as ComponentMeta<typeof Analytics>;

const Template: ComponentStory<typeof Analytics> = (args: AnalyticsPropsI) => (
  <Box display="flex" gap="20px">
    <Analytics {...args} />
    <Analytics {...args} fill="red.500" />
    <Analytics {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
