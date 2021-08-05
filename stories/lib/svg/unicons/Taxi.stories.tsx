import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Taxi, TaxiPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Taxi",
  component: Taxi,
} as ComponentMeta<typeof Taxi>;

const Template: ComponentStory<typeof Taxi> = (args: TaxiPropsI) => (
  <x.div display="flex" gap="20px">
    <Taxi {...args} />
    <Taxi {...args} fill="red.500" />
    <Taxi {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
