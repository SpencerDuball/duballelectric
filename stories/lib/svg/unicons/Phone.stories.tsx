import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Phone, PhonePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Phone",
  component: Phone,
} as ComponentMeta<typeof Phone>;

const Template: ComponentStory<typeof Phone> = (args: PhonePropsI) => (
  <x.div display="flex" gap="20px">
    <Phone {...args} />
    <Phone {...args} fill="red.500" />
    <Phone {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
