import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExchangeAlt, ExchangeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExchangeAlt",
  component: ExchangeAlt,
} as ComponentMeta<typeof ExchangeAlt>;

const Template: ComponentStory<typeof ExchangeAlt> = (
  args: ExchangeAltPropsI
) => (
  <Box display="flex" gap="20px">
    <ExchangeAlt {...args} />
    <ExchangeAlt {...args} fill="red.500" />
    <ExchangeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
