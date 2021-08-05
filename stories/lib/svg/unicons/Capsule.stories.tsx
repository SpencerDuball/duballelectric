import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Capsule, CapsulePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Capsule",
  component: Capsule,
} as ComponentMeta<typeof Capsule>;

const Template: ComponentStory<typeof Capsule> = (args: CapsulePropsI) => (
  <x.div display="flex" gap="20px">
    <Capsule {...args} />
    <Capsule {...args} fill="red.500" />
    <Capsule {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
