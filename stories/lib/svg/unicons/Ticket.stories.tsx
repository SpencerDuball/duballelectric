import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ticket, TicketPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Ticket",
  component: Ticket,
} as ComponentMeta<typeof Ticket>;

const Template: ComponentStory<typeof Ticket> = (args: TicketPropsI) => (
  <x.div display="flex" gap="20px">
    <Ticket {...args} />
    <Ticket {...args} fill="red.500" />
    <Ticket {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
