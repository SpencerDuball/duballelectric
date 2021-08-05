import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudHail, CloudHailPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudHail",
  component: CloudHail,
} as ComponentMeta<typeof CloudHail>;

const Template: ComponentStory<typeof CloudHail> = (args: CloudHailPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudHail {...args} />
    <CloudHail {...args} fill="red.500" />
    <CloudHail {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
