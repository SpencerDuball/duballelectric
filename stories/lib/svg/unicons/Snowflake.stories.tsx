import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Snowflake, SnowflakePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Snowflake",
  component: Snowflake,
} as ComponentMeta<typeof Snowflake>;

const Template: ComponentStory<typeof Snowflake> = (args: SnowflakePropsI) => (
  <Box display="flex" gap="20px">
    <Snowflake {...args} />
    <Snowflake {...args} fill="red.500" />
    <Snowflake {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
