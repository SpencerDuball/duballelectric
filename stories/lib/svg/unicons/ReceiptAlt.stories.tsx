import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ReceiptAlt, ReceiptAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ReceiptAlt",
  component: ReceiptAlt,
} as ComponentMeta<typeof ReceiptAlt>;

const Template: ComponentStory<typeof ReceiptAlt> = (
  args: ReceiptAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ReceiptAlt {...args} />
    <ReceiptAlt {...args} fill="red.500" />
    <ReceiptAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
