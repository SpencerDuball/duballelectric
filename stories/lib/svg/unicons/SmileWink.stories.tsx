import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SmileWink, SmileWinkPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SmileWink",
  component: SmileWink,
} as ComponentMeta<typeof SmileWink>;

const Template: ComponentStory<typeof SmileWink> = (args: SmileWinkPropsI) => (
  <x.div display="flex" gap="20px">
    <SmileWink {...args} />
    <SmileWink {...args} fill="red.500" />
    <SmileWink {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
