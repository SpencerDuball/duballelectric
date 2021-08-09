import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Html5Alt, Html5AltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Html5Alt",
  component: Html5Alt,
} as ComponentMeta<typeof Html5Alt>;

const Template: ComponentStory<typeof Html5Alt> = (args: Html5AltPropsI) => (
  <x.div display="flex" gap="20px">
    <Html5Alt {...args} />
    <Html5Alt {...args} fill="red.500" />
    <Html5Alt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
