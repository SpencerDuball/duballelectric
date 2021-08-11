import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SnowflakeAlt, SnowflakeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SnowflakeAlt",
  component: SnowflakeAlt,
} as ComponentMeta<typeof SnowflakeAlt>;

const Template: ComponentStory<typeof SnowflakeAlt> = (
  args: SnowflakeAltPropsI
) => (
  <Box display="flex" gap="20px">
    <SnowflakeAlt {...args} />
    <SnowflakeAlt {...args} fill="red.500" />
    <SnowflakeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
