import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CreditCard, CreditCardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CreditCard",
  component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (
  args: CreditCardPropsI
) => (
  <Box display="flex" gap="20px">
    <CreditCard {...args} />
    <CreditCard {...args} fill="red.500" />
    <CreditCard {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
