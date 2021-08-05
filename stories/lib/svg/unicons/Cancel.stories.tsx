import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Cancel, CancelPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Cancel",
  component: Cancel,
} as ComponentMeta<typeof Cancel>;

const Template: ComponentStory<typeof Cancel> = (args: CancelPropsI) => (
  <x.div display="flex" gap="20px">
    <Cancel {...args} />
    <Cancel {...args} fill="red.500" />
    <Cancel {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
