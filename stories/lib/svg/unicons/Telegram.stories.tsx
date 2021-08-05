import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Telegram, TelegramPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Telegram",
  component: Telegram,
} as ComponentMeta<typeof Telegram>;

const Template: ComponentStory<typeof Telegram> = (args: TelegramPropsI) => (
  <x.div display="flex" gap="20px">
    <Telegram {...args} />
    <Telegram {...args} fill="red.500" />
    <Telegram {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
