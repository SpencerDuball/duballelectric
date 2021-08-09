import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Browser, BrowserPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Browser",
  component: Browser,
} as ComponentMeta<typeof Browser>;

const Template: ComponentStory<typeof Browser> = (args: BrowserPropsI) => (
  <x.div display="flex" gap="20px">
    <Browser {...args} />
    <Browser {...args} fill="red.500" />
    <Browser {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
