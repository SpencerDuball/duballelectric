import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TelegramAlt, TelegramAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TelegramAlt",
  component: TelegramAlt,
} as ComponentMeta<typeof TelegramAlt>;

const Template: ComponentStory<typeof TelegramAlt> = (
  args: TelegramAltPropsI
) => (
  <Box display="flex" gap="20px">
    <TelegramAlt {...args} />
    <TelegramAlt {...args} fill="red.500" />
    <TelegramAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
