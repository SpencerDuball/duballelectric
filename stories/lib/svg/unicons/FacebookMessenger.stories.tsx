import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FacebookMessenger, FacebookMessengerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FacebookMessenger",
  component: FacebookMessenger,
} as ComponentMeta<typeof FacebookMessenger>;

const Template: ComponentStory<typeof FacebookMessenger> = (
  args: FacebookMessengerPropsI
) => (
  <x.div display="flex" gap="20px">
    <FacebookMessenger {...args} />
    <FacebookMessenger {...args} fill="red.500" />
    <FacebookMessenger {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
