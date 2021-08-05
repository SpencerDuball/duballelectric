import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Icons, IconsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Icons",
  component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args: IconsPropsI) => (
  <x.div display="flex" gap="20px">
    <Icons {...args} />
    <Icons {...args} fill="red.500" />
    <Icons {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
