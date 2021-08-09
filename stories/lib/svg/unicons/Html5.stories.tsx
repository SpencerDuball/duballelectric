import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Html5, Html5PropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Html5",
  component: Html5,
} as ComponentMeta<typeof Html5>;

const Template: ComponentStory<typeof Html5> = (args: Html5PropsI) => (
  <x.div display="flex" gap="20px">
    <Html5 {...args} />
    <Html5 {...args} fill="red.500" />
    <Html5 {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
