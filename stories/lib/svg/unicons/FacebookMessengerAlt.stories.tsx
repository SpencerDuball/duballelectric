import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  FacebookMessengerAlt,
  FacebookMessengerAltPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FacebookMessengerAlt",
  component: FacebookMessengerAlt,
} as ComponentMeta<typeof FacebookMessengerAlt>;

const Template: ComponentStory<typeof FacebookMessengerAlt> = (
  args: FacebookMessengerAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FacebookMessengerAlt {...args} />
    <FacebookMessengerAlt {...args} fill="red.500" />
    <FacebookMessengerAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
