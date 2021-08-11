import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Invoice, InvoicePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Invoice",
  component: Invoice,
} as ComponentMeta<typeof Invoice>;

const Template: ComponentStory<typeof Invoice> = (args: InvoicePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Invoice {...args} />
    <Invoice {...args} fill="red.500" />
    <Invoice {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
