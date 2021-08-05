import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExclamationCircle, ExclamationCirclePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ExclamationCircle",
  component: ExclamationCircle,
} as ComponentMeta<typeof ExclamationCircle>;

const Template: ComponentStory<typeof ExclamationCircle> = (
  args: ExclamationCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <ExclamationCircle {...args} />
    <ExclamationCircle {...args} fill="red.500" />
    <ExclamationCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
