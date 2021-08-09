import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { QrcodeScan, QrcodeScanPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/QrcodeScan",
  component: QrcodeScan,
} as ComponentMeta<typeof QrcodeScan>;

const Template: ComponentStory<typeof QrcodeScan> = (
  args: QrcodeScanPropsI
) => (
  <x.div display="flex" gap="20px">
    <QrcodeScan {...args} />
    <QrcodeScan {...args} fill="red.500" />
    <QrcodeScan {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
