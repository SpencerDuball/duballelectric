import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SlackAlt, SlackAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SlackAlt",
  component: SlackAlt,
} as ComponentMeta<typeof SlackAlt>;

const Template: ComponentStory<typeof SlackAlt> = (args: SlackAltPropsI) => (
  <x.div display="flex" gap="20px">
    <SlackAlt {...args} />
    <SlackAlt {...args} fill="red.500" />
    <SlackAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
