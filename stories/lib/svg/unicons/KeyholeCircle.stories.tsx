import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { KeyholeCircle, KeyholeCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeyholeCircle",
  component: KeyholeCircle,
} as ComponentMeta<typeof KeyholeCircle>;

const Template: ComponentStory<typeof KeyholeCircle> = (
  args: KeyholeCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <KeyholeCircle {...args} />
    <KeyholeCircle {...args} fill="red.500" />
    <KeyholeCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
