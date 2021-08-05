import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudWind, CloudWindPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudWind",
  component: CloudWind,
} as ComponentMeta<typeof CloudWind>;

const Template: ComponentStory<typeof CloudWind> = (args: CloudWindPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudWind {...args} />
    <CloudWind {...args} fill="red.500" />
    <CloudWind {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
