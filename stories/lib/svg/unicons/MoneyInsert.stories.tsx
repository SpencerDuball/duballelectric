import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneyInsert, MoneyInsertPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneyInsert",
  component: MoneyInsert,
} as ComponentMeta<typeof MoneyInsert>;

const Template: ComponentStory<typeof MoneyInsert> = (
  args: MoneyInsertPropsI
) => (
  <Box display="flex" gap="20px">
    <MoneyInsert {...args} />
    <MoneyInsert {...args} fill="red.500" />
    <MoneyInsert {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
