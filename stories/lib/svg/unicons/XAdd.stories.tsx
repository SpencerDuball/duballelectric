import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { XAdd, XAddPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/XAdd",
  component: XAdd,
} as ComponentMeta<typeof XAdd>;

const Template: ComponentStory<typeof XAdd> = (args: XAddPropsI) => (
  <x.div display="flex" gap="20px">
    <XAdd {...args} />
    <XAdd {...args} fill="red.500" />
    <XAdd {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
