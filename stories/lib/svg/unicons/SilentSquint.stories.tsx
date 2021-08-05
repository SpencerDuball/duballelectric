import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SilentSquint, SilentSquintPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SilentSquint",
  component: SilentSquint,
} as ComponentMeta<typeof SilentSquint>;

const Template: ComponentStory<typeof SilentSquint> = (
  args: SilentSquintPropsI
) => (
  <x.div display="flex" gap="20px">
    <SilentSquint {...args} />
    <SilentSquint {...args} fill="red.500" />
    <SilentSquint {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
