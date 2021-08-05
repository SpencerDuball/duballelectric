import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TelegramAlt, TelegramAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TelegramAlt",
  component: TelegramAlt,
} as ComponentMeta<typeof TelegramAlt>;

const Template: ComponentStory<typeof TelegramAlt> = (
  args: TelegramAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <TelegramAlt {...args} />
    <TelegramAlt {...args} fill="red.500" />
    <TelegramAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
