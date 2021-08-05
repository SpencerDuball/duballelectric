import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExchangeAlt, ExchangeAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ExchangeAlt",
  component: ExchangeAlt,
} as ComponentMeta<typeof ExchangeAlt>;

const Template: ComponentStory<typeof ExchangeAlt> = (
  args: ExchangeAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ExchangeAlt {...args} />
    <ExchangeAlt {...args} fill="red.500" />
    <ExchangeAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
