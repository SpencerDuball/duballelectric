import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Transaction, TransactionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Transaction",
  component: Transaction,
} as ComponentMeta<typeof Transaction>;

const Template: ComponentStory<typeof Transaction> = (
  args: TransactionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Transaction {...args} />
    <Transaction {...args} fill="red.500" />
    <Transaction {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
