import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Invoice, InvoicePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Invoice",
  component: Invoice,
} as ComponentMeta<typeof Invoice>;

const Template: ComponentStory<typeof Invoice> = (args: InvoicePropsI) => (
  <x.div display="flex" gap="20px">
    <Invoice {...args} />
    <Invoice {...args} fill="red.500" />
    <Invoice {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
