import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Slack, SlackPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Slack",
  component: Slack,
} as ComponentMeta<typeof Slack>;

const Template: ComponentStory<typeof Slack> = (args: SlackPropsI) => (
  <x.div display="flex" gap="20px">
    <Slack {...args} />
    <Slack {...args} fill="red.500" />
    <Slack {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
