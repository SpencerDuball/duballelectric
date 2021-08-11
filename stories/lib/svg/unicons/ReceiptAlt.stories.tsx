import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ReceiptAlt, ReceiptAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ReceiptAlt",
  component: ReceiptAlt,
} as ComponentMeta<typeof ReceiptAlt>;

const Template: ComponentStory<typeof ReceiptAlt> = (
  args: ReceiptAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ReceiptAlt {...args} />
    <ReceiptAlt {...args} fill="red.500" />
    <ReceiptAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
