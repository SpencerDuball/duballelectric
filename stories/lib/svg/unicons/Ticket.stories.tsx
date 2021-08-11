import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Ticket, TicketPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ticket",
  component: Ticket,
} as ComponentMeta<typeof Ticket>;

const Template: ComponentStory<typeof Ticket> = (args: TicketPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Ticket {...args} />
    <Ticket {...args} fill="red.500" />
    <Ticket {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
