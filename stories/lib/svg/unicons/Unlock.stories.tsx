import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Unlock, UnlockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Unlock",
  component: Unlock,
} as ComponentMeta<typeof Unlock>;

const Template: ComponentStory<typeof Unlock> = (args: UnlockPropsI) => (
  <x.div display="flex" gap="20px">
    <Unlock {...args} />
    <Unlock {...args} fill="red.500" />
    <Unlock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
